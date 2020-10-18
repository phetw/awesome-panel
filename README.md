# awesome-panel

## Getting started

```sh
npm install && npm run build && npm run start
```

## Differential loading

The branch `with-legacy` output 2 bundles:

1. Modern JavaScript syntax (smaller, requires modern browsers) - `build/index.js`.
2. Legacy JavaScript syntax (larger, compatible with older browsers) - `build/index.legacy.js`.

The bundle will be automatically chosen by the browser by using `type="module"` and `nomodule=""` technique.

```html
<script src="index.js" type="module"></script>
<script src="index.legacy.js" nomodule=""></script>
```
