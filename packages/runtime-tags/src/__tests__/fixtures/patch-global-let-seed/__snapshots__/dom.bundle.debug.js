// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $seed = _let("seed/1", ($scope) => _text($scope["#text/0"], $scope.seed));
const $global_suffix_key = /*@__PURE__*/ _global_key("$global_suffix/3", "suffix");
const $global_suffix = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_suffix#4/subscribe", $global_suffix_key, ($scope) => $seed($scope, $scope.$global.suffix));
const $setup = $global_suffix;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
