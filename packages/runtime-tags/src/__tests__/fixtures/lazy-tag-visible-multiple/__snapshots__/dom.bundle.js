// total: 445 (min) 208 (brotli)
// template.marko: 425 (min) 172 (brotli)
const $load_ChildA_trigger = /* @__PURE__ */ _load_visible_trigger(":is(body)");
let $load_ChildA_tag_input_value = /* @__PURE__ */ _load_signal($load_ChildA_trigger(() => import("./v:child-a.marko.input_value.mjs")));
let $load_ChildA_setup = /* @__PURE__ */ _load_setup(1, 2, $load_ChildA_trigger(() => import("./v:child-a.marko.setup.mjs")));
const $load_ChildB_trigger = /* @__PURE__ */ _load_visible_trigger(":is(body)");
let $load_ChildB_tag_input_value = /* @__PURE__ */ _load_signal($load_ChildB_trigger(() => import("./v:child-b.marko.input_value.mjs")));
let $load_ChildB_setup = /* @__PURE__ */ _load_setup(3, 4, $load_ChildB_trigger(() => import("./v:child-b.marko.setup.mjs")));
const $value__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.i + 1);
}));
const $value = /* @__PURE__ */ _let(8, ($scope) => {
	$load_ChildA_tag_input_value($scope.c, $scope.i);
	$load_ChildB_tag_input_value($scope.e, $scope.i);
	$value__script($scope);
});

// total: 143 (min) 107 (brotli)
// child-a.marko: 0 (min) 1 (brotli)
const $template = "<span class=a> </span>";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// total: 145 (min) 107 (brotli)
// child-b.marko: 0 (min) 1 (brotli)
const $template = "<span class=b> </span>";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope.a, input_value * 2);

// total: 89 (min) 76 (brotli)
// v:child-a.marko.setup.js: 17 (min) 18 (brotli)
const _ = [
	$template,
	"D l",
	$setup
];

// total: 89 (min) 76 (brotli)
// v:child-b.marko.setup.js: 17 (min) 18 (brotli)
const _ = [
	$template,
	"D l",
	$setup
];
