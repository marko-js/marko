// card.marko
const $template$1 = "<section><em> </em><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_meta = ($scope, input_meta) => _text($scope["#text/0"], input_meta ? input_meta?.n : "-");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_meta($scope, input.meta);
};
var card_default = /*@__PURE__*/ _template("__tests__/card.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $for_content__input_label = /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/1"], $scope._._._.input_label), ($scope) => $scope._._._);
const $for_content__setup = $for_content__input_label;
const $for_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!>:<!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $if_content__input_items = /*@__PURE__*/ _closure_get("input_items", ($scope) => $if_content__for($scope, [$scope._._.input_items]), ($scope) => $scope._._);
const $if_content__setup = $if_content__input_items;
const $Card_content__if = /*@__PURE__*/ _if("#text/0", "<ul></ul>", " ", $if_content__setup);
const $Card_content__input_on = /*@__PURE__*/ _closure_get("input_on", ($scope) => $Card_content__if($scope, $scope._.input_on ? 0 : 1));
const $Card_content__setup = $Card_content__input_on;
const $Card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Card_content__setup);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => $input_meta($scope["#childScope/0"], attrTag({ n: $scope.count })));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Card_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_items($scope, input.items);
	$input_label($scope, input.label);
};
const $input_on__closure = /*@__PURE__*/ _closure($Card_content__input_on);
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__closure);
const $input_items__closure = /*@__PURE__*/ _closure($if_content__input_items);
const $input_items = /*@__PURE__*/ _const("input_items", $input_items__closure);
const $input_label__closure = /*@__PURE__*/ _closure($for_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
