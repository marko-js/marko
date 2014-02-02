/*
 * Probably one of the more amazing regular expressions you will ever see...
 * 
 * Valid imports:
 * x, y, z from http://raptorjs.org/templates/core
 * x, y, z from core
 * x, y, z from core as my-core
 * * from core as c 
 * core
 * core as my-core
 */

var importRegExp = /^(?:(\*|(?:(?:@?[A-Za-z0-9_\-]+\s*,\s*)*@?[A-Za-z0-9_\-]+))\s+from\s+)?([^ ]*)(?:\s+as\s+([A-Za-z0-9_\-]+))?$/;
function getImported(lookup, localName, imports) {
    if (lookup[localName] != null) {
        return lookup[localName];
    }
    var prefixEnd = localName.indexOf('-');
    var prefix;
    var namespace;
    var name;

    if (prefixEnd != -1) {
        prefix = localName.substring(0, prefixEnd);
        name = localName.substring(prefixEnd + 1);
        namespace = imports._prefixes[prefix];
        if (namespace) {
            return {
                namespace: namespace,
                name: name,
                prefix: prefix
            };
        }
    }
    return null;
}

function Imports(taglibs, importsStr) {
    this._tagImports = {};
    this._attrImports = {};
    this._prefixes = {};
    var parts = importsStr.trim().split(/\s*;\s*/);
    parts.forEach(function (part) {
        if (!part) {
            //Skip empty strings
            return;
        }
        var match = part.match(importRegExp), imports, importsLookup = {}, from, as;

        if (!match) {
            throw new Error('Invalid import: "' + part + '"');
        } else {
            imports = match[1];
            from = match[2];
            as = match[3];
            if (!as) {
                as = from;
            }
        }

        this._prefixes[as] = from;
        if (imports) {
            imports.split(/\s*,\s*/).forEach(function (importedTagName) {
                importsLookup[importedTagName] = true;
            });
        }
        taglibs.forEachTag(from, function (tag, taglib) {
            if (tag.namespace === from && (importsLookup['*'] || importsLookup[tag.name])) {
                /*
                 * Import tags with a URI that matches the taglib URI
                 */
                this._tagImports[tag.name] = {
                    namespace: from,
                    name: tag.name,
                    prefix: as
                };
            }
            /*
             * Allow imports for attributes that can be assigned to tags with a different URI
             * e.g. <div c-if="someCondition"></div> --> <div c:if="someCondition"></div>
             */
            tag.forEachAttribute(function (attr) {
                if (tag.namespace !== from && (importsLookup['*'] || importsLookup['@' + attr.name])) {
                    this._attrImports[attr.name] = {
                        namespace: from,
                        name: attr.name,
                        prefix: as
                    };
                }
            }, this);
        }, this);
    }, this);
}

Imports.prototype = {
    getImportedTag: function (localName) {
        return getImported(this._tagImports, localName, this);
    },
    getImportedAttribute: function (localName) {
        return getImported(this._attrImports, localName, this);
    }
};

module.exports = Imports;