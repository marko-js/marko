// tags/badge.marko
const $template$1 = "<footer><span><!> (<!>)</span><button>ack</button></footer>";
const $walks$1 = "E%c%l l";
const $seen = /*@__PURE__*/ _let("seen/6", ($scope) => _text($scope["#text/1"], $scope.seen));
const $setup__script = _script("__tests__/tags/badge.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$seen($scope, $scope.seen + 1);
}));
function $setup$1($scope) {
	$seen($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label($scope, input.label);
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><ul></ul><!>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D b%b/${_w0}&l`)($walks$1);
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/0"], item_label);
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<em>on sale</em>");
const $for_content__item_sale = ($scope, item_sale) => $for_content__if($scope, item_sale ? 0 : 1);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_label($scope, $params2[0]?.label);
	$for_content__item_sale($scope, $params2[0]?.sale);
};
const $if_content2__input_detail = /*@__PURE__*/ _closure_get("input_detail", ($scope) => _text($scope["#text/0"], $scope._._.input_detail), ($scope) => $scope._._);
const $if_content2__setup = $if_content2__input_detail;
const $if_content__input_summary = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_summary));
const $if_content__setup = ($scope) => {
	$if_content__input_summary._($scope);
	$if_content__input_detail._($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#text/1", "<small> </small>", "D ", $if_content2__setup);
const $if_content__input_detail = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__if($scope, $scope._.input_detail ? 0 : 1));
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!><!></li>", "D%b%", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $if = /*@__PURE__*/ _if("#text/1", "<section><!><!></section>", "D%b%", $if_content__setup);
const $input_summary = /*@__PURE__*/ _const("input_summary", ($scope) => {
	$if($scope, $scope.input_summary ? 0 : 1);
	$if_content__input_summary($scope);
});
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
}
const $input_badge = ($scope, input_badge) => $input_label($scope["#childScope/2"], input_badge);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_summary($scope, input.summary);
	$input_detail($scope, input.detail);
	$input_badge($scope, input.badge);
};
const $input_detail__closure = /*@__PURE__*/ _closure($if_content2__input_detail);
const $input_detail = /*@__PURE__*/ _const("input_detail", ($scope) => {
	$if_content__input_detail($scope);
	$input_detail__closure($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
