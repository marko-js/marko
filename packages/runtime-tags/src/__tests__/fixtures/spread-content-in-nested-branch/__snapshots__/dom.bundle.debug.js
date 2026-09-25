// tags/list.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__item__script = _script("__tests__/tags/list.marko_2_item#2", ($scope) => _attrs_script($scope, "#div/0"));
const $if_content__item = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_attrs_content($scope, "#div/0", $scope._.item);
	$if_content__item__script($scope);
});
const $if_content__setup = $if_content__item;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure("#text/1", ($scope) => $for_content__if($scope, $scope._.show ? 0 : 1));
const $for_content__setup = $for_content__show;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = /*@__PURE__*/ _const("item", $if_content__item);
const $show = /*@__PURE__*/ _let("show/5", $for_content__show);
const $setup__script$1 = _script("__tests__/tags/list.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup$1($scope) {
	$show($scope, true);
	$setup__script$1($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=inc>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $item_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_1_count#2/subscribe");
const $item_content__setup = $item_content__count;
const $item_content = _content("__tests__/template.marko_1*content", "One <!>", "b%", $item_content__setup);
const $count__closure = /*@__PURE__*/ _closure($item_content__count);
const $count = /*@__PURE__*/ _let("count/2", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_item($scope["#childScope/0"], attrTag({
		class: "a",
		content: $item_content($scope)
	}));
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
