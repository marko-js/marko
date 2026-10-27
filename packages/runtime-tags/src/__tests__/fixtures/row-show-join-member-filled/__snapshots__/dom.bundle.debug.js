// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $try_content__input_id = /*@__PURE__*/ _closure_get("input_id/6", ($scope) => _text($scope["#text/0"], $scope._.input_id), 0, "__tests__/template.marko_3_input_id#0:5/subscribe");
const $try_content__setup = $try_content__input_id;
const $placeholder_content__input_id = /*@__PURE__*/ _closure_get("input_id/6", ($scope) => _text($scope["#text/0"], $scope._.input_id), 0, "__tests__/template.marko_2_input_id#0:5/subscribe");
const $placeholder_content__setup = $placeholder_content__input_id;
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading <!>", "b%", $placeholder_content__setup);
const $for_content__show = /*@__PURE__*/ _show("#div/0");
const $for_content__input_id__OR__item_on = /*@__PURE__*/ _or(4, ($scope) => $for_content__show($scope, $scope.item_on ? $scope._.input_id : ""));
const $for_content__input_id = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_id__OR__item_on);
const $for_content__setup = $for_content__input_id;
const $for_content__item_on = /*@__PURE__*/ _const("item_on", $for_content__input_id__OR__item_on);
const $for_content__$params = ($scope, $params2) => $for_content__item_on($scope, $params2[0]?.on);
const $for = /*@__PURE__*/ _for_of("#text/0", "<div>shown</div>", " ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "k"]);
const $try = /*@__PURE__*/ _try("#text/1", "<p> </p>", "D ", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_id($scope, input.id);
};
const $input_id__closure = /*@__PURE__*/ _closure($placeholder_content__input_id, $try_content__input_id);
const $input_id = /*@__PURE__*/ _const("input_id", ($scope) => {
	$for_content__input_id($scope);
	$input_id__closure($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
