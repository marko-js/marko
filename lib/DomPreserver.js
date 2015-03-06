function DomPreserver() {
    this.saved = [];
}

DomPreserver.prototype = {
    save: function(widget, ids) {
        var saved = this.saved;

        for (var i=0, len=ids.length; i<len; i++) {
            var id = ids[i].toString();
            var parent;

            if (id.charAt(0) === '#') {
                parent = document.getElementById(id.substring(1));
            } else {
                parent = widget.getEl(id.length === 0 ? null : id);
            }

            var fragmentNodes = [];

            var curChild = parent.firstChild;
            while(curChild) {
                fragmentNodes.push(curChild);
                curChild = curChild.nextSibling;
            }

            saved.push(id);
            saved.push(fragmentNodes);
        }
    },

    restore: function(widget) {
        var saved = this.saved;
        for (var i=0, len=saved.length; i<len; i+=2) {
            var id = saved[i];
            var fragmentNodes = saved[i+1];

            var targetParent = widget.getEl(id);
            if (targetParent && !targetParent.firstChild) {
                var fragment = document.createDocumentFragment();
                for (var j=0, len2=fragmentNodes.length; j<len2; j++) {
                    fragment.appendChild(fragmentNodes[j]);
                }

                targetParent.appendChild(fragment);
            }
        }
    }
};

module.exports = DomPreserver;