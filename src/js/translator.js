'use strict';
var zip = require('annozip');


function translate(i18n, schema) {
    // inject title properties to a new schema based on i18n
    console.log('schema', schema, 'i18n', i18n);
}
exports.translate = translate;

function parse(i18n) {
    var names = Object.keys(i18n);
    var languages = names.map(function(name) {
        return i18n[name]._language;
    });

    return zip.toObject(zip(names, languages));
}
exports.parse = parse;
