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
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "body");
let $load_Child_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_title = /*@__PURE__*/ _load_signal_patch(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.input_title.mjs")), "ready:__tests__/child.marko");
const $if_content__input_title = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $load_Child_tag_input_title($scope["#childScope/1"], $scope._.input_title));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$load_Child_setup($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<main><!></main>", "D%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	" b",
	$setup
];
