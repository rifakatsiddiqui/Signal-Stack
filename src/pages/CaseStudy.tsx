export default function CaseStudy() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 py-20 pb-40">
      <div className="space-y-4">
        <div className="text-sm font-bold text-primary uppercase tracking-widest">Product Management Case Study</div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">Designing Workflow Intelligence</h1>
        <p className="text-xl text-muted-foreground">Moving beyond chat wrappers to build deterministic tools for operational leaders.</p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <hr className="my-10" />

        <h2>1. Product Discovery</h2>
        <p>Current "AI tools for business" largely fall into two categories:</p>
        <ul>
          <li><strong>Chatbots over wikis:</strong> Helpful for fetching facts, but relies on users knowing what questions to ask.</li>
          <li><strong>Text summarizers:</strong> They compress data, often removing the exact nuance (friction, hesitation, defensiveness) that leaders need to see.</li>
        </ul>
        <p>In interviewing 12 VP-level product and operations leaders, a consistent pain point emerged: <em>"I don't need help reading support tickets. I need to know when my Sales team is selling a feature that Eng hasn't built yet."</em></p>

        <h2>2. The Problem Statement</h2>
        <blockquote>
          "How might we surface invisible operational friction—contradictions, narrative drift, and expectation gaps—across siloed unstructured data before they manifest as churn?"
        </blockquote>

        <h2>3. Design Philosophy & Prioritization</h2>
        <p>I prioritized a <strong>Push vs. Pull</strong> paradigm. Instead of requiring users to prompt an AI ("Compare these two documents for differences"), SignalStack provides purpose-built "Engines" with fixed parameters.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
            <div className="border p-6 rounded-xl bg-card">
              <h3 className="font-bold mb-2">Trade-off: Flexibility</h3>
              <p className="text-sm text-muted-foreground">We sacrificed open-ended chat prompting. Users can only run predefined heuristic scans.</p>
            </div>
            <div className="border p-6 rounded-xl bg-card">
              <h3 className="font-bold mb-2">Gain: Determinism</h3>
              <p className="text-sm text-muted-foreground">In exchange, users get predictable structured outputs (graphs, heatmaps, risk scores) they can put in a board deck.</p>
            </div>
        </div>

        <h2>4. MVP Scope Definition</h2>
        <p>To prove the thesis, I scoped 5 isolated intelligence tools:</p>
        <ol>
          <li><strong>Meeting Contradictions:</strong> The highest-impact tool for internal alignment. Proves cross-document semantic analysis.</li>
          <li><strong>Sales vs. Support Gap:</strong> The most direct line to revenue tracking. Compares promises to reality.</li>
          <li><strong>Refund Decoder:</strong> Immediate ROI for e-commerce PMs looking for qualitative root causes.</li>
          <li><strong>Checkout Anxiety:</strong> Evaluated based on session interaction telemetry.</li>
          <li><strong>Narrative Drift:</strong> Proves longitudinal tracking capabilities over time.</li>
        </ol>

        <h2>5. UX and Engineering Implementation</h2>
        <p>I led the development using a modern React SPA via Vite. The architecture leverages:</p>
        <ul>
          <li><strong>shadcn/ui & Tailwind:</strong> For a premium, enterprise-grade interface.</li>
          <li><strong>Recharts & Framer Motion:</strong> To render abstract data into tangible visualizations.</li>
          <li><strong>Simulated Data Layers:</strong> Because live integrations (Salesforce, Zendesk) take months, the MVP relies on CSV/JSON drops.</li>
        </ul>

        <h2>6. Future Scaling Roadmap</h2>
        <p>Phase 2 requires moving from batch processing to streaming. Building API webhooks directly into Slack, Jira, and Gong to process reality gaps in real-time, sending weekly "Friction Digests" directly to leadership.</p>
      </div>
    </div>
  );
}
