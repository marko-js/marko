// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $for_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content2__it = $for_content2__dynamicTag;
const $for_content2__$params = ($scope, $params5) => $for_content2__it($scope, $params5[0]);
const $Plain_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content2__$params);
const $Plain_content__item = ($scope, item) => $Plain_content__for($scope, [item]);
const $Plain_content__$params = ($scope, $params4) => $Plain_content__item($scope, $params4[0].item);
const $Plain_content = _content("__tests__/template.marko_6*content", "<!><!><!>", "b%", 0, $Plain_content__$params);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__it = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params3) => $for_content__it($scope, $params3[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $if_content__item = /*@__PURE__*/ _fill("__tests__/template.marko_fill2", "item", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__for($scope, [$scope._.item])));
const $if_content__setup = $if_content__item;
const $Wrap_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $Wrap_content__open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill3", "open/5", ($scope) => $Wrap_content__if($scope, $scope.open ? 0 : 1));
const $Wrap_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	$Wrap_content__open($scope, !$scope.open);
}));
const $Wrap_content__setup = ($scope) => {
	$Wrap_content__setup__script($scope);
	$Wrap_content__open($scope, true);
};
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__item($scope, $params2[0].item);
const $Wrap_content__item = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "item", $if_content__item);
const $Wrap_content = _content("__tests__/template.marko_3*content", "<button class=toggle>t</button><!><!>", " b%", $Wrap_content__setup, $Wrap_content__$params);
const $item_content2__input_b = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_b#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_b", /*@__PURE__*/ _closure_get("input_b/10", ($scope) => _text($scope["#text/0"], $scope._.input_b), 0, "__tests__/template.marko_2_input_b#0:5/subscribe"), 0));
const $item_content2__setup = $item_content2__input_b;
const $item_content2 = _content("__tests__/template.marko_2*content", "<b> </b>", "D ", $item_content2__setup);
_content_resume($item_content2);
const $item_content__input_a = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_a#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _closure_get("input_a/9", ($scope) => _text($scope["#text/0"], $scope._.input_a), 0, "__tests__/template.marko_1_input_a#0:4/subscribe"), 0));
const $item_content__setup = $item_content__input_a;
const $item_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $item_content__setup);
_content_resume($item_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__Wrap__OR__Plain = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.input_on ? $scope.Wrap : $scope.Plain, ($_) => ({ item: attrTags(attrTag({ content: $item_content($scope) }), { content: $item_content2($scope) }) })), 2);
const $Wrap = /*@__PURE__*/ _const("Wrap", $input_on__OR__Wrap__OR__Plain);
const $Plain = /*@__PURE__*/ _const("Plain", $input_on__OR__Wrap__OR__Plain);
function $setup($scope) {
	$Wrap($scope, { content: $Wrap_content($scope) });
	$Plain($scope, { content: $Plain_content($scope) });
}
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__Wrap__OR__Plain);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a__closure = /*@__PURE__*/ _closure($item_content__input_a);
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($item_content2__input_b);
const $input_b = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_b", $input_b__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
