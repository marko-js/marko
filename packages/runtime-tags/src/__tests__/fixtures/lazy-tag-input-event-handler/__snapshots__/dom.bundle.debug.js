// child.marko
const $template = "<button class=child>child:<!></button>";
const $walks = " Db%l";
const $data = /* @__PURE__ */ _let("data/5");
const $input_data = $data;
const $verified = /* @__PURE__ */ _let("verified/6", ($scope) => _text($scope["#text/1"], $scope.verified));
function $setup($scope) {
	$verified($scope, "?");
}
const $input__script = _script("__tests__/child.marko_0_input", ($scope) => _on($scope["#button/0"], "click", function() {
	$verified($scope, String($scope.input.report($scope.data)));
}));
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	$input_data($scope, $scope.input.data);
	$input__script($scope);
});
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=main>main:<!></button><!><!><!>";
const $walks = " Db%l%/&c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/2", "#childScope/3", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input.mjs"));
const $shared = /* @__PURE__ */ _let("shared/4", ($scope) => $load_Child_tag_input($scope["#childScope/3"], {
	data: $scope.shared,
	report: $report($scope)
}));
const $count = /* @__PURE__ */ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + Object.keys($scope.shared).length);
}));
function $setup($scope) {
	$load_Child_setup($scope);
	$shared($scope, { value: 1 });
	$count($scope, 0);
	$setup__script($scope);
}
function $report($scope) {
	return function(o) {
		return o === $scope.shared;
	};
}
_resume("__tests__/template.marko_0/report", $report);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
