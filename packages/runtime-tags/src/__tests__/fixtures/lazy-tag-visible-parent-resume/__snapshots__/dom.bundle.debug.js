// child.marko
const $template = "<button class=child>child <!></button>";
const $walks = " Db%l";
const $setup = () => {};
const $count__script = _script("__tests__/child.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/5", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
const $input_value = $count;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=parent>parent <!></button><!><!><!>";
const $walks = " Db%l%/&c";
const $load_Child_trigger = /* @__PURE__ */ _load_visible_trigger("body", { rootMargin: "100px" });
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/2", "#childScope/3", /* @__PURE__ */ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(/* @__PURE__ */ $load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/7", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
const $input_value = ($scope, input_value) => {
	$load_Child_tag_input_value($scope["#childScope/3"], input_value);
	$count($scope, input_value);
};
const $setup = $load_Child_setup;
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
