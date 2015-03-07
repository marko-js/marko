function DomPreserver() {
    this.saved = [];
}

DomPreserver.prototype = {
    save: function(widget, ids) {
        var saved = this.saved;

        for (var i=0, len=ids.length; i<len; i++) {
            var id = ids[i].toString();
            var sourceEl;
            var bodyOnly = true;

            if (id.charAt(0) === '@') {
                bodyOnly = false;
                id = id.substring(1);
            }

            if (id.charAt(0) === '#') {
                sourceEl = document.getElementById(id.substring(1));
            } else {
                sourceEl = widget.getEl(id.length === 0 ? null : id);
            }

            if (!sourceEl) {
                continue;
            }

            saved.push(id);
            saved.push(bodyOnly);

            if (bodyOnly) {
                var fragmentNodes = [];
                var curChild = sourceEl.firstChild;
                while(curChild) {
                    fragmentNodes.push(curChild);
                    curChild = curChild.nextSibling;
                }
                saved.push(fragmentNodes);
            } else {
                saved.push(sourceEl);
            }

        }
    },

    restore: function(widget) {
        var saved = this.saved;
        for (var i=0, len=saved.length; i<len; i+=3) {
            var id = saved[i];
            var bodyOnly = saved[i+1];
            var fragmentNodes = saved[i+2];

            var targetEl = widget.getEl(id);
            if (targetEl) {
                if (bodyOnly) {
                    if (!targetEl.firstChild) {
                        var fragment = document.createDocumentFragment();
                        for (var j=0, len2=fragmentNodes.length; j<len2; j++) {
                            fragment.appendChild(fragmentNodes[j]);
                        }

                        targetEl.appendChild(fragment);
                    }
                } else {
                    targetEl.parentNode.replaceChild(fragmentNodes, targetEl);
                }
            }
        }
    }
};

module.exports = DomPreserver;