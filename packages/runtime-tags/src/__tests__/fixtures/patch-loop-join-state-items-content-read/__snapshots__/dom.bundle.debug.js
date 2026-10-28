// tags/child.marko
const $template$1 = "<section></section><!><!>";
const $walks$1 = " b%c";
const $for_content__d = ($scope, d) => _text($scope["#text/0"], d);
const $for_content__input_b__OR__item = /*@__PURE__*/ _fill_join_for("__tests__/tags/child.marko_fill0/unpatched | __tests__/tags/child.marko_fill0", "input_b", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_2_input_b#0:4_item#2/init", 3, ($scope) => $for_content__d($scope, $scope._.input_b + $scope.item)), "#text/1");
const $for_content__input_b = /*@__PURE__*/ _for_closure("#text/1", $for_content__input_b__OR__item);
const $for_content__setup = $for_content__input_b;
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_b__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $frag_content__input_b = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_input_b#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/child.marko_fill0 __tests__/tags/child.marko_fill0/unpatched", "input_b", /*@__PURE__*/ _closure_get("input_b/10", ($scope) => _text($scope["#text/0"], $scope._.input_b), 0, "__tests__/tags/child.marko_1_input_b#0:4/subscribe"), 0));
const $frag_content__setup = $frag_content__input_b;
const $frag_content = _content("__tests__/tags/child.marko_1*content", "<i> </i>", "D ", $frag_content__setup);
const $frag = ($scope, frag) => $frag_content2($scope, frag?.content);
const $input_mode__OR__frag_content = /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_0_input_mode#5_frag_content#8/init", 9, ($scope) => _attr_content($scope, "#section/0", $scope.input_mode ? $scope.frag_content : null));
const $frag_content2 = /*@__PURE__*/ _const("frag_content", $input_mode__OR__frag_content);
function $setup$1($scope) {
	$frag($scope, { content: $frag_content($scope) });
}
const $input_mode = /*@__PURE__*/ _const("input_mode", $input_mode__OR__frag_content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_b$1($scope, input.b);
	$input_mode($scope, input.mode);
	$input_items($scope, input.items);
};
const $input_b__closure = /*@__PURE__*/ _closure($frag_content__input_b);
const $input_b$1 = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_b", ($scope) => {
	$input_b__closure($scope);
	$for_content__input_b($scope);
}, /*@__PURE__*/ _fill_mark("input_b", $input_b__closure));
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=l>l</button><button class=m>m</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b b`)($walks$1);
const $list = /*@__PURE__*/ _let("list/6", ($scope) => $input_items($scope["#childScope/0"], $scope.list));
const $m = /*@__PURE__*/ _let("m/7", ($scope) => $input_mode($scope["#childScope/0"], $scope.m));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$list($scope, $scope.list.concat("r"));
	});
	_on($scope["#button/2"], "click", function() {
		$m($scope, !$scope.m);
	});
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$list($scope, ["p", "q"]);
	$m($scope, false);
	$setup__script($scope);
}
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/0"], input_b);
const $input = ($scope, input) => $input_b($scope, input.b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
