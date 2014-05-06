/*
 * Copyright 2011 eBay Software Foundation
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
var createError = require('raptor-util').createError;
var operatorsRegExp = /"(?:[^"]|\\")*"|'(?:[^']|\\')*'|\s+(?:and|or|lt|gt|eq|ne|lt|gt|ge|le)\s+/g;
var replacements = {
        'and': ' && ',
        'or': ' || ',
        'eq': ' === ',
        'ne': ' !== ',
        'lt': ' < ',
        'gt': ' > ',
        'ge': ' >= ',
        'le': ' <= '
    };
function handleBinaryOperators(str) {
    return str.replace(operatorsRegExp, function (match) {
        return replacements[match.trim()] || match;
    });
}
function Expression(expression, replaceSpecialOperators) {
    if (expression == null) {
        throw createError(new Error('expression argument is required'));
    }
    if (replaceSpecialOperators !== false && typeof expression === 'string') {
        expression = handleBinaryOperators(expression);
    }
    this.expression = expression;
}
Expression.prototype = {
    getExpression: function () {
        return this.expression;
    },
    toString: function () {
        return this.expression.toString();
    }
};
module.exports = Expression;