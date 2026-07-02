// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "D l", $setup, $input);

// template.marko
const $template = "<!><!><!><!><!><!>";
const $walks = "b%/&b%b%c";
const $load_Child_trigger = /* @__PURE__ */ _load_has_trigger(".my-button:focus");
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", /* @__PURE__ */ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(/* @__PURE__ */ $load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
const $await_content2__b__script = _script("__tests__/template.marko_2_b", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content2__b($scope, $scope.b + 1);
}));
const $await_content2__b = /* @__PURE__ */ _let("b/2", ($scope) => {
	_text($scope["#text/1"], $scope.b);
	$await_content2__b__script($scope);
});
const $await_content2__setup = ($scope) => $await_content2__b($scope, 1);
const $await_content__a__script = _script("__tests__/template.marko_1_a", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__a($scope, $scope.a + 1);
}));
const $await_content__a = /* @__PURE__ */ _let("a/2", ($scope) => {
	_text($scope["#text/1"], $scope.a);
	$await_content__a__script($scope);
});
const $await_content__setup = ($scope) => $await_content__a($scope, 1);
const $await_content = /* @__PURE__ */ _await_content("#text/2", "<button class=a> </button>", " D l", $await_content__setup);
const $await_promise = /* @__PURE__ */ _await_promise("#text/2");
const $await_content2 = /* @__PURE__ */ _await_content("#text/3", "<button class=b> </button>", " D l", $await_content2__setup);
const $await_promise2 = /* @__PURE__ */ _await_promise("#text/3");
function $setup($scope) {
	$load_Child_setup($scope);
	$await_content($scope);
	$await_content2($scope);
	$await_promise($scope, resolveAfter(1, 1));
	$await_promise2($scope, resolveAfter(2, 2));
}
const $input_value = ($scope, input_value) => $load_Child_tag_input_value($scope["#childScope/1"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
