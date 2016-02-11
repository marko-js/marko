function $af(id, after, doc, sourceEl, targetEl, docFragment, childNodes, i, len, af) {
    af = $af;

    if (after && !af[after]) {
        (af[(after = after + '$')] || (af[after] = [])).push(id);
    } else {
        doc = document;
        sourceEl = doc.getElementById('af' + id);
        targetEl = doc.getElementById('afph' + id);
        docFragment = doc.createDocumentFragment();
        childNodes = sourceEl.childNodes;
        i = 0;
        len=childNodes.length;

        for (; i<len; i++) {
            docFragment.appendChild(childNodes.item(0));
        }

        targetEl.parentNode.replaceChild(docFragment, targetEl);
        af[id] = 1;

        after = af[id + '$'];

        if (after) {
            i = 0;
            len = after.length;

            for (; i<len; i++) {
                af(after[i]);
            }
        }
    }

    // sourceEl.parentNode.removeChild(sourceEl);
}