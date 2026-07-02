// child.marko
const $template = "<button id=child>child:<!></button><!><!>";
const $walks = " Db%l%c";
let $load_GrandChild_setup = /* @__PURE__ */ _load_setup("#text/1", "#childScope/2", () => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:grand-child.marko.input_value.mjs"));
const $await_content__count = /* @__PURE__ */ _closure_get("count", ($scope) => $load_GrandChild_tag_input_value($scope["#childScope/2"], $scope._.count));
const $await_content__setup = ($scope) => {
	$await_content__count($scope);
	$load_GrandChild_setup($scope);
};
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $count__closure = /* @__PURE__ */ _closure($await_content__count);
const $count = /* @__PURE__ */ _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $input_value = $count;
const $await_content = /* @__PURE__ */ _await_content("#text/2", "<span id=child-await> </span><!><!><!>", "D l%/&c", $await_content__setup);
const $await_promise = /* @__PURE__ */ _await_promise("#text/2", $await_content__$params);
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter(10, 1));
	$setup__script($scope);
}
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// grand-child.marko
const $template = "<button id=grand>grand:<!>:<!></button><!><!>";
const $walks = " Db%c%l%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $n = /* @__PURE__ */ _let("n/7", ($scope) => _text($scope["#text/1"], $scope.n));
const $input_value = ($scope, input_value) => {
	_text($scope["#text/2"], input_value);
	$n($scope, input_value);
};
const $await_content = /* @__PURE__ */ _await_content("#text/3", "<span id=grand-await> </span>", "D l");
const $await_promise = /* @__PURE__ */ _await_promise("#text/3", $await_content__$params);
const $setup__script = _script("__tests__/grand-child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter(20, 2));
	$setup__script($scope);
}
const $input = ($scope, input) => $input_value($scope, input.value);
var grand_child_default = /* @__PURE__ */ _template("__tests__/grand-child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<div id=before>before</div><!><!><div id=after>after</div>";
const $walks = "b%/&c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $setup = $load_Child_setup;
const $input_value = ($scope, input_value) => $load_Child_tag_input_value($scope["#childScope/1"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:grand-child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
