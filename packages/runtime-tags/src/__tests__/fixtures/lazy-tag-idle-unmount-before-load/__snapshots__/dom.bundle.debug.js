// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $setup__script = _script("__tests__/child.marko_0", ($scope) => console.log("loaded"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "D l", $setup, $input);

// template.marko
const $template = "<button id=toggle>Toggle</button><!><button id=inc>Inc</button>";
const $walks = " b%b b";
const $load_Child_trigger = /* @__PURE__ */ _load_idle_trigger({ timeout: 100 });
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", /* @__PURE__ */ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(/* @__PURE__ */ $load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
const $if_content__value = /* @__PURE__ */ _if_closure("#text/1", 0, ($scope) => $load_Child_tag_input_value($scope["#childScope/1"], $scope._.value));
const $if_content__setup = ($scope) => {
	$if_content__value._($scope);
	$load_Child_setup($scope);
};
const $if = /* @__PURE__ */ _if("#text/1", "<!><!><!><!>", "b%/&c", $if_content__setup);
const $show = /* @__PURE__ */ _let("show/3", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $value = /* @__PURE__ */ _let("value/4", $if_content__value);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$show($scope, !$scope.show);
	});
	_on($scope["#button/2"], "click", function() {
		$value($scope, $scope.value + 1);
	});
});
function $setup($scope) {
	$show($scope, true);
	$value($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
