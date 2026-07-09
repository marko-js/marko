// tags/theme-display.marko
const $template = "<!><span class=display> </span>";
const $walks = "bD l";
const $context_theme = _context_closure("c", ($scope2, $provider) => $theme$1($scope2, $provider["I"]), "b0");
const $theme$1 = /*@__PURE__*/ _const(1, ($scope) => _text($scope.a, $scope.b));
const $setup = $context_theme;

// tags/theme-provider.marko
const $theme = /*@__PURE__*/ _let(5, ($scope) => _context_value($scope, $scope.f, "c"));
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$theme($scope, "dark");
}));

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $themeprovider_content__if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks), $if_content__setup);
const $themeprovider_content__show = /*@__PURE__*/ _let(2, ($scope) => $themeprovider_content__if($scope, $scope.c ? 0 : 1));
const $themeprovider_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$themeprovider_content__show($scope, true);
}));
