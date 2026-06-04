// total: 446 (min) 262 (brotli)
// template.marko: 394 (min) 210 (brotli)
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
let $load_Child_tag_input_label = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_label.mjs"));
let $load_Child_setup = /* @__PURE__ */ _load_setup(0, 1, () => import("./v:child.marko.setup.mjs"));
const $if_content__value = /* @__PURE__ */ _if_closure(1, 0, ($scope) => $load_Child_tag_input_value($scope.b, $scope._.c));
const $if_content__setup = ($scope) => {
	$if_content__value._($scope);
	$load_Child_setup($scope);
	$load_Child_tag_input_label($scope.b, "child");
};
const $if = /* @__PURE__ */ _if(1, "<!><!><!><!>", "b%/&c", $if_content__setup);
const $value__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.c + 1);
}));
const $value = /* @__PURE__ */ _let(2, ($scope) => {
	$if($scope, $scope.c % 2 === 0 ? 0 : 1);
	$if_content__value($scope);
	$value__script($scope);
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
