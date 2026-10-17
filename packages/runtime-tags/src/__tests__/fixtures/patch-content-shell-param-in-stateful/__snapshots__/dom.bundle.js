// tags/note.marko
const $template = "<i>note</i>";

// template.marko
const $if_content2__label = /*@__PURE__*/ _fill_join("a3", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f)));
const $content_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content2__label);
const $content_content__open = /*@__PURE__*/ _fill_let("a4", 6, ($scope) => $content_content__if($scope, $scope.g ? 0 : 1));
const $content_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$content_content__open($scope, !$scope.g);
}));
const $content_content__setup = ($scope) => {
	$content_content__setup__script($scope);
	$content_content__open($scope, true);
};
const $content_content__$params = ($scope, $params2) => $content_content__label($scope, $params2[0].label);
const $content_content__label = /*@__PURE__*/ _fill_const("a3", 5, $if_content2__label);
const $content_content = _content$1("a0", /*@__PURE__*/ ((_w0) => `<!><!><button>toggle</button>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b%b b/${_w0}&`)("b"), $content_content__setup, $content_content__$params);
