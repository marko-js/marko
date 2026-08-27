// tags/pager.marko
const $template$2 = "<nav></nav>";
const $walks$2 = " b";
const $setup$2 = () => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_start_content = /*@__PURE__*/ _if_closure("#nav/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_start_content));
const $if_content__setup = $if_content__input_start_content;
const $if = /*@__PURE__*/ _if("#nav/0", "<span><!></span>", "D%", $if_content__setup);
const $input_start = ($scope, input_start) => {
	$input_start_content($scope, input_start?.content);
	$if($scope, input_start ? 0 : 1);
};
const $input$1 = ($scope, input) => $input_start($scope, input.start);
const $input_start_content = /*@__PURE__*/ _const("input_start_content", $if_content__input_start_content);
var pager_default = /*@__PURE__*/ _template("__tests__/tags/pager.marko", $template$2, " b", 0, $input$1);

// tags/page.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup$1 = () => {};
const items$1 = [{ title: "First" }, { title: "Second" }];
const $start_content__next_title = /*@__PURE__*/ _closure_get("next_title", ($scope) => _text($scope["#text/0"], $scope._.next_title));
const $start_content__setup = $start_content__next_title;
const $start_content = /*@__PURE__*/ _content("__tests__/tags/page.marko_1*content", " ", " ", $start_content__setup);
const $next = /*@__PURE__*/ _const("next", ($scope) => {
	let $start;
	if ($scope.next) {
		$start = attrTag({ content: $start_content($scope) });
	}
	$input_start($scope["#childScope/0"], $start);
	$next_title($scope, $scope.next?.title);
});
const $next_title__closure = /*@__PURE__*/ _closure($start_content__next_title);
const $next_title = /*@__PURE__*/ _const("next_title", $next_title__closure);
const $input_index = ($scope, input_index) => $next($scope, items$1[input_index]);
const $input = ($scope, input) => $input_index($scope, input.index);
var page_default = /*@__PURE__*/ _template("__tests__/tags/page.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>next</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const items = [{ title: "First" }, { title: "Second" }];
const $index = /*@__PURE__*/ _let("index/2", ($scope) => $input_index($scope["#childScope/1"], $scope.index));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$index($scope, ($scope.index + 1) % 3);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$index($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
