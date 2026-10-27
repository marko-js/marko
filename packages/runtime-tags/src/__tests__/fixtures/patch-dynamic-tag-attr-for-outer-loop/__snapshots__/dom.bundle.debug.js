// tags/list.marko
const $template$2 = "<ul></ul>";
const $walks$2 = " b";
const $setup$2 = ($_) => {};
const $for_content__dynamicTag$2 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__it$1 = $for_content__dynamicTag$2;
const $for_content__$params$2 = ($scope, $params2) => $for_content__it$1($scope, $params2[0]);
const $for$2 = /*@__PURE__*/ _for_of_unkeyed("#ul/0", "<li><!></li>", "D%", 0, $for_content__$params$2);
const $input_item$1 = ($scope, input_item) => $for$2($scope, [input_item]);
const $input$2 = ($scope, input) => $input_item$1($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$2, " b", 0, $input$2);

// tags/list2.marko
const $template$1 = "<ol></ol>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $for_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__it = $for_content__dynamicTag$1;
const $for_content__$params$1 = ($scope, $params2) => $for_content__it($scope, $params2[0]);
const $for$1 = /*@__PURE__*/ _for_of_unkeyed("#ol/0", "<li><!></li>", "D%", 0, $for_content__$params$1);
const $input_item = ($scope, input_item) => $for$1($scope, [input_item]);
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var list2_default = /*@__PURE__*/ _template("__tests__/tags/list2.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = "<button class=inc> </button><!><!>";
const $walks = " D l%c";
const $item_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_note#0:8/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill2", "input_note", /*@__PURE__*/ _closure_get("input_note/12", ($scope) => _text($scope["#text/2"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_2_input_note#0:8/subscribe"), 0));
const $item_content__setup = ($scope) => {
	$item_content__input_note($scope);
	$item_content__a($scope);
};
const $item_content__a = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_a#1:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill3", "a", /*@__PURE__*/ _closure_get("a/13", ($scope) => _text($scope["#text/0"], $scope._.a), 0, "__tests__/template.marko_2_a#1:3/subscribe"), 0));
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!>:<!>:<!>", "%c%c%", $item_content__setup), { b: ($scope) => _text($scope["#text/1"], $scope.b) });
_resumed["__tests__/template.marko_2*content"] = $item_content;
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__input_on__OR__input_bs = /*@__PURE__*/ _fill_join_for("__tests__/template.marko_fill1 __tests__/template.marko_fill1/unpatched", "input_bs", /*@__PURE__*/ _fill_join_for("__tests__/template.marko_fill0 __tests__/template.marko_fill0/unpatched", "input_on", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_on#0:6_input_bs#0:7/init", 1, ($scope) => $for_content__dynamicTag($scope, $scope._.input_on ? list_default : list2_default, ($_) => {
	let $item;
	forOf($scope._.input_bs, (b) => {
		$item = attrTags($item, { content: $item_content($scope, { b }) });
	});
	return { item: $item };
})), "#text/2"), "#text/2");
const $for_content__input_on = /*@__PURE__*/ _for_closure("#text/2", $for_content__input_on__OR__input_bs);
const $for_content__setup = ($scope) => {
	$for_content__input_on._($scope);
	$for_content__input_bs._($scope);
};
const $for_content__input_bs = /*@__PURE__*/ _for_closure("#text/2", $for_content__input_on__OR__input_bs);
const $for_content__$params = ($scope, $params2) => $for_content__a($scope, $params2[0]);
const $for_content__a__closure = /*@__PURE__*/ _closure($item_content__a);
const $for_content__a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "a", $for_content__a__closure);
const $n = /*@__PURE__*/ _let("n/9", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_as = ($scope, input_as) => $for($scope, [input_as]);
const $input = ($scope, input) => {
	$input_as($scope, input.as);
	$input_on($scope, input.on);
	$input_bs($scope, input.bs);
	$input_note($scope, input.note);
};
const $input_on = /*@__PURE__*/ _const("input_on", $for_content__input_on);
const $input_bs = /*@__PURE__*/ _const("input_bs", $for_content__input_bs);
const $input_note__closure = /*@__PURE__*/ _closure($item_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
