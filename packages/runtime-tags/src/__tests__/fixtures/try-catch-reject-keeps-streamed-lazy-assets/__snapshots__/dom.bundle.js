// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $catch_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope.b, $scope.a);
	$load_Child_tag_input_value($scope.b, "catch");
};
const $catch_content__err_message = ($scope, err_message) => _text($scope.c, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("b0", "<!><!> caught <!>", "b%/&c%", $catch_content__setup, $catch_content__$params);

// child.marko
var child_exports = /* @__PURE__ */ __exportAll({
	$input_value: () => $input_value,
	$setup: () => $setup,
	$template: () => $template,
	$walks: () => "D l"
});
const $template = "<span> </span>";
const $setup = () => {};
const $input_value__script = _script("a0", ($scope) => console.log("loaded " + $scope.d));
const $input_value = /*@__PURE__*/ _const(3, ($scope) => {
	_text($scope.a, $scope.d);
	$input_value__script($scope);
});

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
