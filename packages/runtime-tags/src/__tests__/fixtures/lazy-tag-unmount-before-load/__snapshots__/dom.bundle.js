// total: 337 (min) 213 (brotli)
// template.marko: 271 (min) 173 (brotli)
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
let $load_Child_setup = /* @__PURE__ */ _load_setup(0, 1, () => import("./v:child.marko.setup.mjs"));
const $if_content__setup = ($scope) => {
	$load_Child_setup($scope);
	$load_Child_tag_input_value($scope.b, 1);
};
const $if = /* @__PURE__ */ _if(1, "<!><!><!><!>", "b%/&c", $if_content__setup);
const $show__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
const $show = /* @__PURE__ */ _let(2, ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$show__script($scope);
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
