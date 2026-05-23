// total: 442 (min) 246 (brotli)
// template.marko: 390 (min) 212 (brotli)
let $lazy_Child_tag_input_label = /* @__PURE__ */ _lazy_signal(() => import("./v:child.marko.input_label.mjs"));
let $lazy_Child_tag_input_value = /* @__PURE__ */ _lazy_signal(() => import("./v:child.marko.input_value.mjs"));
let $lazy_Child_setup = /* @__PURE__ */ _lazy_setup(0, 1, () => import("./v:child.marko.setup.mjs"));
const $if_content__count = /* @__PURE__ */ _if_closure(1, 0, ($scope) => $lazy_Child_tag_input_value($scope.b, $scope._.c));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$lazy_Child_setup($scope);
	$lazy_Child_tag_input_label($scope.b, "x");
};
const $if = /* @__PURE__ */ _if(1, "<!><!><!><!>", "b%/&c", $if_content__setup);
const $count__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	$if($scope, $scope.c % 2 === 0 ? 0 : 1);
	$if_content__count($scope);
	$count__script($scope);
});

// total: 153 (min) 142 (brotli)
// child.marko: 0 (min) 1 (brotli)
const $template = "<div><!>: <!></div>";
const $walks = "D%c%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input_value = ($scope, input_value) => _text($scope.b, input_value);

// total: 77 (min) 80 (brotli)
// v:child.marko.setup.js: 24 (min) 28 (brotli)
const _ = [
	$template,
	$walks,
	$setup
];
