module.exports = {
    onMount() {
        const root = this.getEl("root");
        this.before = document.createElement("span");
        this.before.id = "before";
        root.parentNode.insertBefore(this.before, root);
    },
    onDestroy() {
        this.before.remove();
    }
};
