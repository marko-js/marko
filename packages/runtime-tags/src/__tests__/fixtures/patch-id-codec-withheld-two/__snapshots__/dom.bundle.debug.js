// tags/keeper.marko
const $template$1 = "<button>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content));
const $if_content__setup = $if_content__content;
const $content = /*@__PURE__*/ _fill_let("__tests__/tags/keeper.marko_fill0", "content/5", $if_content__content);
const $input_content = $content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _fill_let("__tests__/tags/keeper.marko_fill1", "show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/tags/keeper.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$content($scope, $scope.content);
	$show($scope, !$scope.show);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$show($scope, true);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var keeper_default = /*@__PURE__*/ _template("__tests__/tags/keeper.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$1, $walks$1);
const $keeper_content2__input_prefix__OR__uid = /*@__PURE__*/ _or(4, ($scope) => {
	_text($scope["#text/1"], $scope._.input_prefix + " " + $scope.uid);
	_attr($scope["#input/2"], "title", $scope._.input_prefix + " " + $scope.uid);
});
const $keeper_content2__input_prefix = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_prefix", /*@__PURE__*/ _closure_get("input_prefix/5", $keeper_content2__input_prefix__OR__uid, 0, "__tests__/template.marko_2_input_prefix#0:4/subscribe"), 1);
const $keeper_content2__uid = /*@__PURE__*/ _const("uid", ($scope) => {
	_attr($scope["#label/0"], "for", $scope.uid);
	_attr($scope["#input/2"], "id", $scope.uid);
	$keeper_content2__input_prefix__OR__uid($scope);
});
const $keeper_content2__setup = ($scope) => {
	$keeper_content2__input_prefix($scope);
	$keeper_content2__uid($scope, _id($scope));
};
const $keeper_content2 = _content("__tests__/template.marko_2*content", "<label> </label><input>", " D l ", $keeper_content2__setup);
const $keeper_content__input_prefix__OR__uid = /*@__PURE__*/ _or(4, ($scope) => {
	_text($scope["#text/1"], $scope._.input_prefix + " " + $scope.uid);
	_attr($scope["#input/2"], "title", $scope._.input_prefix + " " + $scope.uid);
});
const $keeper_content__input_prefix = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_prefix", /*@__PURE__*/ _closure_get("input_prefix/5", $keeper_content__input_prefix__OR__uid, 0, "__tests__/template.marko_1_input_prefix#0:4/subscribe"), 0);
const $keeper_content__uid = /*@__PURE__*/ _const("uid", ($scope) => {
	_attr($scope["#label/0"], "for", $scope.uid);
	_attr($scope["#input/2"], "id", $scope.uid);
	$keeper_content__input_prefix__OR__uid($scope);
});
const $keeper_content__setup = ($scope) => {
	$keeper_content__input_prefix($scope);
	$keeper_content__uid($scope, _id($scope));
};
const $keeper_content = _content("__tests__/template.marko_1*content", "<label> </label><input>", " D l ", $keeper_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $keeper_content($scope));
	$setup$1($scope["#childScope/1"]);
	$input_content($scope["#childScope/1"], $keeper_content2($scope));
}
const $input = ($scope, input) => $input_prefix($scope, input.prefix);
const $input_prefix__closure = /*@__PURE__*/ _closure($keeper_content__input_prefix, $keeper_content2__input_prefix);
const $input_prefix = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_prefix", $input_prefix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
