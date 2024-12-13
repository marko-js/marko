window.mountCount = 0;

module.exports = {
  onMount: function () {
    window.mountCount++;
  },
};
