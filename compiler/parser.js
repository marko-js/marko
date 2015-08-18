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

require('raptor-polyfill/string/endsWith');
var ParseTreeBuilderHtml = require('./ParseTreeBuilderHtml');
var ParseTreeBuilderXml = require('./ParseTreeBuilderXml');

function parse(src, filePath, taglibs) {
    var ParseTreeBuilder = filePath.endsWith('.marko.xml') ?
        ParseTreeBuilderXml :
        ParseTreeBuilderHtml;

    var parseTreeBuilder = new ParseTreeBuilder(taglibs);
    
    return parseTreeBuilder.parse(src, filePath);
}

exports.parse = parse;