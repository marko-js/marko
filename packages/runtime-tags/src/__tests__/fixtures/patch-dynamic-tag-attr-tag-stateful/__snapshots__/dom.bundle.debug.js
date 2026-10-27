// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $Plain_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Plain_content__item = $Plain_content__dynamicTag;
const $Plain_content__$params = ($scope, $params3) => $Plain_content__item($scope, $params3[0].item);
const $Plain_content = _content("__tests__/template.marko_4*content", "<!><!><!>", "b%", 0, $Plain_content__$params);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__item = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "item", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.item)));
const $if_content__setup = $if_content__item;
const $Wrap_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $Wrap_content__open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "open/5", ($scope) => $Wrap_content__if($scope, $scope.open ? 0 : 1));
const $Wrap_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$Wrap_content__open($scope, !$scope.open);
}));
const $Wrap_content__setup = ($scope) => {
	$Wrap_content__setup__script($scope);
	$Wrap_content__open($scope, true);
};
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__item($scope, $params2[0].item);
const $Wrap_content__item = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "item", $if_content__item);
const $Wrap_content = _content("__tests__/template.marko_2*content", "<button class=toggle>t</button><!><!>", " b%", $Wrap_content__setup, $Wrap_content__$params);
const $item_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/8", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:4/subscribe"), 0));
const $item_content__setup = $item_content__input_note;
const $item_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $item_content__setup);
_content_resume($item_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__Wrap__OR__Plain = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_on ? $scope.Wrap : $scope.Plain, ($_) => ({ item: attrTag({ content: $item_content($scope) }) })), 2);
const $Wrap = /*@__PURE__*/ _const("Wrap", $input_on__OR__Wrap__OR__Plain);
const $Plain = /*@__PURE__*/ _const("Plain", $input_on__OR__Wrap__OR__Plain);
function $setup($scope) {
	$Wrap($scope, { content: $Wrap_content($scope) });
	$Plain($scope, { content: $Plain_content($scope) });
}
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__Wrap__OR__Plain);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($item_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
