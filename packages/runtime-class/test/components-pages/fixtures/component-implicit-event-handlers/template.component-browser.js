module.exports = {
  onMount() {
    window.testComponent = this;
    this.clicks = 0;
  },
  trackClick() {
    this.clicks++;
  }
}
