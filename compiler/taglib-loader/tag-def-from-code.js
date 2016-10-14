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

// Rather than using a full-blown JavaScript parser, we are going to use a few regular expressions
// to tokenize the code and find what we are interested in
var tagStartRegExp = /(^\s*(?:(?:exports.(?:tag|TAG))|(?:TAG))\s*=\s*)\{/m;

// Tokens: "<string>", '<string>', /*<some comment*/, //<single line comment>, {, }, ;
var tokensRegExp = /"(?:[^"]|\\")*"|'(?:[^'])|(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)|[\{\};]/g;

function extractTagDef(code) {

    var startMatches = tagStartRegExp.exec(code);

    var tagDefStart;
    var tagDefEnd;

    if (startMatches) {
        tagDefStart = startMatches.index + startMatches[1].length;
        var nextTokenMatches;
        tokensRegExp.lastIndex = tagDefStart;
        var depth = 0;

        while ((nextTokenMatches = tokensRegExp.exec(code))) {
            if (nextTokenMatches[0] === '{') {
                depth++;
                continue;
            } else if (nextTokenMatches[0] === '}') {
                if (--depth === 0) {
                    tagDefEnd = tokensRegExp.lastIndex;
                    break;
                }
            }
            else if (nextTokenMatches[0] === ';') {
                tagDefEnd = nextTokenMatches.index;
                break;
            }
        }

        if (tagDefStart != null && tagDefEnd != null) {
            var jsTagDef = code.substring(tagDefStart, tagDefEnd);
            var tagDefObject;

            try {
                // Try parsing it as JSON
                tagDefObject = JSON.parse(jsTagDef);
            } catch(e) {
                // Try parsing it as JavaScript
                try {
                    tagDefObject = eval('(' + jsTagDef + ')');
                } catch(e) {
                    tagDefObject = {};
                }
            }
            return tagDefObject;
        }
    } else {
        return null;
    }
}

exports.extractTagDef = extractTagDef;