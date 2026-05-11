export default function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 py-20">
      <h1 className="font-heading text-4xl font-bold tracking-tight">About SignalStack</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p className="lead">
          SignalStack was born from a simple observation: modern companies don't lack data; they lack <strong>semantic alignment.</strong>
        </p>
        <p>
          As organizations scale, reality bifurcates. Sales tells one story, Engineering builds another, and Customer Support deals with the fallout. Traditional BI tools measure the exhaust of these processes (drop-off rates, churn, ticket volume), but they fail to capture the <em>human</em> friction that causes those metrics to turn red.
        </p>
        <h2>Our Philosophy</h2>
        <p>
          We believe that unstructured data—transcripts, tickets, meeting notes, qualitative feedback—houses the highest-fidelity signal in any company.
        </p>
        <p>
          SignalStack doesn't try to build generic chatbots. Instead, we use deterministic AI workflows to hunt for specific anti-patterns:
        </p>
        <ul>
          <li>Expectation Gaps</li>
          <li>Contradictions</li>
          <li>Narrative Defensiveness</li>
          <li>Psychological Friction</li>
        </ul>
        <p>
          Built for Product Managers, Operations Leaders, and Founders who need to know the truth before it affects the bottom line.
        </p>
      </div>
    </div>
  );
}
