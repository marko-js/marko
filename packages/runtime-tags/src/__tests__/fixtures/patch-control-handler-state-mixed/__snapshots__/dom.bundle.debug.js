// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $for_content__cm__OR__it_v = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "it_v", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_cm#0:9_it_v#4/init", 5, ($scope) => _attr_input_value($scope, "#input/0", $scope.it_v + $scope._.cm, $valueChange($scope))));
const $for_content__cm = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_cm#0:9/init", /*@__PURE__*/ _for_closure("#text/2", $for_content__cm__OR__it_v));
const $for_content__cv = /*@__PURE__*/ _let("cv/6", ($scope) => _text($scope["#text/1"], $scope.cv));
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $for_content__setup = ($scope) => {
	$for_content__cm._($scope);
	$for_content__cv($scope, "");
	$for_content__setup__script($scope);
};
const $for_content__it_v = /*@__PURE__*/ _const("it_v", $for_content__cm__OR__it_v);
const $for_content__$params = ($scope, $params2) => $for_content__it_v($scope, $params2[0]?.v);
const $cm = /*@__PURE__*/ _const("cm", $for_content__cm);
const $input_a__OR__s = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _or(8, ($scope) => $cm($scope, `${$scope.input_a}:${$scope.s}`)));
const $s = /*@__PURE__*/ _let("s/7", ($scope) => {
	_text($scope["#text/1"], $scope.s);
	$input_a__OR__s($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup($scope) {
	$s($scope, 0);
	$setup__script($scope);
}
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__s);
const $for = /*@__PURE__*/ _for_of("#text/2", "<input><span> </span>", " bD ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_items($scope, input.items);
};
const $valueChange = ($scope) => function(v) {
	$for_content__cv($scope, v);
};
_resumed["__tests__/template.marko_1/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
