// template.marko
const $template = "<button class=parent>parent <!></button><!><!><!><!><!>";
const $walks = " Db%l%/&b%b%c";
const $load_Child_trigger = /* @__PURE__ */ _load_visible_trigger(":is(body)");
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_tag_input_label = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_label.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/2", "#childScope/3", $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $load_Child_trigger2 = /* @__PURE__ */ _load_visible_trigger(":is(body)");
let $load_Child_tag_input_value2 = /* @__PURE__ */ _load_signal($load_Child_trigger2(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_tag_input_label2 = /* @__PURE__ */ _load_signal($load_Child_trigger2(() => import("./v:child.marko.input_label.mjs")));
let $load_Child_setup2 = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", $load_Child_trigger2(() => import("./v:child.marko.setup.mjs")));
const $await_content2__setup = ($scope) => {
	$load_Child_setup2($scope);
	$load_Child_tag_input_label2($scope["#childScope/1"], "second");
};
const $await_content2__value = ($scope, value) => $load_Child_tag_input_value2($scope["#childScope/1"], value);
const $await_content2__$params = ($scope, $params3) => $await_content2__value($scope, $params3[0]);
const $await_content__mid__script = _script("__tests__/template.marko_1_mid", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__mid($scope, $scope.mid + 1);
}));
const $await_content__mid = /* @__PURE__ */ _let("mid/4", ($scope) => {
	_text($scope["#text/1"], $scope.mid);
	$await_content__mid__script($scope);
});
const $await_content__value = ($scope, value) => $await_content__mid($scope, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $parent__script = _script("__tests__/template.marko_0_parent", ($scope) => _on($scope["#button/0"], "click", function() {
	$parent($scope, $scope.parent + 1);
}));
const $parent = /* @__PURE__ */ _let("parent/9", ($scope) => {
	_text($scope["#text/1"], $scope.parent);
	$parent__script($scope);
});
const $await_content = /* @__PURE__ */ _await_content("#text/4", "<button class=mid>mid <!></button>", " Db%l");
const $await_promise = /* @__PURE__ */ _await_promise("#text/4", $await_content__$params);
const $await_content2 = /* @__PURE__ */ _await_content("#text/5", "<!><!><!><!>", "b%/&c", $await_content2__setup);
const $await_promise2 = /* @__PURE__ */ _await_promise("#text/5", $await_content2__$params);
const $input_value = ($scope, input_value) => {
	$load_Child_tag_input_value($scope["#childScope/3"], input_value);
	$parent($scope, input_value);
	$await_promise($scope, resolveAfter(input_value + 10, 1));
	$await_promise2($scope, resolveAfter(input_value + 20, 2));
};
function $setup($scope) {
	$load_Child_setup($scope);
	$load_Child_tag_input_label($scope["#childScope/3"], "first");
	$await_content($scope);
	$await_content2($scope);
}
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// child.marko
const $template = "<button class=child><!>: <!></button>";
const $walks = " D%c%l";
const $setup = () => {};
const $count__script = _script("__tests__/child.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/7", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$count__script($scope);
});
const $input_value = ($scope, input_value) => $count($scope, input_value);
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_label($scope, input.label);
};
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
