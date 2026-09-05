// tags/store.marko
const $template$2 = "";
const $walks$2 = "";
const $last = /*@__PURE__*/ _fill_let("__tests__/tags/store.marko0", "last/0", ($scope) => _return($scope, {
	last: $scope.last,
	set: $_return($scope)
}));
function $setup$2($scope) {
	$last($scope, 0);
}
const $_return = ($scope) => function(next) {
	$last($scope, next);
};
_resume("__tests__/tags/store.marko_0/_return", $_return);
var store_default = /*@__PURE__*/ _template("__tests__/tags/store.marko", "", "", $setup$2);

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
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}<p> </p>${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&D l/${_w1}&`)("", "D%l");
const $if_content__count = /*@__PURE__*/ _fill_let_change("__tests__/template.marko0", "count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $if_content__store_set = /*@__PURE__*/ _init_closure_get("__tests__/template.marko_2_store_set#9/init", "store_set", ($scope) => $if_content__count($scope, 0, $scope._._.store_set), ($scope) => $scope._._);
const $if_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__count($scope, +$scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__store_set($scope);
	$if_content__setup__script($scope);
};
const $frame_content__if = /*@__PURE__*/ _if("#text/0", "<span>Seen <!></span><button>+</button>", "Db%l ", $if_content__setup);
const $frame_content__input_show = /*@__PURE__*/ _closure_get("input_show", ($scope) => $frame_content__if($scope, $scope._.input_show ? 0 : 1));
const $frame_content__setup = $frame_content__input_show;
const $frame_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $frame_content__setup);
const $store = _var_resume("__tests__/template.marko_0_store#7/var", ($scope, store) => {
	$store_last($scope, store?.last);
	$store_set($scope, store?.set);
});
const $store_last = ($scope, store_last) => _text($scope["#text/2"], store_last);
const $store_set__closure = /*@__PURE__*/ _closure($if_content__store_set);
const $store_set = /*@__PURE__*/ _const("store_set", $store_set__closure);
function $setup($scope) {
	_var($scope, "#childScope/0", $store);
	$setup$2($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/3"], $frame_content($scope));
}
const $input = ($scope, input) => $input_show($scope, input.show);
const $input_show__closure = /*@__PURE__*/ _closure($frame_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
