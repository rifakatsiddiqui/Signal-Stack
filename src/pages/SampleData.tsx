import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/card';
import { FileDown, FileJson, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function SampleData() {
  const datasets = [
    {
      title: "Quarterly Earnings Transcripts",
      desc: "Sequence of 4 quarterly earnings reports indicating narrative drift regarding product launch schedules.",
      type: "TXT",
      size: "1.2 MB",
      icon: FileText
    },
    {
      title: "E-commerce Refund Logs",
      desc: "3,000 raw customer refund requests citing sizing, expectations, and quality issues.",
      type: "CSV",
      size: "450 KB",
      icon: FileDown
    },
    {
      title: "Sales vs Support Corpus",
      desc: "Linked dataset containing pre-sales promises and post-sales support tickets for 200 accounts.",
      type: "JSON",
      size: "2.1 MB",
      icon: FileJson
    },
    {
      title: "Cross-Functional Synced Meetings",
      desc: "Transcripts from Engineering, Product, and Sales team meetings discussing the same core initiative.",
      type: "TXT",
      size: "80 KB",
      icon: FileText
    }
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight mb-2">Sample Datasets</h1>
        <p className="text-muted-foreground">Download these datasets to test the AI Intelligence Engines.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {datasets.map((data, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-semibold">{data.title}</CardTitle>
              <data.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{data.desc}</CardDescription>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                  {data.type} &bull; {data.size}
                </span>
                <Button size="sm" variant="outline">Download</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
