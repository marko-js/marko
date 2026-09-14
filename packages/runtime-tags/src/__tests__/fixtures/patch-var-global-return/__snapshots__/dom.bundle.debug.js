// tags/tagger/index.marko
const $template$1 = "<span>t</span>";
const $walks$1 = "b";
const $g = /*@__PURE__*/ _const("g", ($scope) => _return($scope, $scope.g));
const $global_locale = /*@__PURE__*/ _global_join("locale", "__tests__/tags/tagger/index.marko_0_$global_locale#1/global", ($scope, $global_locale) => $g($scope, $scope.$global.locale + "!"));
function $setup$1($scope) {
	$global_locale($scope, $scope.$global.locale);
}
var tagger_default = /*@__PURE__*/ _template("__tests__/tags/tagger/index.marko", $template$1, "b", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D m`)("b");
const $tag = _var_resume("__tests__/template.marko_0_tag#3/var", ($scope, tag) => _text($scope["#text/2"], tag));
function $setup($scope) {
	_var($scope, "#childScope/0", $tag);
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
