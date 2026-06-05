// template.marko
function updateText(ev) {
	ev.target.textContent = "after";
}
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", updateText));
