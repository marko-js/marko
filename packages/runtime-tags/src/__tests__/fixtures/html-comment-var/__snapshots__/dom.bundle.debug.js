// tags/parent-el.marko
const $template$1 = "<!--Body Text-->";
const $walks$1 = " b";
const $tagName = /*@__PURE__*/ _let("tagName/1", ($scope) => _return($scope, $scope.tagName));
const $setup__script = _script("__tests__/tags/parent-el.marko_0", ($scope) => $tagName($scope, _el_read($scope["#comment/0"]).parentElement.tagName));
function $setup$1($scope) {
	$tagName($scope, undefined);
	$setup__script($scope);
}
var parent_el_default = /*@__PURE__*/ _template("__tests__/tags/parent-el.marko", $template$1, " b", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<div>${_w0} </div><span>${_w1} </span>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D0${_w0}& lD0${_w1}& l`)(" b", " b");
const $divName = _var_resume("__tests__/template.marko_0_divName/var", ($scope, divName) => _text($scope["#text/2"], divName));
function $setup($scope) {
	_var($scope, "#childScope/0", $divName);
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/3", $spanName);
	$setup$1($scope["#childScope/3"]);
}
const $spanName = _var_resume("__tests__/template.marko_0_spanName/var", ($scope, spanName) => _text($scope["#text/5"], spanName));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
