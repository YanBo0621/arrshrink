# arrshrink

A gadget that reduces the depth of an array

## use:

> arrshrink(arr,depth)

        - arr - [Array] (must Number)
        - depth - The number of depths you want to remove

        Returns a parsed array

```js
> const arrshrink = require('arrshrink');

> console.log(arrshrink([[1, [2, [3, [4, 5]], 6]], 7], 1)); // deprh=1
  //[ 1, [ 2, [ 3, [4],5 ], 6 ], 7 ]

> console.log(arrshrink([[1, [2, [3, [4, 5]], 6]], 7], 2)); // deprh=2
 //[ 1, 2, [ 3, [ 4, 5 ] ], 6, 7 ]

> console.log(arrshrink([[1, [2, [3, [4, 5]], 6]], 7], 3)); // deprh=3
 //[ 1, 2, 3, [ 4, 5 ], 6, 7 ]

> console.log(arrshrink([[1, [2, [3, [4, 5]], 6]], 7], 4)); // deprh=4
 //[ 1, 2, 3, 4, 5, 6, 7 ]

> console.log(arrshrink([[1, [2, [3, [4, 5]], 6]], 7])); // Default deprh=Infinity
 //[ 1, 2, 3, 4, 5, 6, 7 ]
```

## install:

    npm install arrshrink
