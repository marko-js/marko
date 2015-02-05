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
var forEachRegEx = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s+in\s+(.+)$/;
var forEachPropRegEx = /^\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*,\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)\s+in\s+(.+)$/;
var forRangeRegEx = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s+from\s+(.+)$/; // i from 0 to 10  or  i from 0 to 10 step 5
var forRangeKeywordsRegExp = /"(?:[^"]|\\")*"|'(?:[^']|\\')*'|\s+(to|step)\s+/g;
var integerRegExp = /^-?\d+$/;
var numberRegExp = /^-?(?:\d+|\d+\.\d*|\d*\.\d+|\d+\.\d+)$/;

function convertNumber(str) {
    if (!str) {
        return str;
    }

    if (integerRegExp.test(str)) {
        return parseInt(str, 10);
    } else if (numberRegExp.test(str)) {
        return parseFloat(str);
    } else {
        return str;
    }
}

var stringify = require('raptor-json/stringify').stringify;
function parseForEach(value) {
    var match = value.match(forEachRegEx);
    if (match) {
        return {
            'var': match[1],
            'in': match[2]
        };
    } else if ((match = value.match(forEachPropRegEx))) {


        return {
            'nameVar': match[1],
            'valueVar': match[2],
            'in': match[3]
        };
    } else if ((match = value.match(forRangeRegEx))) {
        var nameVar = match[1];


        var remainder = match[2];
        var rangeMatches;

        var fromStart = 0;
        var fromEnd = -1;

        var toStart = -1;
        var toEnd = remainder.length;

        var stepStart = -1;
        var stepEnd = -1;

        while ((rangeMatches = forRangeKeywordsRegExp.exec(remainder))) {
            if (rangeMatches[1] === 'to') {
                fromEnd = rangeMatches.index;
                toStart = forRangeKeywordsRegExp.lastIndex;
            } else if (rangeMatches[1] === 'step') {
                if (toStart === -1) {
                    continue;
                }
                toEnd = rangeMatches.index;
                stepStart = forRangeKeywordsRegExp.lastIndex;
                stepEnd = remainder.length;
            }
        }

        if (toStart === -1 || fromEnd === -1) {
            throw new Error('Invalid each attribute of "' + value + '"');
        }

        var from = remainder.substring(fromStart, fromEnd).trim();
        var to = remainder.substring(toStart, toEnd).trim();
        var step;

        from = convertNumber(from);
        to = convertNumber(to);

        if (stepStart !== -1) {
            step = remainder.substring(stepStart, stepEnd).trim();
            step = convertNumber(step);
        } else {
            if (typeof from === 'number' && typeof to === 'number') {
                if (from < to) {
                    step = 1;
                } else {
                    step = -1;
                }
            } else {
                step = 1;
            }

        }

        return {
            'nameVar': nameVar,
            'from': from,
            'to': to,
            'step': step
        };
    } else {
        throw new Error('Invalid each attribute of "' + value + '"');
    }
}
function ForNode(props) {
    ForNode.$super.call(this);
    if (props) {
        this.setProperties(props);
    }
}
ForNode.prototype = {
    doGenerateCode: function (template) {
        var each = this.getProperty('each');
        var separator = this.getProperty('separator');
        var statusVar = this.getProperty('statusVar') || this.getProperty('varStatus');
        var customIterator = this.getProperty('iterator');
        if (!each) {
            this.addError('"each" attribute is required');
            this.generateCodeForChildren(template);
            return;
        }
        var parts;
        try {
            parts = parseForEach(each);
        } catch (e) {
            this.addError(e.message);
            this.generateCodeForChildren(template);
            return;
        }

        if (parts.hasOwnProperty('from')) {
            // This is a range loop


            var nameVar = parts.nameVar;
            var from = parts.from;
            var to = parts.to;
            var step = parts.step;
            var comparison = '<=';

            if (typeof step === 'number') {
                if (step < 0) {
                    comparison = '>=';
                }

                if (step === 1) {
                    step = nameVar + '++';
                } else if (step  === -1) {
                    step = nameVar + '--';
                } else if (step > 0) {
                    step = nameVar + '+=' + step;
                } else if (step === 0) {
                    throw new Error('Invalid step of 0');
                } else if (step < 0) {
                    step = 0-step; // Make the step positive and switch to -=
                    step = nameVar + '-=' + step;
                }
            } else {
                step = nameVar + '+=' + step;
            }

            template.statement('(function() {').indent(function () {
                template.statement('for (var ' + nameVar + '=' + from + '; ' + nameVar + comparison + to + '; ' + step + ') {').indent(function () {
                    this.generateCodeForChildren(template);
                }, this).line('}');
            }, this).line('}());');
            return;
        }

        var items = template.makeExpression(parts['in']);
        var varName = parts['var'];
        var nameVarName = parts.nameVar;
        var valueVarName = parts.valueVar;
        if (nameVarName) {
            if (separator) {
                this.addError('Separator is not supported when looping over properties');
                this.generateCodeForChildren(template);
                return;
            }
            if (statusVar) {
                this.addError('Loop status variable not supported when looping over properties');
                this.generateCodeForChildren(template);
                return;
            }
        }
        if (separator && !statusVar) {
            statusVar = '__loop';
        }
        var funcName;
        var forEachParams;

        if (customIterator) {
            var statusVarFlag = '';
            if (statusVar) {
                statusVarFlag = ', true';
                forEachParams = [
                    varName,
                    statusVar
                ];
            } else {
                forEachParams = [varName];
            }
            template.statement(customIterator + '(' + items + ', function(' + forEachParams.join(',') + ') {').indent(function () {
                this.generateCodeForChildren(template);
            }, this).line('}' + statusVarFlag + ');');
        } else if (statusVar) {
            forEachParams = [
                varName,
                statusVar
            ];
            funcName = template.getStaticHelperFunction('forEachWithStatusVar', 'fv');
            template.statement(funcName + '(' + items + ', function(' + forEachParams.join(',') + ') {').indent(function () {
                this.generateCodeForChildren(template);
                if (separator) {
                    template.statement('if (!' + statusVar + '.isLast()) {').indent(function () {
                        template.write(template.isExpression(separator) ? separator.getExpression() : stringify(separator));
                    }, this).line('}');
                }
            }, this).line('});');
        } else {
            var forLoopProp = this.getProperty('forLoop');

            if (forLoopProp && forLoopProp.toString() === 'true') {
                forEachParams = [
                    '__array',
                    '__index',
                    '__length',
                    varName
                ];
                template.statement(template.getStaticHelperFunction('forLoop', 'fl') + '(' + items + ', function(' + forEachParams.join(',') + ') {').indent(function () {
                    template.statement('for (;__index<__length;__index++) {').indent(function () {
                        template.statement(varName + '=__array[__index];');
                        this.generateCodeForChildren(template);
                    }, this).line('}');
                }, this).line('});');
            } else {
                forEachParams = nameVarName ? [
                    nameVarName,
                    valueVarName
                ] : [varName];
                funcName = nameVarName ? template.getStaticHelperFunction('forEachProp', 'fp') : template.getStaticHelperFunction('forEach', 'f');
                template.statement(funcName + '(' + items + ', function(' + forEachParams.join(',') + ') {').indent(function () {
                    this.generateCodeForChildren(template);
                }, this).line('});');
            }
        }
    }
};

module.exports = ForNode;