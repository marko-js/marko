// template.marko
const $template = "<button class=parent>parent <!></button><!><!><!>";
const $walks = " Db%l%/&c";
const $load_Child_trigger = /* @__PURE__ */ _load_visible_trigger(":is(body)", { rootMargin: "100px" });
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/2", "#childScope/3", $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/7", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
const $input_value = ($scope, input_value) => {
	$load_Child_tag_input_value($scope["#childScope/3"], input_value);
	$count($scope, input_value);
};
const $setup = $load_Child_setup;
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__count__script = _script("__tests__/child.marko_1_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__count($scope, $scope.count + 1);
}));
const $await_content__count = /* @__PURE__ */ _let("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$await_content__count__script($scope);
});
const $await_content__value = ($scope, value) => $await_content__count($scope, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /* @__PURE__ */ _await_content("#text/0", "<button class=child>child <!></button>", " Db%l");
const $await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $setup = $await_content;
const $input_value = ($scope, input_value) => $await_promise($scope, resolveAfter(input_value, 1));
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "b%c", $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];
