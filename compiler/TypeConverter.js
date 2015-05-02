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
var expressionParser = require('./expression-parser');
var stringify = require('raptor-json/stringify');
var Expression = require('./Expression');
function TypeConverter() {
}
TypeConverter.convert = function (value, targetType, allowExpressions) {
    var hasExpression = false;
    var expressionParts = [];
    if (value == null) {
        return value;
    }
    if (targetType === 'custom' || targetType === 'identifier') {
        return value;
    }

    if (targetType === 'expression' || targetType === 'object' || targetType === 'array') {
        if (value === '') {
            value = 'null';
        }
        return new Expression(value);
    }
    var processedText = '';
    if (allowExpressions) {
        expressionParser.parse(value, {
            text: function (text) {
                processedText += text;
                expressionParts.push(stringify(text));
            },
            expression: function (expression) {
                expressionParts.push(expression);
                hasExpression = true;
            }
        });

        if (hasExpression) {
            value = new Expression(expressionParts.join('+'));

            if (targetType === 'template') {
                return new Expression('__helpers.l(' + value + ')');
            } else {
                return value;
            }
        }

        value = processedText;
    }
    if (targetType === 'string') {
        return allowExpressions ? new Expression(value != null ? stringify(value) : 'null') : value;
    } else if (targetType === 'boolean') {
        if (!allowExpressions) {
            value = value.toLowerCase();
        }

        if (!allowExpressions || value === 'true' || value === 'yes' || value === '') {
            //convert it to a boolean
            return new Expression(true);
        }

        return new Expression(value);
    } else if (targetType === 'float' || targetType === 'double' || targetType === 'number' || targetType === 'integer' || targetType === 'int') {
        if (allowExpressions) {
            return new Expression(value);
        } else {
            if (targetType === 'integer') {
                value = parseInt(value, 10);
            } else {
                value = parseFloat(value);
            }
            return value;
        }
    } else if (targetType === 'path') {
        return new Expression('require.resolve(' + JSON.stringify(value) + ')');
    } else if (targetType === 'template') {
        return new Expression('__helpers.l(require.resolve(' + JSON.stringify(value) + '))');
    } else {
        throw createError(new Error('Unsupported attribute type: ' + targetType));
    }
};
module.exports = TypeConverter;