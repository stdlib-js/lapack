<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# LAPACK

> Base (i.e., lower-level) linear algebra package (LAPACK) routines.

<section class="usage">

## Usage

```javascript
var lapack = require( '@stdlib/lapack/base' );
```

#### lapack

Namespace for "base" (i.e., lower-level) linear algebra package (LAPACK) routines.

```javascript
var o = lapack;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`clacgv( N, cx, strideCX )`][@stdlib/lapack/base/clacgv]</span><span class="delimiter">: </span><span class="description">conjugate each element in a single-precision complex floating-point vector.</span>
-   <span class="signature">[`clacpy( order, uplo, M, N, A, LDA, B, LDB )`][@stdlib/lapack/base/clacpy]</span><span class="delimiter">: </span><span class="description">copy all or part of a matrix `A` to another matrix `B`.</span>
-   <span class="signature">[`claset( order, uplo, M, N, alpha, beta, A, LDA )`][@stdlib/lapack/base/claset]</span><span class="delimiter">: </span><span class="description">set the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values.</span>
-   <span class="signature">[`crot( N, cx, strideCX, cy, strideCY, c, s )`][@stdlib/lapack/base/crot]</span><span class="delimiter">: </span><span class="description">apply a plane rotation with real cosine and complex sine to a pair of single-precision complex floating-point vectors.</span>
-   <span class="signature">[`dgetrans( order, M, N, A, LDA, out, LDO )`][@stdlib/lapack/base/dge-trans]</span><span class="delimiter">: </span><span class="description">convert a matrix from row-major layout to column-major layout or vice versa.</span>
-   <span class="signature">[`dlacpy( order, uplo, M, N, A, LDA, B, LDB )`][@stdlib/lapack/base/dlacpy]</span><span class="delimiter">: </span><span class="description">copy all or part of a matrix `A` to another matrix `B`.</span>
-   <span class="signature">[`dlamch( cmach )`][@stdlib/lapack/base/dlamch]</span><span class="delimiter">: </span><span class="description">determine double-precision floating-point machine parameters.</span>
-   <span class="signature">[`dlassq( N, X, strideX, scale, sumsq )`][@stdlib/lapack/base/dlassq]</span><span class="delimiter">: </span><span class="description">return an updated sum of squares represented in scaled form.</span>
-   <span class="signature">[`dlaswp( N, A, LDA, k1, k2, IPIV, incx )`][@stdlib/lapack/base/dlaswp]</span><span class="delimiter">: </span><span class="description">perform a series of row interchanges on an input matrix.</span>
-   <span class="signature">[`dpttrf( N, D, E )`][@stdlib/lapack/base/dpttrf]</span><span class="delimiter">: </span><span class="description">compute the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.</span>
-   <span class="signature">[`sgetrans( order, M, N, A, LDA, out, LDO )`][@stdlib/lapack/base/sge-trans]</span><span class="delimiter">: </span><span class="description">convert a matrix from row-major layout to column-major layout or vice versa.</span>
-   <span class="signature">[`slacpy( order, uplo, M, N, A, LDA, B, LDB )`][@stdlib/lapack/base/slacpy]</span><span class="delimiter">: </span><span class="description">copy all or part of a matrix `A` to another matrix `B`.</span>
-   <span class="signature">[`slaswp( N, A, LDA, k1, k2, IPIV, incx )`][@stdlib/lapack/base/slaswp]</span><span class="delimiter">: </span><span class="description">perform a series of row interchanges on an input matrix.</span>
-   <span class="signature">[`spttrf( N, D, E )`][@stdlib/lapack/base/spttrf]</span><span class="delimiter">: </span><span class="description">compute the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.</span>
-   <span class="signature">[`zlacgv( N, zx, strideZX )`][@stdlib/lapack/base/zlacgv]</span><span class="delimiter">: </span><span class="description">conjugate each element in a double-precision complex floating-point vector.</span>
-   <span class="signature">[`zlacpy( order, uplo, M, N, A, LDA, B, LDB )`][@stdlib/lapack/base/zlacpy]</span><span class="delimiter">: </span><span class="description">copy all or part of a matrix `A` to another matrix `B`.</span>
-   <span class="signature">[`zlaset( order, uplo, M, N, alpha, beta, A, LDA )`][@stdlib/lapack/base/zlaset]</span><span class="delimiter">: </span><span class="description">set the off-diagonal elements and the diagonal elements of a double-precision complex floating-point matrix to specified values.</span>
-   <span class="signature">[`zrot( N, zx, strideX, zy, strideY, c, s )`][@stdlib/lapack/base/zrot]</span><span class="delimiter">: </span><span class="description">apply a plane rotation with real cosine and complex sine to a pair of double-precision complex floating-point vectors.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var lapack = require( '@stdlib/lapack/base' );

console.log( objectKeys( lapack ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/lapack/base/clacgv]: https://github.com/stdlib-js/lapack/tree/main/base/clacgv

[@stdlib/lapack/base/clacpy]: https://github.com/stdlib-js/lapack/tree/main/base/clacpy

[@stdlib/lapack/base/claset]: https://github.com/stdlib-js/lapack/tree/main/base/claset

[@stdlib/lapack/base/crot]: https://github.com/stdlib-js/lapack/tree/main/base/crot

[@stdlib/lapack/base/dge-trans]: https://github.com/stdlib-js/lapack/tree/main/base/dge-trans

[@stdlib/lapack/base/dlacpy]: https://github.com/stdlib-js/lapack/tree/main/base/dlacpy

[@stdlib/lapack/base/dlamch]: https://github.com/stdlib-js/lapack/tree/main/base/dlamch

[@stdlib/lapack/base/dlassq]: https://github.com/stdlib-js/lapack/tree/main/base/dlassq

[@stdlib/lapack/base/dlaswp]: https://github.com/stdlib-js/lapack/tree/main/base/dlaswp

[@stdlib/lapack/base/dpttrf]: https://github.com/stdlib-js/lapack/tree/main/base/dpttrf

[@stdlib/lapack/base/sge-trans]: https://github.com/stdlib-js/lapack/tree/main/base/sge-trans

[@stdlib/lapack/base/slacpy]: https://github.com/stdlib-js/lapack/tree/main/base/slacpy

[@stdlib/lapack/base/slaswp]: https://github.com/stdlib-js/lapack/tree/main/base/slaswp

[@stdlib/lapack/base/spttrf]: https://github.com/stdlib-js/lapack/tree/main/base/spttrf

[@stdlib/lapack/base/zlacgv]: https://github.com/stdlib-js/lapack/tree/main/base/zlacgv

[@stdlib/lapack/base/zlacpy]: https://github.com/stdlib-js/lapack/tree/main/base/zlacpy

[@stdlib/lapack/base/zlaset]: https://github.com/stdlib-js/lapack/tree/main/base/zlaset

[@stdlib/lapack/base/zrot]: https://github.com/stdlib-js/lapack/tree/main/base/zrot

<!-- </toc-links> -->

</section>

<!-- /.links -->
