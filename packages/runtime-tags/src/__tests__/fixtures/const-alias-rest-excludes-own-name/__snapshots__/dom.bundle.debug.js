// template.marko
const $template = "<span> </span><button></button>";
const $walks = " D l b";
const $o = /*@__PURE__*/ _let("o/3", ($scope) => {
	$rest($scope, (({ rest: $rest2, ...rest }) => rest)($scope.o));
	$x($scope, $scope.o.rest);
});
const $rest__script = _script("__tests__/template.marko_0_rest#5", ($scope) => _attrs_script($scope, "#span/0"));
const $rest = /*@__PURE__*/ _const("rest", ($scope) => {
	_attrs($scope, "#span/0", $scope.rest);
	$rest__script($scope);
});
const $x = /*@__PURE__*/ _const("x", ($scope) => _text($scope["#text/1"], $scope.x));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$o($scope, {
		rest: 3,
		a: 4
	});
}));
function $setup($scope) {
	$o($scope, {
		rest: 1,
		a: 2
	});
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
