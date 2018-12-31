:microscope: Nano CSV parser for javascript using [Markty.js](https://github.com/Jonarod/markty).

# Demo

:eyes: **[Try the live converter here](https://jsfiddle.net/48d0mq2k/1/)** :eyes:


# Quick start

#### For Node.js

`npm install markty-csv`

```js
var csv = require('markty-csv')
// or using ES6:
import csv from 'markty-csv'

const someCSV = `
a,b,c
1,2,3
4,5,6
`

console.log( CSV(someCSV) )

// > prints:
// [
//   [a,b,c],
//   [1,2,3],
//   [4,5,6]
// ]
```

#### In-Browser

Find latest version [here](https://unpkg.com/markty-csv).

To get the `umd` version:
1. Observe the URL [here](https://unpkg.com/markty-csv) and see the latest version used after `@` like `@0.0.1`.
2. Just modify the URL to get something like this: `https://unpkg.com/markty-csv@0.0.1/dist/martycsv.umd.js`

Then just import it normally :

```html
<script type="text/javascript" src="https://unpkg.com/markty-csv@0.0.1/dist/martycsv.umd.js"></script>
```
Then the exported name is `marktycsv()`, so you can just:

```js
<script>
var someCSV = 'a,b,c\n1,2,3\n4,5,6';
console.log( marktycsv(someCSV) )
</script>

// > prints:
// [
//   [a,b,c],
//   [1,2,3],
//   [4,5,6]
// ]
```

## FEATURES
- :microscope: **Ridiculously SMALL:**: 15 LOC, 300 bytes gzipped
- :zap: Blazing fast  :zap: see **benchmarks**
- **@TODO**:
    - [ ] parse integers like `1`, `2`, `3` as javascript `int`...
    - [ ] parse float like `3.14` as javascript `float`
    - [ ] parse boolean like `true`, `false` as javascript `boolean`
    - [ ] parse signed numbers like `+27`, `-23` as javascript's signed mumber
    - [ ] parse infinity like `+inf`, `inf`, `-inf` as javascript's `Inf`, `-Inf`
    - [ ] parse hexadecimals like `0xDEADBEEF`
    - [ ] parse octals like `0o01234567`, `0o755`
    - [ ] parse binaries like `0b11010110`
    - [ ] parse dates like `1979-05-27T00:32:00-07:00`, `1979-05-27` as javascript's `date` object
    - [ ] allow for various delimiters like `;`, `|`, `\t`...
    - [ ] allow escape character like `"`
    - [ ] allow multidimensional values like : `deeply.nested.header`


## Should you use it ?
- :baby: Not fully unit-tested **YET**...
- Not benchmarked **YET**, especially against HUGE csv files, so just make your tests before using it :)
- Not meant to replace fully-fledged CSV parsers like [https://github.com/Keyang/node-csvtojson](node-csvtojson).
- `markty-CSV` just gives you an array of csv values line by line: the rest is up to you !!
- At this stage, you should just go for the simper simple [gist here](https://gist.github.com/Jonarod/b971b2df24ba46c33c37afb2a1dcb974), it should cover 80% of all needs. `markty-CSV` will provide more value when the todo list will be completed: nested keys, automatic serialization, character escaping...

## Hey !! But I need to convert my CSV to JSON ! 

Well, `markty-CSV` will just parse CSV for you and push every values into an array. Now, if you want to convert it to JSON, we got you covered with this nice short snippet:

```js
function MatrixToJSON(matrix,from,to){
  let jsonResult = []; from = from||0;  
  matrix.map((a,i) => {
    let obj = Object.assign({}, ...matrix[0].map((h, index) => ({[h]: matrix[i][index]})))
    jsonResult.push(obj)
  })
  return to ? jsonResult.splice(from,to) : jsonResult.splice(from)
}


// then later in your code:
var someCSV = 'a,b,c\n1,2,3\n4,5,6';
var parsedToArray = marktycsv(someCSV)
var convertToJson = MatrixToJSON(parsedToArray, 1)

// > convertToJson should look like:
// [
//   { "a":"1", "b":"2", "c":"3" },
//   { "a":"4", "b":"5", "c":"6" }
// ]

```



# Benchmarks


| Test         | Observations | markty-CSV | [node-csvtojson][1] | [5 liner gist][2] |
|:-------------|:-------------|-----------:|--------------------:|------------------:|
| gzipped size |              |      307 b |            46.899 b |         **147 b** |
| **Parsing tests:**                                                                 |
| [simple][3] | [link to bench][4] | 415.708 ops/s | 41.248 ops/s | **2.535.754 ops/s** |

[1]: https://github.com/Keyang/node-csvtojson
[2]: https://gist.github.com/Jonarod/b971b2df24ba46c33c37afb2a1dcb974
[3]: https://github.com/Jonarod/markty-CSV/tree/master/benchmarks/simple.json
[4]: https://jsbench.me/ujjqboth8e/1
