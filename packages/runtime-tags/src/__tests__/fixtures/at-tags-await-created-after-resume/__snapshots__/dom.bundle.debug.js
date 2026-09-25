// tags/child.marko
const $template$1 = "<button id=show>show</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__item_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.item_content));
const $if_content__setup = $if_content__item_content;
const $await_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $await_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $await_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/tags/child.marko_1_show#5/subscribe");
const $await_content__setup = $await_content__show;
const $await_content__$params = ($scope, $params2) => $await_content__item_content($scope, $params2[0]?.content);
const $await_content__item_content = /*@__PURE__*/ _const("item_content", $if_content__item_content);
const $show__closure = /*@__PURE__*/ _closure($await_content__show);
const $show = /*@__PURE__*/ _let("show/5", $show__closure);
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup$1($scope) {
	$await_content($scope);
	$show($scope, false);
	$setup__script$1($scope);
}
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $input_item = $await_promise;
const $input = ($scope, input) => $input_item($scope, input.item);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button id=inc>inc</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $item_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_1_count#2/subscribe");
const $item_content__setup = $item_content__count;
const $item_content = _content("__tests__/template.marko_1*content", "Item <!>", "b%", $item_content__setup);
const $count__closure = /*@__PURE__*/ _closure($item_content__count);
const $count = /*@__PURE__*/ _let("count/2", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$input_item($scope["#childScope/1"], attrTag({ content: $item_content($scope) }));
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
