// tags/tagged/index.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label($scope, input.label);
var tagged_default = /*@__PURE__*/ _template_patch("__tests__/tags/tagged/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $for_content__count__OR__item_id = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "item_id", /*@__PURE__*/ _or(6, ($scope) => $input_label($scope["#childScope/0"], `${$scope.item_id}:${$scope._.count}`)));
const $for_content__count = /*@__PURE__*/ _init_for_closure("__tests__/template.marko_1_count#5/init", "#text/0", $for_content__count__OR__item_id);
const $for_content__setup = $for_content__count;
const $for_content__item = ($scope, item) => $for_content__item_id($scope, item?.id);
const $for_content__item_id = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "item_id", $for_content__count__OR__item_id);
const $for_content__row_item = $for_content__item;
const $for_content__$params = ($scope, $params2) => $for_content__row_item($scope, $params2[0]?.item);
const $count = /*@__PURE__*/ _let("count/5", $for_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template_patch("__tests__/template.marko", $template, $walks, $setup, $input);
