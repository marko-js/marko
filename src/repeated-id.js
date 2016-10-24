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

function RepeatedId() {
    this.nextIdLookup = {};
}

RepeatedId.prototype = {
    nextId: function(parentId, id) {
        var indexLookupKey = parentId + '-' + id;
        var currentIndex = this.nextIdLookup[indexLookupKey];
        if (currentIndex == null) {
            currentIndex = this.nextIdLookup[indexLookupKey] = 0;
        } else {
            currentIndex = ++this.nextIdLookup[indexLookupKey];
        }

        return indexLookupKey.slice(0, -2) + '[' + currentIndex + ']';
    }
};

exports.nextId = function(out, parentId, id) {
    var repeatedId = out.global.__repeatedId;
    if (repeatedId == null) {
        repeatedId = out.global.__repeatedId = new RepeatedId();
    }

    return repeatedId.nextId(parentId, id);
};
