// template.marko
const $template = "<button id=show>Show</button><button id=inc>Inc</button><!><!><!><!>";
const $walks = " b b%b%/&c";
const $load_Child_trigger = /* @__PURE__ */ _load_visible_trigger("#target");
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/3", "#childScope/4", $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $if = /* @__PURE__ */ _if("#text/2", "<div id=target></div>", "b");
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/5", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
const $value__script = _script("__tests__/template.marko_0_value", ($scope) => _on($scope["#button/1"], "click", function() {
	$value($scope, $scope.value + 1);
}));
const $value = /* @__PURE__ */ _let("value/6", ($scope) => {
	$load_Child_tag_input_value($scope["#childScope/4"], $scope.value);
	$value__script($scope);
});
function $setup($scope) {
	$load_Child_setup($scope);
	$show($scope, false);
	$value($scope, 0);
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
