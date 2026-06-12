// template.marko
const $template = "<div id=before>before</div><!><!><div id=after>after</div>";
const $walks = "b%/&c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $setup = $load_Child_setup;
const $input_value = ($scope, input_value) => $load_Child_tag_input_value($scope["#childScope/1"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__count__script = _script("__tests__/child.marko_1_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $await_content__count = /* @__PURE__ */ _closure_get("count", ($scope) => {
	_text($scope["#text/1"], $scope._.count);
	$await_content__count__script($scope);
});
const $await_content__setup = $await_content__count;
const $await_content__value = ($scope, value) => _text($scope["#text/2"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $count__closure = /* @__PURE__ */ _closure($await_content__count);
const $count = /* @__PURE__ */ _let("count/4", $count__closure);
const $input_value = ($scope, input_value) => $count($scope, input_value);
const $await_content = /* @__PURE__ */ _await_content("#text/0", "<button><!>:<!></button>", " D%c%l", $await_content__setup);
const $await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter(10, 1));
}
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "b%c", $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];
