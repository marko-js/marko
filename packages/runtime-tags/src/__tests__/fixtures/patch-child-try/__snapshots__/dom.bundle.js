// tags/widget/index.marko
const $template = "<!><!><!>";
const $catch_content = _content_resume("b0", "<em>bad</em>");
const $try = /*@__PURE__*/ _try(0, "<em>ok</em>");
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
