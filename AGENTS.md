# Sales Agent documentation instructions

## About this project

- This repository contains the customer-facing English documentation for the keinsaas Sales Agent.
- The site is built with Mintlify. Pages are MDX files and site configuration lives in `docs.json`.
- The Sales Agent product repository is the primary source for shipped UI and behavior.
- The live Sales Agent Terms and Privacy Policy are authoritative for legal wording. Documentation should explain only the operational parts customers need and link to the legal pages.

## Product terminology

- Use **Sales Agent** for the product.
- A **seat** represents one sales representative and includes one LinkedIn account and one email account.
- A **contact** is a person added or found by the customer. A **prospect** is a contact being worked by the outreach pipeline.
- A **stage** is derived from recorded activity. Customers do not set stages manually.
- An **outcome** is set by a person and stops automated outreach. Use **In play** for a prospect without an outcome.
- Use **ICP** after first writing **ideal customer profile (ICP)** on a page.
- Use **Next run queue** for the dashboard forecast of work ready for each pipeline step.

## Product rules

- Credits pay for returned search or enrichment results. A returned candidate can still fail granular ICP filters, so credits used do not equal prospects accepted into the pipeline.
- Each seat includes 300 starter credits.
- The maximum sequence is three email follow-ups plus one LinkedIn follow-up.
- Saving a blacklist entry immediately stops matching prospects already in the pipeline.
- Treat roughly 100 Sales Navigator contacts per week per account as the normal ceiling. Higher SSI may allow more, but volume and account safety are never guaranteed.
- State that keinsaas applies available safety measures and that customers remain responsible for following the LinkedIn hygiene rules.
- Do not describe the optional second daily schedule block as shipped until it is available in **Settings → Schedule**.

## Style

- Write in English, active voice, and second person.
- Use sentence case for headings.
- Start with what the user can accomplish, then explain how.
- Keep paragraphs short and make procedures scannable.
- Bold UI labels: Select **Settings → Targeting**.
- Prefer concrete product behavior over promotional claims.
- Use Mintlify components only when they improve navigation, sequencing, or safety.
- Use root-relative links without file extensions for internal pages.

## Content boundaries

- Document customer-visible, shipped behavior only.
- Do not expose provider names, internal service architecture, database fields, IDs, secrets, prompts, or operational runbooks.
- Do not document internal admin screens, future roadmap items, or TODOs as available features.
- Do not reproduce the full Terms or Privacy Policy. Summarize usage-relevant responsibilities and link to the live legal pages.
- Never promise lead volume, campaign outcomes, deliverability, or LinkedIn account safety.
- Do not claim that every returned search result matches the customer's ICP.

## Verification

- Read `docs.json` and nearby pages before editing.
- Confirm product behavior against the Sales Agent repository before making factual changes.
- Add every new page to `docs.json`.
- Run `mint validate`, `mint broken-links`, and `mint a11y` before publishing.
