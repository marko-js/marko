// template.marko
const $load_Child_trigger = /* @__PURE__ */ _load_idle_trigger({ timeout: 100 });
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(/* @__PURE__ */ $load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup(0, 1, /* @__PURE__ */ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $if_content__value = /* @__PURE__ */ _if_closure(1, 0, ($scope) => $load_Child_tag_input_value($scope.b, $scope._.e));
const $if_content__setup = ($scope) => {
	$if_content__value._($scope);
	$load_Child_setup($scope);
};
const $if = /* @__PURE__ */ _if(1, "<!><!><!><!>", "b%/&c", $if_content__setup);
const $show__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.d);
}));
const $show = /* @__PURE__ */ _let(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$show__script($scope);
});
const $value__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$value($scope, $scope.e + 1);
}));
const $value = /* @__PURE__ */ _let(4, ($scope) => {
	$if_content__value($scope);
	$value__script($scope);
});

// child.marko
const $template = "<span> </span>";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $setup__script = _script("a0", ($scope) => console.log("loaded"));
const $setup = $setup__script;

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
