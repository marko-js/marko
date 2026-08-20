// template.marko
const $template = "<main><h1> </h1><!><button>Count <!></button></main>";
const $walks = "E l%b Db%m";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/3"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $await_content = _resume("__tests__/template.marko_0_#text#1/await", /*@__PURE__*/ _await_content("#text/1", "<em> </em>", "D "));
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $input_promise = $await_promise;
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_promise($scope, input.promise);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
