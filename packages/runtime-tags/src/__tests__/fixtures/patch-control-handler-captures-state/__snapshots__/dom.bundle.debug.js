// template.marko
const $template = "<main><!><em> </em><button>s</button></main>";
const $walks = "D%bD l l";
const $if_content__v__OR__suffix = /*@__PURE__*/ _or(1, ($scope) => _attr_input_value($scope, "#input/0", $scope._.v, $valueChange($scope)));
const $if_content__v = /*@__PURE__*/ _init_if_closure("__tests__/template.marko_1_v#6/init", "#text/0", 0, $if_content__v__OR__suffix);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $if_content__setup = ($scope) => {
	$if_content__v._($scope);
	$if_content__suffix._($scope);
	$if_content__setup__script($scope);
};
const $if_content__suffix = /*@__PURE__*/ _init_if_closure("__tests__/template.marko_1_suffix#7/init", "#text/0", 0, $if_content__v__OR__suffix);
const $v = /*@__PURE__*/ _let("v/6", ($scope) => {
	_text($scope["#text/1"], $scope.v);
	$if_content__v($scope);
});
const $suffix = /*@__PURE__*/ _let("suffix/7", $if_content__suffix);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$suffix($scope, $scope.suffix + "!");
}));
function $setup($scope) {
	$v($scope, "");
	$suffix($scope, "!");
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<input>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
const $valueChange = ($scope) => function(x) {
	$v($scope._, x + $scope._.suffix);
};
_resume("__tests__/template.marko_1/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
