// template.marko
const $template = "<button>Toggle</button><!><!>";
const $walks = " b%c";
let $lazy_Child_tag_input_value = /* @__PURE__ */ _lazy_signal(() => import("./v:child.marko.input_value.mjs"));
let $lazy_Child_setup = /* @__PURE__ */ _lazy_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
const $if_content__setup = ($scope) => {
	$lazy_Child_setup($scope);
	$lazy_Child_tag_input_value($scope["#childScope/1"], 1);
};
const $if = /* @__PURE__ */ _if("#text/1", "<!><!><!><!>", "b%/&c", $if_content__setup);
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/2", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
function $setup($scope) {
	$show($scope, true);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "D l", $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
