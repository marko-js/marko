'use strict';

const escapeEndingScriptTagRegExp = /<\//g;
const warp10 = require('warp10');

function getSerializedGlobals(outGlobal) {
    let serializedGlobalsLookup = outGlobal.serializedGlobals;
    if (serializedGlobalsLookup) {
        let serializedGlobals;
        let keys = Object.keys(serializedGlobalsLookup);
        for (let i=0, len=keys.length; i<len; i++) {
            let key = keys[i];
            if (serializedGlobalsLookup[key] === true) {
                let value = outGlobal[key];
                if (value !== undefined) {
                    if (serializedGlobals === undefined) {
                        serializedGlobals = {};
                    }
                    serializedGlobals[key] = value;
                    serializedGlobalsLookup[key] = false;
                }
            }
        }

        return serializedGlobals;
    }
}

module.exports = function render(input, out) {
    var outGlobal = out.global;
    var serializedGlobals = getSerializedGlobals(outGlobal);
    if (serializedGlobals === undefined) {
        return;
    }
    var cspNonce = outGlobal.cspNonce;
    var nonceAttr = cspNonce ? ' nonce='+JSON.stringify(cspNonce) : '';

    out.write('<script' + nonceAttr + '>$MG=' +
        warp10.stringify(serializedGlobals).replace(escapeEndingScriptTagRegExp, '\\u003C/') +
        '</script>');
};
