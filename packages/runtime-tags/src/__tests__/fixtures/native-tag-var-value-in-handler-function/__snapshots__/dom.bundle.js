// template.marko
const $el_getter = /*@__PURE__*/ _el(0);
const $mark2__script = _script("a1", ($scope) => _on($scope.b, "click", $scope.c));
const $mark = ($scope) => () => {
	const get = $el_getter($scope);
	get().textContent = "clicked";
};
_resumed.a0 = $mark;
