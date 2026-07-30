// tags/child/index.marko
const $template$1 = "<!>";
const $walks$1 = "%b";
const $setup$1 = () => {};
const $for_content__s_a = ($scope, s_a) => _text($scope["#text/0"], s_a);
const $for_content__$params = ($scope, $params2) => $for_content__s_a($scope, $params2[0]?.a);
const $for = /*@__PURE__*/ _for_of("#text/0", " ", " ", 0, $for_content__$params);
const $input_scope = ($scope, input_scope) => $for($scope, [input_scope]);
const $input = ($scope, input) => $input_scope($scope, input.scope);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", "<!>", "%b", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}`)("<!>");
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("%b");
const $cond = /*@__PURE__*/ _let("cond/2", ($scope) => {
	let $scope2;
	if ($scope.cond) {
		$scope2 = attrTag({ a: 1 });
	} else {
		$scope2 = attrTag({ a: 2 });
	}
	$input_scope($scope["#childScope/1"], $scope2);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$cond($scope, !$scope.cond);
}));
function $setup($scope) {
	$cond($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
