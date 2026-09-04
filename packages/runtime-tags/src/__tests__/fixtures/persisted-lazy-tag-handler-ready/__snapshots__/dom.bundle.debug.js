// child.marko
const $template = "<button>go</button>";
const $walks = " b";
const $setup = () => {};
const $input_title__OR__handler__script = _script("__tests__/child.marko_0_input_title#3_handler#4", ($scope) => _attrs_script($scope, "#button/0"));
const $input_title__OR__handler = ($scope) => {
	_attrs($scope, "#button/0", {
		title: $scope.input_title,
		onClick: $handler($scope)
	});
	$input_title__OR__handler__script($scope);
};
const $input_title = /*@__PURE__*/ _const("input_title", $input_title__OR__handler);
const $input = ($scope, input) => $input_title($scope, input.title);
const $handler = ($scope) => (event) => event.target.dataset.seen = $scope.input_title;
_resume("__tests__/child.marko_0/handler", $handler);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, " b", 0, $input);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%/&l";
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "body");
let $load_Child_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")), "ready:__tests__/child.marko");
let $load_Child_tag_input_title = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.input_title.mjs")));
const $setup = $load_Child_setup;
const $input_title = ($scope, input_title) => $load_Child_tag_input_title($scope["#childScope/1"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	" b",
	$setup
];
