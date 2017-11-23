'use strict';

const myMap = new Map();

myMap.set('foo', 'low');
myMap.set('bar', 'high');

exports.templateData = {
    myMap: myMap
};