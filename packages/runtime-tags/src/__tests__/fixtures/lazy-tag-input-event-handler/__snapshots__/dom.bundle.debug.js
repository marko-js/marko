// child.marko
const $template = "<button class=child>child:<!></button>";
const $walks = " Db%l";
const $input__OR__data__script = _script("__tests__/child.marko_0_input_data", ($scope) => _on($scope["#button/0"], "click", function() {
	$verified($scope, String($scope.input.report($scope.data)));
}));
const $input__OR__data = /* @__PURE__ */ _or(6, $input__OR__data__script);
const $data = /* @__PURE__ */ _let("data/5", $input__OR__data);
const $input_data = $data;
const $verified = /* @__PURE__ */ _let("verified/7", ($scope) => _text($scope["#text/1"], $scope.verified));
function $setup($scope) {
	$verified($scope, "?");
}
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	$input_data($scope, $scope.input.data);
	$input__OR__data($scope);
});
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=main>main:<!></button><!><!><!>";
const $walks = " Db%l%/&c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/2", "#childScope/3", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input.mjs"));
const $shared__OR__count__script = _script("__tests__/template.marko_0_shared_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + Object.keys($scope.shared).length);
}));
const $shared__OR__count = /* @__PURE__ */ _or(6, $shared__OR__count__script);
const $shared = /* @__PURE__ */ _let("shared/4", ($scope) => {
	$load_Child_tag_input($scope["#childScope/3"], {
		data: $scope.shared,
		report: $report($scope)
	});
	$shared__OR__count($scope);
});
const $count = /* @__PURE__ */ _let("count/5", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$shared__OR__count($scope);
});
function $setup($scope) {
	$load_Child_setup($scope);
	$shared($scope, { value: 1 });
	$count($scope, 0);
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
