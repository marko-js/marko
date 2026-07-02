// child.marko
const $template = "<button class=child><!>: <!></button>";
const $walks = " D%c%l";
const $count = /* @__PURE__ */ _let("count/7", ($scope) => _text($scope["#text/2"], $scope.count));
const $input_value = $count;
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $setup = $setup__script;
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_label($scope, input.label);
};
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=parent>Inc</button><!><!>";
const $walks = " b%c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_label.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $if_content__value = /* @__PURE__ */ _if_closure("#text/1", 0, ($scope) => $load_Child_tag_input_value($scope["#childScope/1"], $scope._.value));
const $if_content__setup = ($scope) => {
	$if_content__value._($scope);
	$load_Child_setup($scope);
	$load_Child_tag_input_label($scope["#childScope/1"], "child");
};
const $if = /* @__PURE__ */ _if("#text/1", "<!><!><!><!>", "b%/&c", $if_content__setup);
const $value = /* @__PURE__ */ _let("value/2", ($scope) => {
	$if($scope, $scope.value % 2 === 0 ? 0 : 1);
	$if_content__value($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, $scope.value + 1);
}));
function $setup($scope) {
	true;
	$value($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
