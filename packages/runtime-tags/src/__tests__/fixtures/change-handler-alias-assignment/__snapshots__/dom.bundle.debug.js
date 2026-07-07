// template.marko
const $template = "<button>Before</button>";
const $walks = " b";
const $pattern2 = ($scope, $pattern) => $fooChange2($scope, $pattern.fooChange);
const $fooChange2__script = _script("__tests__/template.marko_0_$fooChange", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.$fooChange("After");
}));
const $fooChange2 = /*@__PURE__*/ _const("$fooChange", $fooChange2__script);
function $setup($scope) {
	$pattern2($scope, {
		foo: 1,
		fooChange: $fooBar($scope)
	});
}
function $fooBar($scope) {
	return function(v) {
		_el_read($scope["#button/0"]).textContent = v;
	};
}
_resume("__tests__/template.marko_0/fooBar", $fooBar);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
