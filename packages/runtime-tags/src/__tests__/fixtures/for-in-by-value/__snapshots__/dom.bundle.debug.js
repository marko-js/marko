// template.marko
const $template = "<button>change</button><ul></ul>";
const $walks = " b b";
const $for_content__$params = ($scope, key, value) => {
	_text($scope["#text/0"], key);
	_text($scope["#text/1"], value);
};
const $for = /*@__PURE__*/ _for_in("#ul/1", "<li><!>=<!></li>", "D%c%", 0, $for_content__$params);
const $entries = /*@__PURE__*/ _let("entries/2", ($scope) => $for($scope, [$scope.entries, (_key, value) => value]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$entries($scope, {
		b: 2,
		a: 3,
		c: 1
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
