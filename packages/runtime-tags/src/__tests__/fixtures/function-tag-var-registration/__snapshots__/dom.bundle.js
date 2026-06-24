// template.marko
const $onClick = /*@__PURE__*/ _const(3, _script("a1", ($scope) => _on($scope.b, "click", $scope.d)));
function $updateText(ev) {
	ev.target.textContent = "after";
}
_resume("a0", $updateText);
