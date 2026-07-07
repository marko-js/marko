// tags/thing.marko
const $input_value__script = _script("c0", ($scope) => $scope.c);

// tags/child.marko
function $_return($scope) {
	return () => (html) => $scope.a.innerHTML = html;
}
_resume("b0", $_return);

// template.marko
const $setHtml_getter = _hoist_resume("a0", 3);
const $setHtml = _var_resume("a1", /*@__PURE__*/ _const(3));
