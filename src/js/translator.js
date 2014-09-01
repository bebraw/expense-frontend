'use strict';
var deepcopy = require('deepcopy');
var zip = require('annozip');


function translate(i18n, schema) {
    var ret = deepcopy(schema);

    // XXX: assumes root is an object
    ret.properties = _translate(i18n, ret.properties);

    return ret;
}
exports.translate = translate;

function _translate(i18n, properties) {
    var ret = deepcopy(properties);

    Object.keys(ret).forEach(function(k) {
        var prop = ret[k];

        if(prop.type === 'number' || prop.type === 'string') {
            prop.title = i18n[k];
        }
        if(prop.type === 'array') {
            ret[k].items.properties = _translate(i18n[k].properties, prop.items.properties);
        }
        if(prop.type === 'object') {
            ret[k].properties = _translate(i18n[k].properties, prop.properties);
        }
    });

    return ret;
}

function parse(i18n) {
    var names = Object.keys(i18n);
    var languages = names.map(function(name) {
        return i18n[name]._language;
    });

    return zip.toObject(zip(names, languages));
}
exports.parse = parse;
