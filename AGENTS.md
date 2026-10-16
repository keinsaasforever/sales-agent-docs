# Sales Agent documentation instructions

## About this project

- This repository contains the customer-facing English and German documentation for the keinsaas Sales Agent.
- The site is built with Mintlify. Pages are MDX files and site configuration lives in `docs.json`.
- The Sales Agent product repository is the primary source for shipped UI and behavior.
- The live Sales Agent Terms and Privacy Policy are authoritative for legal wording. Documentation should explain only the operational parts customers need and link to the legal pages.

## Product terminology

- Use **Sales Agent** for the product.
- A **seat** represents one sales representative and includes one LinkedIn account and one email account.
- A **contact** is a person added or found by the customer. A **prospect** is a contact being worked by the outreach pipeline.
- A **stage** is derived from recorded activity. Customers do not set stages manually.
- An **outcome** stops automated outreach. A person sets most outcomes; the Sales Agent sets **Asked to stop** and **Unreachable** itself, and logging a call can set one. Use **In play** for a prospect without an outcome.
- Use **ICP** after first writing **ideal customer profile (ICP)** on a page.
- Use **Next run queue** for the dashboard forecast of work ready for each pipeline step.

## Product rules

- Credits pay for search and enrichment: contact search per lookup, email and phone per result found, buying-signal search 1 credit per company searched. A returned candidate can still fail granular ICP filters, so credits used do not equal prospects accepted into the pipeline.
- Each seat includes 300 starter credits.
- The maximum sequence is three email follow-ups plus one LinkedIn follow-up.
- Saving a blacklist entry immediately stops matching prospects already in the pipeline.
- Weekly LinkedIn ceilings per account: Free and Premium up to 50; Sales Navigator about 100, up to 200 from SSI 70. Volume and account safety are never guaranteed.
- State that keinsaas applies available safety measures and that customers remain responsible for following the LinkedIn hygiene rules.
- Do not describe the optional second daily schedule block as shipped until it is available in **Settings → Schedule**.

## Style

- Write in the page's configured language, active voice, and second person.
- Keep English pages at their current paths and mirror German translations under `de/`.
- Keep navigation, frontmatter, and internal links localized. Preserve exact English UI labels when they identify controls in the dashboard.
- Update the matching German page whenever English source content changes.
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
- A feature only keinsaas can switch on: describe it only as the dashboard itself does ("runs once keinsaas switches it on with you").
- Do not reproduce the full Terms or Privacy Policy. Summarize usage-relevant responsibilities and link to the live legal pages.
- Never promise lead volume, campaign outcomes, deliverability, or LinkedIn account safety.
- Do not claim that every returned search result matches the customer's ICP.

## Verification

- Read `docs.json` and nearby pages before editing.
- Confirm product behavior against the Sales Agent repository before making factual changes.
- The docs follow production, the product repo's `main`. Each sync PR is titled `Sync to Sales Agent main <sha12>`; the next sync starts from that commit (the product repo's `/release` skill runs it).
- Add every new page to `docs.json`.
- Run `mint validate`, `mint broken-links`, and `mint a11y` before publishing.
