// tags/frame.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$2, "D%l", 0, $input$2);

// tags/card.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D%l");
const $setup$1 = () => {};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_content = ($scope, input_content) => $input_content$1($scope["#childScope/1"], input_content);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_title($scope, input.title);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $card_content__count = /*@__PURE__*/ _init_closure_get("__tests__/template.marko_2_count#6/init", "count", ($scope) => _text($scope["#text/1"], $scope._._.count), ($scope) => $scope._._);
const $card_content__setup = ($scope) => {
	$card_content__count($scope);
	$card_content__p_name($scope);
	$card_content__item_id($scope);
};
const $card_content__p_name = /*@__PURE__*/ _closure_get("p_name", ($scope) => _text($scope["#text/0"], $scope._._.p_name), ($scope) => $scope._._);
const $card_content__item_id = /*@__PURE__*/ _closure_get("item_id", ($scope) => _text($scope["#text/2"], $scope._.item_id));
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<span><!>/<!>/<!></span>", "D%c%c%", $card_content__setup);
const $for_content__setup = ($scope) => $input_content($scope["#childScope/0"], $card_content($scope));
const $for_content__item_title = ($scope, item_title) => $input_title($scope["#childScope/0"], item_title);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_title($scope, $params2[0]?.title);
	$for_content__item_id($scope, $params2[0]?.id);
};
const $for_content__item_id__closure = /*@__PURE__*/ _closure($card_content__item_id);
const $for_content__item_id = /*@__PURE__*/ _const("item_id", $for_content__item_id__closure);
const $count__closure = /*@__PURE__*/ _closure($card_content__count);
const $count = /*@__PURE__*/ _let("count/6", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $p = ($scope, p) => $p_name($scope, p?.name);
const $p_name__closure = /*@__PURE__*/ _closure($card_content__p_name);
const $p_name = /*@__PURE__*/ _const("p_name", $p_name__closure);
const $input_p = $p;
const $for = /*@__PURE__*/ _for_of("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_p($scope, input.p);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
