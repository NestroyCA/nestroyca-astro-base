# website template

template repository for project websites.

## how to run

prerequisites:

- [Node.js v18](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/installation)

set required environment variables in `.env.local`:

```bash
cp .env.example .env.local
```

also, for deployment, set environment variables in
[github](https://github.com/acdh-oeaw/template-website-astro/settings/variables/actions).

install dependencies:

```bash
pnpm install
```

run a development server on [http://localhost:3000](http://localhost:3000):

```bash
pnpm run dev
```
