// template.marko
const $template = "<div><!><button>Change</button></div>";
const $walks = "D%b l";
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content__value = ($scope, value) => _text($scope["#text/1"], value);
const $for_content__$params = ($scope, $params2) => $for_content__value($scope, $params2[1]);
const $for = /*@__PURE__*/ _for_in("#text/0", "<p><!>:<!></p>", "D%c%", $for_content__setup, $for_content__$params);
const $entries = /*@__PURE__*/ _let("entries/2", ($scope) => $for($scope, [$scope.entries, (key) => key]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$entries($scope, {
		b: 2,
		c: 3
	});
}));
function $setup($scope) {
	$entries($scope, {
		a: 1,
		b: 2
	});
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
