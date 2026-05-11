# SignalStack | AI Workflow Intelligence Suite

SignalStack is a premium AI-powered workflow intelligence platform that helps teams uncover hidden operational friction, behavioral patterns, contradictions, and narrative shifts across business workflows.

**View the Case Study inside the app (`/case-study`) for Product Management rationale.**

## 🚀 The Core Philosophy
Modern companies don't lack data; they lack **semantic alignment**.
SignalStack replaces generic chatting with purpose-built deterministic intelligence modules. It analyzes unstructured text (transcripts, tickets, notes) to expose hidden operational risk.

## 🛠️ Tech Stack
- Frontend: React 19 + Vite (SPA Architecture)
- Routing: React Router
- Styling: Tailwind CSS v4 + shadcn/ui
- Animation: motion (Framer Motion)
- Charts: Recharts
- AI: Google GenAI SDK (Gemini 2.5 Flash)
- Icons: Lucide React

## 🧠 The 5 Intelligence Engines
1. **Narrative Drift Tracker:** Detects subtle wording shifts across sequential corporate documents.
2. **Refund Pattern Decoder:** Clusters qualitative refund complaints into operational root causes.
3. **Sales Reality Gap Detector:** Compares sales promises against post-onboarding support reality.
4. **Checkout Anxiety Mapper:** Analyzes interaction vectors to flag psychological friction.
5. **Meeting Contradiction Detector:** Cross-references transcripts to flag asynchronous misalignment.

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file based on `.env.example`:
```bash
GEMINI_API_KEY="your_api_key_here"
```

### 3. Run Development Server
```bash
npm run dev
```

## 🏗️ Future Scope
- Webhook ingestion from Zendesk and Gong.
- Real-time Slack alerting for alignment gaps.
- Streaming LLM chunking for massive 10,000+ row CSV analysis.

---
*Built as a PM Portfolio Project. UI inspired by Linear, Stripe, and Vercel.*
