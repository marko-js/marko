// tags/inner.marko
const $template$3 = "<span>inner</span>";
const $walks$3 = "b";
const $setup__script$2 = _script("__tests__/tags/inner.marko_0", ($scope) => console.log("inner setup"));
const $setup$3 = $setup__script$2;
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$3, "b", $setup$3);

// tags/outer.marko
const $template$2 = $template$3;
const $walks$2 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b");
const $setup__script$1 = _script("__tests__/tags/outer.marko_0", ($scope) => console.log("outer setup"));
function $setup$2($scope) {
	$setup$3($scope["#childScope/0"]);
	$setup__script$1($scope);
}
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$2, $walks$2, $setup$2);

// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_body_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_body = $dynamicTag;
const $input$1 = ($scope, input) => $input_body($scope, input.body);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $Body_content__walks = "b";
const $Body_content__template = "<b>define</b>";
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $for_content3__item__script = _script("__tests__/template.marko_8_item#1", ($scope) => console.log("tag body row setup", $scope.item));
const $for_content3__item = /*@__PURE__*/ _const("item", $for_content3__item__script);
const $for_content3__$params = ($scope, $params4) => $for_content3__item($scope, $params4[0]);
const $for_content2__item__script = _script("__tests__/template.marko_7_item#1", ($scope) => console.log("content row setup", $scope.item));
const $for_content2__item = /*@__PURE__*/ _const("item", $for_content2__item__script);
const $for_content2__$params = ($scope, $params3) => $for_content2__item($scope, $params3[0]);
const $if_content2__setup__script = _script("__tests__/template.marko_6", ($scope) => console.log("nested setup"));
const $if_content2__setup = $if_content2__setup__script;
const $for_content__item__script = _script("__tests__/template.marko_5_item#2", ($scope) => console.log("row setup", $scope.item));
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	_text($scope["#text/0"], $scope.item);
	$for_content__item__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $Body_content__setup__script = _script("__tests__/template.marko_4", ($scope) => console.log("define setup"));
const $Body_content__setup = $Body_content__setup__script;
const $inputtag_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/1", 0, 0, 0, $for_content3__$params);
const $inputtag_content__input_items = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_items#0:6/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0/content", "input_items", /*@__PURE__*/ _closure_get("input_items/10", ($scope) => $inputtag_content__for($scope, [$scope._._.input_items]), ($scope) => $scope._._, "__tests__/template.marko_3_input_items#0:6/subscribe"), 1));
const $inputtag_content__setup__script = _script("__tests__/template.marko_3", ($scope) => console.log("tag body setup"));
const $inputtag_content__setup = ($scope) => {
	$inputtag_content__input_items($scope);
	$setup$3($scope["#childScope/0"]);
	$inputtag_content__setup__script($scope);
};
const $inputtag_content = _content("__tests__/template.marko_3*content", /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$3), /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("b"), $inputtag_content__setup);
_content_resume($inputtag_content);
const $body_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", 0, 0, 0, $for_content2__$params);
const $body_content__input_items = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_items#0:6/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0/content", "input_items", /*@__PURE__*/ _closure_get("input_items/10", ($scope) => $body_content__for($scope, [$scope._._.input_items]), ($scope) => $scope._._), 0));
const $body_content__setup__script = _script("__tests__/template.marko_2", ($scope) => console.log("content setup"));
const $body_content__setup = ($scope) => {
	$body_content__input_items($scope);
	$body_content__setup__script($scope);
};
const $body_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em>content</em><!><!>", "b%", $body_content__setup);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<i> </i>", "D ", 0, $for_content__$params);
const $if_content__input_items = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_items#0:6/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_items", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__for($scope, [$scope._.input_items]))));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => console.log("branch setup", document.querySelectorAll("i").length));
const $if_content__setup = ($scope) => {
	$if_content__input_items._($scope);
	$if_content__input_nested._($scope);
	$if_content__input_tag._($scope);
	$if_content__count._($scope);
	$setup$2($scope["#childScope/0"]);
	$Body_content__setup($scope["#childScope/1"]);
	$input_body($scope["#childScope/4"], attrTag({ content: $body_content($scope) }));
	$if_content__setup__script($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#text/3", "<u>nested</u>", 0, $if_content2__setup);
const $if_content__input_nested = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_nested#0:7/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_nested", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__if($scope, $scope._.input_nested ? 0 : 1))));
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/5", $inputtag_content);
const $if_content__input_tag = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_tag#0:8/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "input_tag", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_tag))));
const $if_content__count__script = _script("__tests__/template.marko_1_count#0:9", ($scope) => console.log("branch count", $scope._.count));
const $if_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:9/init", /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__count__script));
const $count = _let("count/9", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}<!><!>${_w2}<!><!>`)($template$2, $Body_content__template, $template$1), /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&%b%b/${_w2}&%c`)($walks$2, $Body_content__walks, "D%l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
	$input_nested($scope, input.nested);
	$input_tag($scope, input.tag);
};
const $input_items__closure = /*@__PURE__*/ _closure($body_content__input_items, $inputtag_content__input_items);
const $input_items = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_items", ($scope) => {
	$if_content__input_items($scope);
	$input_items__closure($scope);
});
const $input_nested = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_nested", $if_content__input_nested);
const $input_tag = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "input_tag", $if_content__input_tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
