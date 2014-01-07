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

define.Class(
    'raptor/templating/compiler/TypeConverter',
    ['raptor'],
    function(raptor, require) {
        "use strict";
        
        var ExpressionParser = require('raptor/templating/compiler/ExpressionParser'),
            stringify = require('raptor/json/stringify'),
            Expression = require('raptor/templating/compiler/Expression');
        
        var TypeConverter = function() {
            
        };
        
        TypeConverter.convert = function(value, targetType, allowExpressions) {
            
            
            var hasExpression = false,
                expressionParts = [];
            
            if (value == null) {
                return value;
            }
            
            if (targetType === 'custom' || targetType === 'identifier') {
                return value;
            }
            
            if (targetType === 'expression') {
                if (value === '') {
                    value = 'null';
                }
                
                return new Expression(value);
            }
            
            var processedText = '';
            
            if (allowExpressions) {
                ExpressionParser.parse(value, {
                    text: function(text) {
                        processedText += text;
                        expressionParts.push(stringify(text));
                    },
                    
                    expression: function(expression) {
                        expressionParts.push(expression);
                        hasExpression = true;
                    }
                });
                
                if (hasExpression) {
                    return new Expression(expressionParts.join("+"));
                }
                value = processedText;
            }
            
            if (targetType === 'string') {
                return allowExpressions ? new Expression(value ? stringify(value) : "null") : value;
            }
            else if (targetType === 'boolean') {
                if (allowExpressions) {
                    return new Expression(value);
                }
                else {
                    value = value.toLowerCase();
                    value = value === 'true' || value === 'yes'; //convert it to a boolean
                    return value;
                }
            }
            else if (targetType === 'float' || targetType === 'double' || targetType === 'number' || targetType === 'integer' || targetType === 'int') {
                if (allowExpressions) {
                    return new Expression(value);
                }
                else {
                    if (targetType === 'integer') {
                        value = parseInt(value, 10);
                    }
                    else {
                        value = parseFloat(value);
                    }
                    return value;
                }
            }
            else {
                throw raptor.createError(new Error("Unsupported attribute type: " + targetType));
            }
        };
        
        return TypeConverter;
    });