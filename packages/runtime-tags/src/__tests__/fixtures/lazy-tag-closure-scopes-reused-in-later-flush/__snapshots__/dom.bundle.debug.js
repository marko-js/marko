// child.marko
const $template = "<button id=toggle>toggle</button><section></section>";
const $walks = " b b";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#section/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#section/1", "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $Item_content__walks = " b", $Item_content__template = "<span>x</span>";
const $template = "<!><!><!><!>";
const $walks = "b%/&b%c";
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "body");
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_content = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.input_content.mjs")));
const $el_getter = _hoist_resume("__tests__/template.marko_0_#span#0/hoist", "#span/0", "ClosureScopes:1");
const $Item_content = _content("__tests__/template.marko_1*content", $Item_content__template, $Item_content__walks, 0, 0, "ClosureScopes:1");
const $Item = ($scope, Item) => $load_Child_tag_input_content($scope["#childScope/1"], Item);
const $await_content = /*@__PURE__*/ _await_content("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Item_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Item_content__walks));
const $await_promise = /*@__PURE__*/ _await_promise("#text/2");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	for (const e of $el_getter($scope)) e.textContent = "y";
});
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$await_content($scope);
	$Item($scope, { content: $Item_content($scope) });
	$await_promise($scope, resolveAfter(1));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
