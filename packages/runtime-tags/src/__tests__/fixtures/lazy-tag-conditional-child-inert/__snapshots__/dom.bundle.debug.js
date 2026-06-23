// child.marko
const $template = "<div><!>: <!></div>";
const $walks = "D%c%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input_value = ($scope, input_value) => _text($scope["#text/1"], input_value);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_value($scope, input.value);
};
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button>Inc</button><!><!>";
const $walks = " b%c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_label.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $if_content__count = /* @__PURE__ */ _if_closure("#text/1", 0, ($scope) => $load_Child_tag_input_value($scope["#childScope/1"], $scope._.count));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$load_Child_setup($scope);
	$load_Child_tag_input_label($scope["#childScope/1"], "x");
};
const $if = /* @__PURE__ */ _if("#text/1", "<!><!><!><!>", "b%/&c", $if_content__setup);
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/2", ($scope) => {
	$if($scope, $scope.count % 2 === 0 ? 0 : 1);
	$if_content__count($scope);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
