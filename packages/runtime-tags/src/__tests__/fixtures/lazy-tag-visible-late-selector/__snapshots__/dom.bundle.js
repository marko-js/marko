// total: 420 (min) 237 (brotli)
// template.marko: 375 (min) 200 (brotli)
const $load_Child_trigger = /* @__PURE__ */ _load_visible_trigger("#target");
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup(3, 4, $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $if = /* @__PURE__ */ _if(2, "<div id=target></div>", "b");
const $show__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.f);
}));
const $show = /* @__PURE__ */ _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$show__script($scope);
});
const $value__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$value($scope, $scope.g + 1);
}));
const $value = /* @__PURE__ */ _let(6, ($scope) => {
	$load_Child_tag_input_value($scope.e, $scope.g);
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
