# Astro Flow

**Astro Flow** lets you use control flow statements in [Astro](https://astro.build).

[![NPM Version][npm-img]][npm-url]
[![Open in StackBlitz][stackblitz-img]][stackblitz-url]

```astro
<For of={items}>{
  (item) => <h2>{item.title}</h2>
}</For>
```

```astro
<When {checkForTruthiness} {alsoCheckForTruthiness}>
  <p>Everything was Truthy!</p>

  <Fragment slot="else">
    <p>Not everything was truthy...</p>
</When>
```

```astro
<Switch of={null}>
  <Case of={true}>
    <h1>Positive</h1>
    <h2>Truly Positive</h2>
  </Case>
  <Case of={false}>
    <h1>Negative</h1>
    <h2>Really Negative</h2>
  </Case>
  <Case default>
    <h1>Default</h1>
    <h2>Definitely Default</h2>
  </Case>
</Switch>
```

## Usage

Install **Astro Flow** to your project.

```shell
npm install @astropub/flow
```

Use **Astro Flow** components in your project.

```astro
---
import { Case, For, Switch, When } from '@astropub/flow'
---
<For of={items}>{
  (item) => <h2>{item.title}</h2>
}</For>

<When {true}>
  <p>Things are true.</p>
</When>

<Switch of={null}>
  <Case of={true}>
    <h1>Positive</h1>
    <h2>Truly Positive</h2>
  </Case>
  <Case of={false}>
    <h1>Negative</h1>
    <h2>Really Negative</h2>
  </Case>
  <Case default>
    <h1>Default</h1>
    <h2>Definitely Default</h2>
  </Case>
</Switch>
```

Enjoy!

[npm-img]: https://img.shields.io/npm/v/@astropub/flow?color=%23444&label=&labelColor=%23CB0000&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE1MCAxNTAgNDAwIDQwMCIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTE1MCA1NTBoMjAwVjI1MGgxMDB2MzAwaDEwMFYxNTBIMTUweiIvPjwvc3ZnPg==&style=for-the-badge
[npm-url]: https://www.npmjs.com/package/@astropub/flow
[stackblitz-img]: https://img.shields.io/badge/-Open%20in%20Stackblitz-%231374EF?color=%23444&labelColor=%231374EF&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjEwIDggMTIgMTgiIGhlaWdodD0iMTgiIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0xMCAxNy42aDUuMmwtMyA3LjRMMjIgMTQuNGgtNS4ybDMtNy40TDEwIDE3LjZaIi8+PC9zdmc+&style=for-the-badge
[stackblitz-url]: https://stackblitz.com/github/astro-community/astro-flow
