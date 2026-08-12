# Sales Agent documentation

Customer-facing documentation for the [keinsaas Sales Agent](https://keinsaas.com/sales-agent), built with [Mintlify](https://mintlify.com).

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

## Content sources

- Shipped screens and behavior: the private Sales Agent product repository
- Legal obligations: the live Sales Agent Terms and Privacy Policy
- Product-specific writing rules: `AGENTS.md`

Do not paste internal provider details, credentials, workflow IDs, or implementation notes into customer-facing pages.
