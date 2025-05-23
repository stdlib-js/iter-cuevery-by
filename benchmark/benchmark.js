/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var iterConstant = require( '@stdlib/iter-constant' );
var isIteratorLike = require( '@stdlib/assert-is-iterator-like' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var iterCuEveryBy = require( './../lib' );


// FUNCTIONS //

/**
* Predicate function.
*
* @private
* @param {*} value - value
* @returns {boolean} result
*/
function predicate( value ) {
	return ( value > 0 );
}


// MAIN //

bench( pkg, function benchmark( b ) {
	var iter;
	var it;
	var i;

	it = iterConstant( 3.14 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		iter = iterCuEveryBy( it, predicate );
		if ( typeof iter !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isIteratorLike( iter ) ) {
		b.fail( 'should return an iterator protocol-compliant object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iteration', function benchmark( b ) {
	var iter;
	var v;
	var i;

	iter = iterCuEveryBy( iterConstant( 3.14 ), predicate );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = iter.next().value;
		if ( !isBoolean( v ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( v ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
