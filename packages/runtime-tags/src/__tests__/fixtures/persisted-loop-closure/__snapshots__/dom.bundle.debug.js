// template.marko
const $template = "<ul></ul><button>+</button>";
const $walks = " b b";
const $for_content__boost = /*@__PURE__*/ _resume("__tests__/template.marko_1_boost/init", /*@__PURE__*/ _for_closure("#ul/0", ($scope) => _text($scope["#text/1"], $scope._.boost)));
const $for_content__setup = $for_content__boost;
const $for_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $for_content__$params = ($scope, $params2) => $for_content__label($scope, $params2[0]);
const $boost = /*@__PURE__*/ _let("boost/5", $for_content__boost);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$boost($scope, $scope.boost + 1);
}));
function $setup($scope) {
	$boost($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> <span> </span></li>", "D bD ", $for_content__setup, $for_content__$params);
const $input_labels = ($scope, input_labels) => $for($scope, [input_labels]);
const $input = ($scope, input) => $input_labels($scope, input.labels);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
