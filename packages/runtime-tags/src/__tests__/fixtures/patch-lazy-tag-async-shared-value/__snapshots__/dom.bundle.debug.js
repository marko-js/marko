// child.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = () => {};
const $input_name__OR__input_item__script = _script("__tests__/child.marko_0_input_name#3_input_item#4", ($scope) => document.querySelector("." + $scope.input_name).dataset.item = JSON.stringify($scope.input_item));
const $input_name__OR__input_item = /*@__PURE__*/ _shell_or("__tests__/child.marko_0_input_name#3_input_item#4/init", 5, $input_name__OR__input_item__script);
const $input_name = /*@__PURE__*/ _const("input_name", ($scope) => {
	$input_name__OR__input_item($scope);
	_attr_class($scope["#div/0"], $scope.input_name);
});
const $input_item = /*@__PURE__*/ _const("input_item", $input_name__OR__input_item);
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_item($scope, input.item);
};
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, " b", 0, $input);

// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%/&b%l";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_name = /*@__PURE__*/ _load_signal_patch(() => import("./v:child.marko.input_name.mjs"), "ready:__tests__/child.marko");
let $load_Child_tag_input_item = /*@__PURE__*/ _load_signal_patch(() => import("./v:child.marko.input_item.mjs"), "ready:__tests__/child.marko");
const $placeholder_content = _content("__tests__/template.marko_3*content", "loading");
const $await_content__item = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_2_item#0:7/init", "item/9", ($scope) => $load_Child_tag_input_item($scope["#childScope/2"], $scope._._.item), ($scope) => $scope._._, "__tests__/template.marko_2_item#0:7/subscribe");
const $await_content__setup = ($scope) => {
	$await_content__item($scope);
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$load_Child_tag_input_name($scope["#childScope/2"], "c");
};
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span><!><!>", "D l%/&", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_1_input_promise#0:6/init", "input_promise/8", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_1_input_promise#0:6/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $item__closure = /*@__PURE__*/ _closure($await_content__item);
const $item = /*@__PURE__*/ _const("item", ($scope) => {
	$load_Child_tag_input_item($scope["#childScope/1"], $scope.item);
	$item__closure($scope);
});
const $input_label = ($scope, input_label) => $item($scope, { label: input_label });
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_name($scope["#childScope/1"], "a");
	$try($scope);
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_promise($scope, input.promise);
};
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	" b",
	$setup
];
