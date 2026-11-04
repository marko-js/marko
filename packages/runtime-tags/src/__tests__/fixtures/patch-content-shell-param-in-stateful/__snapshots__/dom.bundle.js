// tags/note.marko
const $template = "<i>note</i>";

// template.marko
const $if_content2__label = /*@__PURE__*/ _if_closure_patch("a1", 0, 0, ($scope) => _text($scope.a, $scope._.f));
const $wrap_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content2__label);
const $wrap_content__open = /*@__PURE__*/ _fill_let("a2", 6, ($scope) => $wrap_content__if($scope, $scope.g ? 0 : 1));
const $wrap_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$wrap_content__open($scope, !$scope.g);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__setup__script($scope);
	$wrap_content__open($scope, true);
};
const $wrap_content__$params = ($scope, $params2) => $wrap_content__label($scope, $params2[0].label);
const $wrap_content__label = /*@__PURE__*/ _const(5, $if_content2__label);
const $wrap_content = _content$1("a3", /*@__PURE__*/ ((_w0) => `<!><!><button>toggle</button>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b%b b/${_w0}&`)("b"), $wrap_content__setup, $wrap_content__$params);
