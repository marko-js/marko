// total: 304 (min) 186 (brotli)
// template.marko: 250 (min) 156 (brotli)
const $load_Child_trigger = /* @__PURE__ */ _load_idle_trigger({ timeout: 100 });
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup(1, 2, $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $value__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.d + 1);
}));
const $value = /* @__PURE__ */ _let(3, ($scope) => {
	$load_Child_tag_input_value($scope.c, $scope.d);
	$value__script($scope);
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
