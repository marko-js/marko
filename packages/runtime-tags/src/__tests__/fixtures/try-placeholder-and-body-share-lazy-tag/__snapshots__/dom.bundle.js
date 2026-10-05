// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $await_content__setup__script = _script("b0", ($scope) => document.getElementById("log").textContent += document.querySelector(".child")?.textContent);
const $placeholder_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope.b, $scope.a);
	$load_Child_tag_input_value($scope.b, "p");
};
const $placeholder_content = _content("b1", "<!><!><!>", "b%/&", $placeholder_content__setup);

// child.marko
const $template = "<span class=child> </span>";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
