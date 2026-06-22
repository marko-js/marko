// template.marko
const $template = "<!><!><!><!><!>";
const $walks = "b%/&b%c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_id = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_id.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
let $load_Child_setup2 = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
const $await_content__setup = ($scope) => {
	$load_Child_setup2($scope);
	$load_Child_tag_input_id($scope["#childScope/1"], "async");
};
const $await_content__value = ($scope, value) => $load_Child_tag_input_value($scope["#childScope/1"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
function $setup($scope) {
	$load_Child_setup($scope);
	$load_Child_tag_input_id($scope["#childScope/1"], "sync");
	$await_content($scope);
}
const $await_content = /* @__PURE__ */ _await_content("#text/2", "<!><!><!><!>", "b%/&c", $await_content__setup);
const $await_promise = /* @__PURE__ */ _await_promise("#text/2", $await_content__$params);
const $input_value = ($scope, input_value) => {
	$load_Child_tag_input_value($scope["#childScope/1"], input_value);
	$await_promise($scope, resolveAfter(input_value + 1, 1));
};
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// child.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = () => {};
const $count__script = _script("__tests__/child.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
const $input_value = $count;
const $input_id = ($scope, input_id) => _attr($scope["#button/0"], "id", input_id);
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_id($scope, input.id);
};
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
