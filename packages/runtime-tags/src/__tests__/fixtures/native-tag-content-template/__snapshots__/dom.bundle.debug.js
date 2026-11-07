// tags/counter.marko
const $template$1 = "<button id=counter> </button>";
const $walks$1 = " D l";
const $clicks = /*@__PURE__*/ _let("clicks/2", ($scope) => _text($scope["#text/1"], $scope.clicks));
const $setup__script$1 = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, +$scope.clicks + 1);
}));
function $setup$1($scope) {
	$clicks($scope, 0);
	$setup__script$1($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// tags/v:counter.marko.register-default.js
_resumed["__tests__/tags/counter.marko"] = counter_default;

// template.marko
const $template = "<button id=outer> </button><div></div>";
const $walks = " D l b";
const $attrs__script = _script("__tests__/template.marko_0_attrs#4", ($scope) => _attrs_script($scope, "#div/2"));
const $attrs = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs_content($scope, "#div/2", $scope.attrs);
	$attrs__script($scope);
});
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$attrs($scope, {
		"data-n": $scope.n,
		content: counter_default
	});
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
