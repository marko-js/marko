// total: 1186 (min) 449 (brotli)
// template.marko: 562 (min) 174 (brotli)
const $load_Child_trigger = /* @__PURE__ */ _load_visible_trigger(":is(body)");
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_tag_input_label = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_label.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup(2, 3, $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $load_Child_trigger2 = /* @__PURE__ */ _load_visible_trigger(":is(body)");
let $load_Child_tag_input_value2 = /* @__PURE__ */ _load_signal($load_Child_trigger2(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_tag_input_label2 = /* @__PURE__ */ _load_signal($load_Child_trigger2(() => import("./v:child.marko.input_label.mjs")));
let $load_Child_setup2 = /* @__PURE__ */ _load_setup(0, 1, $load_Child_trigger2(() => import("./v:child.marko.setup.mjs")));
const $await_content__mid__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$await_content__mid($scope, $scope.e + 1);
}));
const $await_content__mid = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$await_content__mid__script($scope);
});
const $parent__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$parent($scope, $scope.j + 1);
}));
const $parent = /* @__PURE__ */ _let(9, ($scope) => {
	_text($scope.b, $scope.j);
	$parent__script($scope);
});

// total: 315 (min) 206 (brotli)
// child.marko: 100 (min) 92 (brotli)
const $template = "<button class=child><!>: <!></button>";
const $walks = " D%c%l";
const $setup = () => {};
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $count = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.c, $scope.h);
	$count__script($scope);
});
const $input_value = ($scope, input_value) => $count($scope, input_value);
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// total: 95 (min) 81 (brotli)
// v:child.marko.setup.js: 24 (min) 28 (brotli)
const _ = [
	$template,
	$walks,
	$setup
];
