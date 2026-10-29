// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $seed = _let("seed/1", ($scope) => _text($scope["#text/0"], $scope.seed));
const $setup__$global_suffix = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_suffix#4", ($scope) => $seed($scope, $scope.$global.suffix), "suffix");
const $setup = $setup__$global_suffix;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
