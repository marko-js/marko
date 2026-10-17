// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $count__$global_suffix = /*@__PURE__*/ _fill_global_join("suffix", "__tests__/template.marko_0_count#3_$global_suffix#7", ($scope) => $await_promise($scope, Promise.resolve($scope.count + _global_read($scope.$global, "suffix"))));
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/3", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$count__$global_suffix($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$setup__script($scope);
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
