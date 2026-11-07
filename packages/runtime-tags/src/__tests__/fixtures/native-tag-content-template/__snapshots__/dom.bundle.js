// tags/counter.marko
const $template = "<button id=counter> </button>";
const $walks = " D l";
const $clicks = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$clicks($scope, 0);
	$setup__script$1($scope);
}
var counter_default = /*@__PURE__*/ _template("b", $template, $walks, $setup);

// tags/v:counter.marko.register-default.js
_resumed.b = counter_default;

// template.marko
const $attrs__script = _script("a0", ($scope) => _attrs_script($scope, "c"));
const $attrs = /*@__PURE__*/ _const(4, ($scope) => {
	_attrs_content($scope, "c", $scope.e);
	$attrs__script($scope);
});
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$attrs($scope, {
		"data-n": $scope.d,
		content: counter_default
	});
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.d + 1);
}));
