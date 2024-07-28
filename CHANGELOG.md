# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-07-28)

<section class="packages">

### Packages

<section class="package" id="lapack-unreleased">

#### [@stdlib/lapack](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/lapack)

<details>

<section class="features">

##### Features

-   [`86ce889`](https://github.com/stdlib-js/stdlib/commit/86ce8890194313ebee3f047d19ea4d0f24d87c3d) - update namespace TypeScript declarations [(#2591)](https://github.com/stdlib-js/stdlib/pull/2591)
-   [`ff4b81e`](https://github.com/stdlib-js/stdlib/commit/ff4b81e8b31931fe7e80cf303b0090e447f0cb56) - add `lapack` namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="lapack-base-unreleased">

#### [@stdlib/lapack/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/lapack/base)

<details>

<section class="features">

##### Features

-   [`7d399c6`](https://github.com/stdlib-js/stdlib/commit/7d399c672b81b82818a91f4f4bb2ca505481cf5a) - add `dpttrf` to namespace
-   [`c325e6a`](https://github.com/stdlib-js/stdlib/commit/c325e6ae798f7f103a3c375b045b39edde818958) - add `dlacpy` to namespace
-   [`6e4b9eb`](https://github.com/stdlib-js/stdlib/commit/6e4b9ebc31d9629446019e37e31bfe9b180b675c) - update namespace TypeScript declarations [(#2681)](https://github.com/stdlib-js/stdlib/pull/2681)
-   [`86ce889`](https://github.com/stdlib-js/stdlib/commit/86ce8890194313ebee3f047d19ea4d0f24d87c3d) - update namespace TypeScript declarations [(#2591)](https://github.com/stdlib-js/stdlib/pull/2591)
-   [`429f55b`](https://github.com/stdlib-js/stdlib/commit/429f55b9db74ca8b92c02636c360819a93c0189f) - add `lapack/base` namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="lapack-base-dlacpy-unreleased">

#### [@stdlib/lapack/base/dlacpy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/lapack/base/dlacpy)

<details>

<section class="features">

##### Features

-   [`6953aae`](https://github.com/stdlib-js/stdlib/commit/6953aae41e500330c26a43137b417d523ffdaaeb) - add `lapack/base/dlacpy` [(#2548)](https://github.com/stdlib-js/stdlib/pull/2548)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="lapack-base-dlaswp-unreleased">

#### [@stdlib/lapack/base/dlaswp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/lapack/base/dlaswp)

<details>

<section class="features">

##### Features

-   [`812e033`](https://github.com/stdlib-js/stdlib/commit/812e0334a74ea13f3e0bf0e3ed3453c1933f8d43) - remove `order` argument from `ndarray` method
-   [`f2dfdb3`](https://github.com/stdlib-js/stdlib/commit/f2dfdb389aadc142ce36367e92e5492b082eef0a) - add `lapack/base/dlaswp` [(#2483)](https://github.com/stdlib-js/stdlib/pull/2483)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`812e033`](https://github.com/stdlib-js/stdlib/commit/812e0334a74ea13f3e0bf0e3ed3453c1933f8d43): remove `order` argument from `ndarray` method
-   [`812e033`](https://github.com/stdlib-js/stdlib/commit/812e0334a74ea13f3e0bf0e3ed3453c1933f8d43): remove `order` argument from `ndarray` method 

    -   To migrate, users should drop the `order` argument when invoking
    the `ndarray` method.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="lapack-base-dpttrf-unreleased">

#### [@stdlib/lapack/base/dpttrf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/lapack/base/dpttrf)

<details>

<section class="features">

##### Features

-   [`0630400`](https://github.com/stdlib-js/stdlib/commit/0630400bbf2b87197035c768e37a9ec6430db6b8) - add `lapack/base/dpttrf` [(#2578)](https://github.com/stdlib-js/stdlib/pull/2578)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`812e033`](https://github.com/stdlib-js/stdlib/commit/812e0334a74ea13f3e0bf0e3ed3453c1933f8d43): remove `order` argument from `ndarray` method
-   [`812e033`](https://github.com/stdlib-js/stdlib/commit/812e0334a74ea13f3e0bf0e3ed3453c1933f8d43): remove `order` argument from `ndarray` method 

    -   To migrate, users should drop the `order` argument when invoking
    the `ndarray` method.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Pranav Goswami

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`7d399c6`](https://github.com/stdlib-js/stdlib/commit/7d399c672b81b82818a91f4f4bb2ca505481cf5a) - **feat:** add `dpttrf` to namespace _(by Athan Reines)_
-   [`0630400`](https://github.com/stdlib-js/stdlib/commit/0630400bbf2b87197035c768e37a9ec6430db6b8) - **feat:** add `lapack/base/dpttrf` [(#2578)](https://github.com/stdlib-js/stdlib/pull/2578) _(by Pranav Goswami, Athan Reines)_
-   [`c325e6a`](https://github.com/stdlib-js/stdlib/commit/c325e6ae798f7f103a3c375b045b39edde818958) - **feat:** add `dlacpy` to namespace _(by Athan Reines)_
-   [`6953aae`](https://github.com/stdlib-js/stdlib/commit/6953aae41e500330c26a43137b417d523ffdaaeb) - **feat:** add `lapack/base/dlacpy` [(#2548)](https://github.com/stdlib-js/stdlib/pull/2548) _(by Pranav Goswami, Athan Reines)_
-   [`04b258f`](https://github.com/stdlib-js/stdlib/commit/04b258f50b436e95832b6d6d4d892cee5aa36ed3) - **docs:** update definition _(by Athan Reines)_
-   [`d61d3f5`](https://github.com/stdlib-js/stdlib/commit/d61d3f5ad8faab321a3ac0159f9b04f6aca4a2bd) - **docs:** fix comments _(by Athan Reines)_
-   [`6e4b9eb`](https://github.com/stdlib-js/stdlib/commit/6e4b9ebc31d9629446019e37e31bfe9b180b675c) - **feat:** update namespace TypeScript declarations [(#2681)](https://github.com/stdlib-js/stdlib/pull/2681) _(by stdlib-bot, Philipp Burckhardt)_
-   [`812e033`](https://github.com/stdlib-js/stdlib/commit/812e0334a74ea13f3e0bf0e3ed3453c1933f8d43) - **feat:** remove `order` argument from `ndarray` method _(by Athan Reines)_
-   [`86ce889`](https://github.com/stdlib-js/stdlib/commit/86ce8890194313ebee3f047d19ea4d0f24d87c3d) - **feat:** update namespace TypeScript declarations [(#2591)](https://github.com/stdlib-js/stdlib/pull/2591) _(by stdlib-bot, Athan Reines)_
-   [`c067b6c`](https://github.com/stdlib-js/stdlib/commit/c067b6c990c99b8f4cf315b5378af8574098962b) - **docs:** update namespace table of contents [(#2576)](https://github.com/stdlib-js/stdlib/pull/2576) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ff4b81e`](https://github.com/stdlib-js/stdlib/commit/ff4b81e8b31931fe7e80cf303b0090e447f0cb56) - **feat:** add `lapack` namespace _(by Athan Reines)_
-   [`429f55b`](https://github.com/stdlib-js/stdlib/commit/429f55b9db74ca8b92c02636c360819a93c0189f) - **feat:** add `lapack/base` namespace _(by Athan Reines)_
-   [`f2dfdb3`](https://github.com/stdlib-js/stdlib/commit/f2dfdb389aadc142ce36367e92e5492b082eef0a) - **feat:** add `lapack/base/dlaswp` [(#2483)](https://github.com/stdlib-js/stdlib/pull/2483) _(by Pranav Goswami, Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

