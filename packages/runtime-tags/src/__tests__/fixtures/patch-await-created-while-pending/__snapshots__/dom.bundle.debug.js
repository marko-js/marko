// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $await_content__item_msg = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_item_msg#3:4/init", /*@__PURE__*/ _closure_get("item_msg/8", ($scope) => _text($scope["#text/0"], $scope._.item_msg), 0, "__tests__/template.marko_4_item_msg#3:4/subscribe"));
const $await_content__setup = $await_content__item_msg;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div><!> done</div>", "D%", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $for_content__setup = $await_content;
const $for_content__item_promise = $for_content__await_promise;
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_promise($scope, $params2[0]?.promise);
	$for_content__item_msg($scope, $params2[0]?.msg);
};
const $for_content__item_msg__closure = /*@__PURE__*/ _closure($await_content__item_msg);
const $for_content__item_msg = /*@__PURE__*/ _const("item_msg", $for_content__item_msg__closure);
const $placeholder_content = _content("__tests__/template.marko_2*content", "<em>loading</em>");
const $try_content__for = /*@__PURE__*/ _for_of("#section/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $try_content__input_items = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_items#0:5/init", /*@__PURE__*/ _closure_get("input_items/7", ($scope) => $try_content__for($scope, [$scope._.input_items, "id"]), 0, "__tests__/template.marko_1_input_items#0:5/subscribe"));
const $try_content__setup = $try_content__input_items;
const $count = _let("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/2", "<section></section>", " ", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_items($scope, input.items);
const $input_items__closure = /*@__PURE__*/ _closure($try_content__input_items);
const $input_items = /*@__PURE__*/ _const("input_items", $input_items__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
