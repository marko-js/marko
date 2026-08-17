// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__input_suffix__OR__count__OR__item = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_suffix", /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope.item + ":" + $scope._._._.input_suffix + "@" + $scope._._._.count), 2), ($join) => /*@__PURE__*/ _if_closure("#text/0", 0, /*@__PURE__*/ _if_closure("#text/0", 0, /*@__PURE__*/ _for_closure("#text/0", $join))));
const $for_content__input_suffix = /*@__PURE__*/ _closure_get("input_suffix", $for_content__input_suffix__OR__count__OR__item, ($scope) => $scope._._._);
const $for_content__setup = ($scope) => {
	$for_content__input_suffix($scope);
	$for_content__count($scope);
};
const $for_content__count = /*@__PURE__*/ _init_closure_get("__tests__/template.marko_3_count#8/init", "count", $for_content__input_suffix__OR__count__OR__item, ($scope) => $scope._._._);
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_suffix__OR__count__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content2__for = /*@__PURE__*/ _for_of("#text/0", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $if_content2__input_items = /*@__PURE__*/ _closure_get("input_items", ($scope) => $if_content2__for($scope, [$scope._._.input_items, (item) => item]), ($scope) => $scope._._);
const $if_content2__setup = $if_content2__input_items;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content2__setup);
const $if_content__input_inner = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_inner ? 0 : 1));
const $if_content__setup = $if_content__input_inner;
const $count__closure = /*@__PURE__*/ _closure($for_content__count);
const $count = /*@__PURE__*/ _let("count/8", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_inner($scope, input.inner);
	$input_items($scope, input.items);
	$input_suffix($scope, input.suffix);
};
const $input_inner = /*@__PURE__*/ _const("input_inner", $if_content__input_inner);
const $input_items__closure = /*@__PURE__*/ _closure($if_content2__input_items);
const $input_items = /*@__PURE__*/ _const("input_items", $input_items__closure);
const $input_suffix__closure = /*@__PURE__*/ _closure($for_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
