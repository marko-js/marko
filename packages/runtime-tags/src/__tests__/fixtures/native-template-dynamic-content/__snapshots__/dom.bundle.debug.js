// tags/child.marko
const $template$1 = "<i> </i>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<template><!><p> </p><template><b> </b></template>${_w0}</template><button>toggle</button><pre></pre>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%bD lE m/${_w0}&l c`)("D l");
const $if = /*@__PURE__*/ _if("#text/0", "<span>shown</span>");
const $show = /*@__PURE__*/ _let("show/5", ($scope) => {
	_text($scope["#text/1"], $scope.show ? "on" : "off");
	_text($scope["#text/2"], $scope.show ? "inner on" : "inner off");
	$input_label($scope["#childScope/3"], $scope.show ? "child on" : "child off");
	$if($scope, $scope.show ? 0 : 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
