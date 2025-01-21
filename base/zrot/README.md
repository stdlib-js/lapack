<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# zrot

> Apply a plane rotation with real cosine and complex sine to a pair of complex vectors.

<section class="usage">

## Usage

```javascript
var zrot = require( '@stdlib/lapack/base/zrot' );
```

#### zrot( N, zx, strideX, zy, strideY, c, s )

Applies a plane rotation with real cosine and complex sine.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex128( 0.0, 0.75 );

zrot( zx.length, zx, 1, zy, 1, 1.25, s );

var z = zy.get( 0 );
// returns <Complex128>

var re = real( z );
// returns ~-1.5

var im = imag( z );
// returns ~0.75

z = zx.get( 0 );
// returns <Complex128>

re = real( z );
// returns ~1.25

im = imag( z );
// returns ~2.5
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **zx**: first input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `zx`.
-   **zy**: second input [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: index increment for `zy`.

The `N` and stride parameters determine how values from `zx` and `zy` are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex128( 0.0, 0.75 );

zrot( 2, zx, 2, zy, 2, 1.25, s );

var z = zy.get( 0 );
// returns <Complex128>

var re = real( z );
// returns ~-1.5

var im = imag( z );
// returns ~0.75

z = zx.get( 0 );
// returns <Complex128>

re = real( z );
// returns ~1.25

im = imag( z );
// returns ~2.5
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

// Initial arrays...
var zx0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var zy1 = new Complex128Array( zy0.buffer, zy0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var s = new Complex128( 0.0, 0.75 );

zrot( 2, zx1, -2, zy1, 1, 1.25, s );

var z = zy0.get( 2 );
// returns <Complex128>

var re = real( z );
// returns ~-6

var im = imag( z );
// returns ~5.25

z = zx0.get( 3 );
// returns <Complex128>

re = real( z );
// returns ~8.75

im = imag( z );
// returns ~10
```

#### zrot.ndarray( N, zx, strideX, offsetX, zy, strideY, offsetY, c, s )

Applies a plane rotation with real cosine and complex sine using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex128( 0.0, 0.75 );

zrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 1.25, s );

var z = zy.get( 0 );
// returns <Complex128>

var re = real( z );
// returns ~-1.5

var im = imag( z );
// returns ~0.75

z = zx.get( 0 );
// returns <Complex128>

re = real( z );
// returns ~1.25

im = imag( z );
// returns ~2.5
```

The function has the following additional parameters:

-   **offsetX**: starting index for `zx`.
-   **offsetY**: starting index for `zy`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex128( 0.0, 0.75 );

zrot.ndarray( 2, zx, 2, 1, zy, 2, 1, 1.25, s );

var z = zy.get( 3 );
// returns <Complex128>

var re = real( z );
// returns ~-6.0

var im = imag( z );
// returns ~5.25

z = zx.get( 1 );
// returns <Complex128>

re = real( z );
// returns ~3.75

im = imag( z );
// returns ~5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `zx` and `zy` unchanged.
-   `zrot()` corresponds to the [LAPACK][lapack] routine [`zrot`][zrot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zcopy = require( '@stdlib/blas/base/zcopy' );
var zeros = require( '@stdlib/array/zeros' );
var logEach = require( '@stdlib/console/log-each' );
var zrot = require( '@stdlib/lapack/base/zrot' );

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

// Generate random input arrays:
var zx = filledarrayBy( 10, 'complex128', rand );
var zxc = zcopy( zx.length, zx, 1, zeros( zx.length, 'complex128' ), 1 );

var zy = filledarrayBy( 10, 'complex128', rand );
var zyc = zcopy( zy.length, zy, 1, zeros( zy.length, 'complex128' ), 1 );

var s = new Complex128( 0.0, 0.75 );

// Apply a plane rotation:
zrot( zx.length, zx, 1, zy, 1, 1.25, s );

// Print the results:
logEach( '(%s,%s) => (%s,%s)', zxc, zyc, zx, zy );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[lapack]: http://www.netlib.org/lapack

[zrot]: https://netlib.org/lapack/explore-html/d1/d45/group__rot_gaac9d54e7408105ad6f4c810902e75b7a.html#gaac9d54e7408105ad6f4c810902e75b7a

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

</section>

<!-- /.links -->
