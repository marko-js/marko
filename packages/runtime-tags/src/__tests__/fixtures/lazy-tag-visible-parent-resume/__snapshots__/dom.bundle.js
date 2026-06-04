// total: 314 (min) 192 (brotli)
// template.marko: 256 (min) 168 (brotli)
const $load_Child_trigger = /* @__PURE__ */ _load_visible_trigger(":is(body)", { rootMargin: "100px" });
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup(2, 3, $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $count__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $count = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$count__script($scope);
});

// total: 279 (min) 189 (brotli)
// child.marko: 100 (min) 86 (brotli)
const $template = "<button class=child>child <!></button>";
const $walks = " Db%l";
const $setup = () => {};
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
const $count = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$count__script($scope);
});
const $input_value = ($scope, input_value) => $count($scope, input_value);

// total: 95 (min) 81 (brotli)
// v:child.marko.setup.js: 24 (min) 28 (brotli)
const _ = [
	$template,
	$walks,
	$setup
];
