module.exports = {
    onMount() {
        window.getComponent = index => this.getComponent(`component--${index}`);
    }
};
