// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_depth($scope["#childScope/0"], 0);
	$input_content($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/rec.marko
const $template = "<button> </button><!><!><!>";
const $walks = " D l%b%c";
const $rec_content__label = /*@__PURE__*/ _closure_get("label/12", ($scope) => _text($scope["#text/0"], $scope._._.label), ($scope) => $scope._._, "__tests__/tags/rec.marko_3_label#0:9/subscribe");
const $rec_content__setup = $rec_content__label;
const $rec_content = _content_resume("__tests__/tags/rec.marko_3*content", "<em>held <!></em>", "Db%", $rec_content__setup);
const $if_content2__input_depth = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $input_depth($scope["#childScope/0"], $scope._.input_depth + 1));
const $if_content2__setup = ($scope) => {
	$if_content2__input_depth._($scope);
	$setup($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $rec_content($scope));
};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $label__closure = /*@__PURE__*/ _closure($rec_content__label);
const $label = /*@__PURE__*/ _const("label", $label__closure);
const $if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $shown = /*@__PURE__*/ _let("shown/8", ($scope) => {
	$label($scope, $scope.shown ? "on" : "off");
	$if($scope, $scope.shown ? 0 : 1);
});
const $setup__script = _script("__tests__/tags/rec.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$shown($scope, !$scope.shown);
}));
function $setup($scope) {
	$shown($scope, false);
	$setup__script($scope);
}
const $if2 = /*@__PURE__*/ _if("#text/3", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), $if_content2__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$if2($scope, $scope.input_depth < 1 ? 0 : 1);
	$if_content2__input_depth($scope);
});
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
const $input = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_content($scope, input.content);
};
var rec_default = /*@__PURE__*/ _template("__tests__/tags/rec.marko", $template, $walks, $setup, $input);
