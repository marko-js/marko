// template.marko
const $template = "<main><button>go</button><script><\/script><script><\/script></main>";
const $walks = "D b! b! l";
const $code = /*@__PURE__*/ _let("code/3", ($scope) => {
	_start_late($scope["#script/1"], $scope.code && `document.querySelector("main").dataset.a = "${$scope.code}"`);
	_start_late($scope["#script/2"], `document.querySelector("main").dataset.b = ${_to_text(JSON.stringify($scope.code))}`);
});
const $type = /*@__PURE__*/ _let("type/4", ($scope) => _attr($scope["#script/2"], "type", $scope.type));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$code($scope, "ran");
	$type($scope, undefined);
}));
function $setup($scope) {
	$code($scope, "");
	$type($scope, "text/plain");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
