// total: 377 (min) 231 (brotli)
// template.marko: 351 (min) 202 (brotli)
const $load_Child_trigger = /* @__PURE__ */ _load_visible_trigger(":is(body)");
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup(0, 1, $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
_enable_catch();
const $placeholder_content = _content_resume("b0", "-- loading...", "b");
const $try_content__count = /* @__PURE__ */ _closure_get(5, ($scope) => $load_Child_tag_input_value($scope.b, $scope._.f));
const $count__closure = /* @__PURE__ */ _closure($try_content__count);
const $count__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.f + 1);
}));
const $count = /* @__PURE__ */ _let(5, ($scope) => {
	$count__closure($scope);
	$count__script($scope);
});

// total: 135 (min) 106 (brotli)
// child.marko: 0 (min) 1 (brotli)
const $template = "<span> </span>";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// total: 87 (min) 75 (brotli)
// v:child.marko.setup.js: 17 (min) 18 (brotli)
const _ = [
	$template,
	"D l",
	$setup
];
