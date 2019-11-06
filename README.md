# awesome-panel

[![Netlify Status](https://api.netlify.com/api/v1/badges/7ff18910-45d5-4cc4-ae88-a5e41a9aad03/deploy-status)](https://app.netlify.com/sites/condescending-curie-01f040/deploys)

An example of `lit-element` setup that works on `IE11`.


[demo](https://condescending-curie-01f040.netlify.com)


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
<script src='index.js' type="module"></script>
<script src='index.legacy.js' nomodule=""></script>
```
