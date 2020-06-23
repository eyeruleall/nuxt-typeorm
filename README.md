# nuxt-typeorm

<!-- [![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href] -->

> TypeORM integration for Nuxt
> [📖 **Release Notes**](./CHANGELOG.md)

## About

Provides simple, drop-in support for TypeORM in nuxt projects.

## Setup

1. Add `nuxt-typeorm` dependency to your project

```bash
yarn add eyeruleall/nuxt-typeorm # or npm install eyeruleall/nuxt-typeorm
```

2. Pass in your connection options inside the `nuxt.config` file.

   See [TypeORM Docs](https://typeorm.io/#/connection-options) for details.

   THIS STEP IS REQUIRED. THIS PACKAGE WILL NOT READ CONFIGURATION FROM FILES

```js
// example options
{
    type: 'sqlite',
    database: './database/db.sqlite',
    entities: ['./**/*.entity.{ts, js}'],
    logging: false,
    synchronize: true
}
```

3. Add `nuxt-typeorm` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    [
      "nuxt-typeorm",
      {
        /* connection options go here */
      }
    ]
  ];
}
```

or

```js
{
  modules: ["nuxt-typeorm"],
  typeorm: {
    /* or here */
  }
}
```

4. Of course, only try to connect to TypeORM from server.

## License

[MIT License](./LICENSE)

Copyright (c) eyeruleall <eyeruleall@gmail.com>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-typeorm/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-typeorm
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-typeorm.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-typeorm
[github-actions-ci-src]: https://github.com/eyeruleall/nuxt-typeorm/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/eyeruleall/nuxt-typeorm/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/eyeruleall/nuxt-typeorm.svg
[codecov-href]: https://codecov.io/gh/eyeruleall/nuxt-typeorm
[license-src]: https://img.shields.io/npm/l/nuxt-typeorm.svg
[license-href]: https://npmjs.com/package/nuxt-typeorm
