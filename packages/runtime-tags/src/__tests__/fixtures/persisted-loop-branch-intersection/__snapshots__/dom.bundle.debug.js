// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__input_suffix__OR__count__OR__item = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_suffix", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.item + ":" + $scope._._.input_suffix + "@" + $scope._._.count), 2), ($join) => /*@__PURE__*/ _for_closure("#text/0", /*@__PURE__*/ _if_closure("#text/0", 0, $join)));
const $if_content__input_suffix = /*@__PURE__*/ _closure_get("input_suffix", $if_content__input_suffix__OR__count__OR__item, ($scope) => $scope._._);
const $if_content__setup = ($scope) => {
	$if_content__input_suffix($scope);
	$if_content__count($scope);
	$if_content__item._($scope);
};
const $if_content__count = /*@__PURE__*/ _closure_get("count", $if_content__input_suffix__OR__count__OR__item, ($scope) => $scope._._);
const $if_content__item = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_suffix__OR__count__OR__item);
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $for_content__input_flag = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.input_flag ? 0 : 1));
const $for_content__setup = $for_content__input_flag;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = /*@__PURE__*/ _const("item", $if_content__item);
const $count__closure = /*@__PURE__*/ _closure($if_content__count);
const $count = /*@__PURE__*/ _let("count/7", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (item) => item]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_flag($scope, input.flag);
	$input_suffix($scope, input.suffix);
};
const $input_flag = /*@__PURE__*/ _const("input_flag", $for_content__input_flag);
const $input_suffix__closure = /*@__PURE__*/ _closure($if_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
