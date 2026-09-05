// tags/store.marko
const $template$2 = "<p> </p>";
const $walks$2 = "D l";
const $last = /*@__PURE__*/ _fill_let("__tests__/tags/store.marko0", "last/1", ($scope) => _text($scope["#text/0"], $scope.last));
function $setup$2($scope) {
	_return($scope, $_return($scope));
	$last($scope, 0);
}
const $_return = ($scope) => (next) => {
	$last($scope, next);
};
_resume("__tests__/tags/store.marko_0/_return", $_return);
var store_default = /*@__PURE__*/ _template("__tests__/tags/store.marko", $template$2, "D l", $setup$2);

// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("D%l");
const $if_content__count = /*@__PURE__*/ _fill_let_change("__tests__/template.marko0", "count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $if_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__count($scope, +$scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__count($scope, 0, $setLast_getter($scope._));
	$if_content__setup__script($scope);
};
const $setLast_getter = _hoist_resume("__tests__/template.marko_0_setLast#2/hoist", "setLast", "ClosureScopes:1");
const $frame_content__setLast = _var_resume("__tests__/template.marko_1_setLast#2/var", /*@__PURE__*/ _const("setLast", ($scope) => _assert_hoist($scope.setLast)));
const $frame_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $frame_content__setLast);
	$setup$2($scope["#childScope/0"]);
};
const $frame_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", $template$2, /*@__PURE__*/ ((_w0) => `0${_w0}&`)("D l"), $frame_content__setup, 0, "ClosureScopes:1");
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $frame_content($scope));
}
const $if = /*@__PURE__*/ _if("#text/1", "<span>Seen <!></span><button>+</button>", "Db%l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
