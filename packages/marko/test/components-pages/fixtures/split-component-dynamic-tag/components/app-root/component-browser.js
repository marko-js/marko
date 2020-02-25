module.exports = {
  onMount() {
    window.component = this;
    this.rootButtonClicks = 0;
    this.appButtonClicks = 0;
  },

  handleElClick() {
    this.rootButtonClicks++;
  },

  handleComponentClick() {
    this.appButtonClicks++;
  }
};
