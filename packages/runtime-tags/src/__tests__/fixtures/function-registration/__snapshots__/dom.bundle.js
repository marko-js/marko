// total: 1764 (min) 940 (brotli)
// template.marko: 79 (min) 83 (brotli)
function updateText(ev) {
	ev.target.textContent = "after";
}
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", updateText));
