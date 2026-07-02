// child.marko
const $template = "<button>count: <!></button>";
const $walks = " Db%l";
const $count = /* @__PURE__ */ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $input_value = $count;
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
function $setup($scope) {
	$load_Child_setup($scope);
	$load_Child_tag_input_value($scope["#childScope/1"], 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
