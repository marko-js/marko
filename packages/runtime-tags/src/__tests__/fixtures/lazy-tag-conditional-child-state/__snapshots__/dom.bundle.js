// template.marko
let $load_Child_setup = /* @__PURE__ */ _load_setup(0, 1, () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_label.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $if_content__value = /* @__PURE__ */ _if_closure(1, 0, ($scope) => $load_Child_tag_input_value($scope.b, $scope._.c));
const $if_content__setup = ($scope) => {
	$if_content__value._($scope);
	$load_Child_setup($scope);
	$load_Child_tag_input_label($scope.b, "child");
};
const $if = /* @__PURE__ */ _if(1, "<!><!><!><!>", "b%/&c", $if_content__setup);
const $value = /* @__PURE__ */ _let(2, ($scope) => {
	$if($scope, $scope.c % 2 === 0 ? 0 : 1);
	$if_content__value($scope);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, $scope.c + 1);
}));

// child.marko
const $template = "<button class=child><!>: <!></button>";
const $walks = " D%c%l";
const $count = /* @__PURE__ */ _let(7, ($scope) => _text($scope.c, $scope.h));
const $input_value = $count;
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $setup = $setup__script;
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
