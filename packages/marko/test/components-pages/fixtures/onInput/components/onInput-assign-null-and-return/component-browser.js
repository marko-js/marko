module.exports = {
  onMount() {
    var componentsLookup = window.components || (window.components = {});
    componentsLookup["onInput-assign-null-and-return"] = this;
  }
};
