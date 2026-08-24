# Sales Agent documentation

Customer-facing English and German documentation for the [keinsaas Sales Agent](https://keinsaas.com/sales-agent), built with [Mintlify](https://mintlify.com).

## Local development

Install or update the Mintlify CLI:

```bash
npm install --global mint
mint update
```

Preview the site from the repository root:

```bash
mint dev
```

Before opening a pull request, run:

```bash
mint validate
mint broken-links
mint a11y
```

## Publishing

The Mintlify GitHub app builds a preview for pull requests. Changes publish after they are merged into `main`.

## Localization

English is the default language and uses the root page paths. German pages mirror the same structure under `de/`. When English content changes, update the corresponding German page in the same pull request and run the link and accessibility checks for both languages.

## Content sources

- Shipped screens and behavior: the private Sales Agent product repository
- Legal obligations: the live Sales Agent Terms and Privacy Policy
- Product-specific writing rules: `AGENTS.md`

Do not paste internal provider details, credentials, workflow IDs, or implementation notes into customer-facing pages.
