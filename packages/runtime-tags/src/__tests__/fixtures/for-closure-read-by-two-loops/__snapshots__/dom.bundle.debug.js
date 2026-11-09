// template.marko
const $template = "<ul></ul><ol></ol><button>go</button>";
const $walks = " b b b";
const $for_content2__label = /*@__PURE__*/ _for_closure("#ol/1", ($scope) => _text($scope["#text/0"], $scope._.label), 10);
const $for_content2__setup = ($scope) => {
	$for_content2__label._($scope);
	$for_content2__suffix._($scope);
};
const $for_content2__suffix = /*@__PURE__*/ _for_closure("#ol/1", ($scope) => _text($scope["#text/2"], $scope._.suffix), 11);
const $for_content2__$params = ($scope, $params3) => _text($scope["#text/1"], $params3[0]);
const $for_content__label = /*@__PURE__*/ _for_closure("#ul/0", ($scope) => _text($scope["#text/0"], $scope._.label), 9);
const $for_content__setup = $for_content__label;
const $for_content__$params = ($scope, $params2) => _text($scope["#text/1"], $params2[0]);
const $label = /*@__PURE__*/ _let("label/7", ($scope) => {
	$for_content__label($scope);
	$for_content2__label($scope);
});
const $suffix = /*@__PURE__*/ _let("suffix/8", $for_content2__suffix);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$label($scope, "b");
	$suffix($scope, "?");
}));
function $setup($scope) {
	$label($scope, "a");
	$suffix($scope, "!");
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $input_first = ($scope, input_first) => $for($scope, [input_first]);
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#ol/1", "<li><!><!><!></li>", "D%b%b%", $for_content2__setup, $for_content2__$params);
const $input_second = ($scope, input_second) => $for2($scope, [input_second]);
const $input = ($scope, input) => {
	$input_first($scope, input.first);
	$input_second($scope, input.second);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
