import React, { useState, useRef } from 'react';
import { UploadCloud, File, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/button';

interface UploadDropzoneProps {
  onUpload: (files: File[]) => void;
  accept?: string;
  maxFiles?: number;
  label?: string;
}

export function UploadDropzone({ onUpload, accept = "*", maxFiles = 1, label = "Upload dataset" }: UploadDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files).slice(0, maxFiles);
      setFiles(prev => [...prev, ...droppedFiles].slice(0, maxFiles));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files).slice(0, maxFiles);
      setFiles(prev => [...prev, ...selectedFiles].slice(0, maxFiles));
    }
  };

  const removeFile = (indexToRemove: number) => {
    setFiles(files.filter((_, i) => i !== indexToRemove));
  };

  const handleTriggerUpload = () => {
    if (files.length > 0) {
      onUpload(files);
      setFiles([]);
    }
  };

  return (
    <div className="w-full">
      <div 
        className={cn(
          "w-full rounded-xl border-2 border-dashed p-8 transition-colors flex flex-col items-center justify-center text-center cursor-pointer",
          isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:bg-muted/30",
          files.length > 0 ? "pb-4" : ""
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input 
          type="file" 
          className="hidden" 
          ref={inputRef} 
          onChange={handleFileChange} 
          accept={accept} 
          multiple={maxFiles > 1}
        />
        
        <div className="rounded-full bg-muted p-4 mb-4">
          <UploadCloud className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="font-semibold text-lg mb-1">{label}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Drag and drop your files here, or click to browse
        </p>
        <p className="text-xs text-muted-foreground bg-muted/60 px-2 py-1 rounded">
          CSV, JSON, PDF, TXT (Max {maxFiles} file{maxFiles !== 1 && 's'})
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-3">
          <h4 className="text-sm font-medium">Ready to process ({files.length})</h4>
          {files.map((file, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-card shadow-sm">
              <div className="flex items-center gap-3 overflow-hidden">
                <File className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium truncate">{file.name}</span>
                <span className="text-xs text-muted-foreground shrink-0">{(file.size / 1024).toFixed(1)} KB</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => removeFile(i)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button className="w-full mt-2" onClick={handleTriggerUpload}>
             Analyze Files
          </Button>
        </div>
      )}
    </div>
  );
}
