// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if_content__l = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_l#0:7/setup", "#text/2", 0, ($scope) => _attr_input_value($scope, "#input/0", String($scope._.l), $valueChange));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $if_content__setup = ($scope) => {
	$if_content__l._($scope);
	$if_content__setup__script($scope);
};
const $l = _let("l/7", ($scope) => {
	_text($scope["#text/1"], $scope.l);
	$if_content__l($scope);
});
const $input_n = $l;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$l($scope, +$scope.l + 1);
}));
const $setup = $setup__script;
const $if = /*@__PURE__*/ _if("#text/2", "<input>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_show($scope, input.show);
};
function $valueChange(v) {
	console.log(v);
}
_resumed["__tests__/template.marko_1/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
