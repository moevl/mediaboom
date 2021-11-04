const pug = require('pug');
const compiledFunction = pug.compileFile('./pug/template.pug');

// Render a set of data
console.log(compiledFunction({
    name: 'Timothy'
}));