module.exports = {
    onCreate() {
        this.state = {
            comp: "a"
        };
    },
    onMount() {
        this.inner = this.getEl("item");
    },
    changeComp(comp) {
        this.state.comp = comp;
    }
};
