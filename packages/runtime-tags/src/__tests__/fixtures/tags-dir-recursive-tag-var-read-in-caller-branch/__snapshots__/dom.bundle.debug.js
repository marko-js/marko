// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_depth($scope["#childScope/0"], 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/rec.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if_content2__v = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.v));
const $if_content2__setup = $if_content2__v;
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_depth($scope["#childScope/0"], $scope._.input_depth + 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__shown._($scope);
	$setup($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $if_content__v);
};
const $if_content__if = /*@__PURE__*/ _if("#text/2", "<em> </em>", "D ", $if_content2__setup);
const $if_content__shown = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__if($scope, $scope._.shown ? 0 : 1));
const $if_content__v = _var_resume("__tests__/tags/rec.marko_1_v#3/var", /*@__PURE__*/ _const("v", $if_content2__v));
const $shown = /*@__PURE__*/ _let("shown/6", ($scope) => {
	_return($scope, $scope.shown ? "on" : "off");
	$if_content__shown($scope);
});
const $setup__script = _script("__tests__/tags/rec.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$shown($scope, !$scope.shown);
}));
function $setup($scope) {
	$shown($scope, false);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template), /*@__PURE__*/ ((_w0) => `0${_w0}&%c`)($walks), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$if($scope, $scope.input_depth < 1 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var rec_default = /*@__PURE__*/ _template("__tests__/tags/rec.marko", $template, $walks, /*@__PURE__*/ _return_setup($setup), $input);
