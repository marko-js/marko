// child.marko
const $template = "<span class=child> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// template.marko
const $template = "<button></button><!><!>";
const $walks = " b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $placeholder_content = _content("__tests__/template.marko_3*content", "loading");
const $try_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_value($scope["#childScope/1"], "b");
};
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%/&", $try_content__setup, $placeholder_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
