# Node Matrix Demo

This project demonstrates GitHub Actions matrix testing for a simple Node.js application.

The workflow runs the same tests on three Node.js versions:

- Node.js 16
- Node.js 18
- Node.js 20

## Run locally

```bash
npm install
npm test
```

## GitHub Actions

Workflow file:

```text
.github/workflows/matrix-ci.yml
```

The workflow uses:

- `actions/checkout@v4`
- `actions/setup-node@v4`
- `cache: npm`
- `npm ci`
- matrix strategy for multiple Node.js versions
