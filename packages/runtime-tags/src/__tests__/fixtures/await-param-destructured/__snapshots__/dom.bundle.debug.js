// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $await_content__count = /*@__PURE__*/ _closure_get("count/7", ($scope) => _text($scope["#text/2"], $scope._.count), 0, "__tests__/template.marko_1_count#0:6/subscribe");
const $await_content__setup = $await_content__count;
const $await_content__$pattern = ($scope, $pattern) => {
	_text($scope["#text/0"], $pattern.name);
	_text($scope["#text/1"], $pattern.tags[0]);
};
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$count($scope, 0);
	$setup__script($scope);
}
const $await_content = /*@__PURE__*/ _await_content("#text/2", "<span><!>:<!>:<!></span>", "D%c%c%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$pattern);
const $input_user = ($scope, input_user) => $await_promise($scope, resolveAfter(input_user));
const $input = ($scope, input) => $input_user($scope, input.user);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
