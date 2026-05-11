import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Key } from "lucide-react";

export default function Settings() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and integration preferences.</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Configuration</CardTitle>
            <CardDescription>Configure your connection to AI processing models.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="apiKey">Gemini API Key</Label>
              <div className="flex relative">
                <Key className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="apiKey" type="password" value="************************" readOnly className="pl-9" />
              </div>
              <p className="text-[10px] text-muted-foreground">Key is securely injected via AI Studio environment variables.</p>
            </div>
            <div className="space-y-2 pt-2">
              <Label>Model Execution Priority</Label>
              <select className="flex h-10 w-full md:max-w-[240px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background mb-1">
                <option>Speed (Gemini 2.5 Flash)</option>
                <option>Reasoning (Gemini 2.5 Pro)</option>
              </select>
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/20 mt-4 py-4">
            <Button>Save Configuration</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Retention</CardTitle>
            <CardDescription>Manage how long processed intelligence is stored.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium">Raw Upload Retention</p>
                        <p className="text-sm text-muted-foreground">Keep unencrypted JSON/CSV files after analysis.</p>
                    </div>
                    <Button variant="outline">30 Days</Button>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium">Purge All Analytical Data</p>
                        <p className="text-sm text-muted-foreground">Immediately delete all currently generated insights.</p>
                    </div>
                    <Button variant="destructive">Purge Data</Button>
                </div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
