module.exports = {
    onCreate() {
        this.state = { mounted: false };
    },
    onMount() {
        this.state.mounted = true;
    }
};
