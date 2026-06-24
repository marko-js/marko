// template.marko
const $template = "<input><span>value=[<!>]</span><button>drop</button>";
const $walks = " bDb%l b";
const $attrs2__script = _script("__tests__/template.marko_0_attrs", ($scope) => _attrs_script($scope, "#input/0"));
const $attrs2 = /*@__PURE__*/ _let("attrs/4", ($scope) => {
	_attrs($scope, "#input/0", $scope.attrs);
	$attrs2__script($scope);
});
const $value = /*@__PURE__*/ _let("value/3", ($scope) => {
	_text($scope["#text/1"], $scope.value);
	$attrs2($scope, {
		value: $scope.value,
		valueChange: $attrs($scope)
	});
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$attrs2($scope, { type: "text" });
}));
function $setup($scope) {
	$value($scope, "init");
	$setup__script($scope);
}
function $attrs($scope) {
	return function(next) {
		$value($scope, next);
	};
}
_resume("__tests__/template.marko_0/attrs", $attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
