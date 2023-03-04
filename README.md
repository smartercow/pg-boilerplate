## Tech stack 🛠

- [Next.js](https://nextjs.org) (App directory)
- [TypeScript](https://www.typescriptlang.org)
- [Supabase](https://supabase.com)
- [Tailwind CSS](https://tailwindcss.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Git hooks](https://typicode.github.io/husky)

## Packages ✨

- [@headlessui/react](https://headlessui.com)
- [@heroicons/react](https://heroicons.com)
- [@tanstack/react-query](https://react-query-v3.tanstack.com)
- [clsx](https://www.npmjs.com/package/clsx)
- [framer-motion](https://framer.com)
- [recoil](https://recoiljs.org)
- [rippleui](https://www.ripple-ui.com)
- [sass](https://sass-lang.com)

## Getting Started

1. Install dependencies:

```bash
npm i
```

2. Set environment variables in `.env.development`

3. run the development server:

```bash
npm run dev
```

## Add Git hooks

1. Commit your project to a Github repository

2. Execute husky

```bash
npx husky install
```

3. Set 'prepare: "husky install"' in `package.json`

```bash
npm set-script prepare "husky install"
```

3. Add husky pre-commit

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

4. Add the following below 'devDependecies' in `package.json`

```
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
```
