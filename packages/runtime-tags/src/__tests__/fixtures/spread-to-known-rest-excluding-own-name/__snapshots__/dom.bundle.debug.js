// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = " D l";
const $setup$1 = ($_) => {};
const $rest__script = _script("__tests__/tags/child.marko_0_rest#5", ($scope) => _attrs_script($scope, "#span/0"));
const $rest = /*@__PURE__*/ _const("rest", ($scope) => {
	_attrs($scope, "#span/0", $scope.rest);
	$rest__script($scope);
});
const $x = ($scope, x) => _text($scope["#text/1"], x);
const $input = ($scope, input) => {
	$rest($scope, (({ rest: $rest2, ...rest }) => rest)(input));
	$x($scope, input.rest);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>Change</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $o = /*@__PURE__*/ _let("o/2", ($scope) => {
	$x($scope["#childScope/0"], $scope.o.rest);
	$rest($scope["#childScope/0"], (({ rest: $rest, ...rest }) => rest)($scope.o));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
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
