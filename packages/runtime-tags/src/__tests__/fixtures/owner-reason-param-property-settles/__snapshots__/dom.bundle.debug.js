// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_obj__OR__input_count__OR__item__script = _script("__tests__/tags/child.marko_2_input_obj#0:3_input_count#0:6_item#1:2", ($scope) => document.body.dataset.seen = JSON.stringify([
	$scope._._.input_obj,
	$scope._._.input_count,
	$scope._.item
]));
const $if_content__input_obj__OR__input_count__OR__item = /*@__PURE__*/ _or(1, $if_content__input_obj__OR__input_count__OR__item__script, 2);
const $if_content__input_obj = /*@__PURE__*/ _closure_get("input_obj/7", $if_content__input_obj__OR__input_count__OR__item, ($scope) => $scope._._, "__tests__/tags/child.marko_2_input_obj#0:3/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__input_obj($scope);
	$if_content__input_count($scope);
	$if_content__item._($scope);
};
const $if_content__input_count = /*@__PURE__*/ _closure_get("input_count/9", $if_content__input_obj__OR__input_count__OR__item, ($scope) => $scope._._, "__tests__/tags/child.marko_2_input_count#0:6/subscribe");
const $if_content__item = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_text($scope["#text/0"], $scope._.item);
	$if_content__input_obj__OR__input_count__OR__item($scope);
});
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $for_content__input_obj_show = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.input_obj_show ? 0 : 1), 8);
const $for_content__setup = $for_content__input_obj_show;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = /*@__PURE__*/ _const("item", $if_content__item);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input = ($scope, input) => {
	$input_obj($scope, input.obj);
	$input_count($scope, input.count);
};
const $input_obj__closure = /*@__PURE__*/ _closure($if_content__input_obj);
const $input_obj = /*@__PURE__*/ _const("input_obj", ($scope) => {
	$for($scope, [$scope.input_obj?.list]);
	$input_obj_show($scope, $scope.input_obj?.show);
	$input_obj__closure($scope);
});
const $input_obj_show = /*@__PURE__*/ _const("input_obj_show", $for_content__input_obj_show);
const $input_count__closure = /*@__PURE__*/ _closure($if_content__input_count);
const $input_count = /*@__PURE__*/ _const("input_count", $input_count__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>update</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $obj = /*@__PURE__*/ _let("obj/2", ($scope) => $input_obj($scope["#childScope/1"], $scope.obj));
const $count = /*@__PURE__*/ _let("count/3", ($scope) => $input_count($scope["#childScope/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$obj($scope, {
		list: ["a"],
		show: true,
		name: "second"
	});
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$obj($scope, {
		list: ["a", "b"],
		show: true,
		name: "first"
	});
	$count($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
