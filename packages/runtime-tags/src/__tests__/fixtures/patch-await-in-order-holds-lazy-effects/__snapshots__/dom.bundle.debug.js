// child.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup__script = _script("__tests__/child.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.input_valueChange($scope.input_value + 1);
	});
	console.log("child effect");
});
const $setup = $setup__script;
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _text($scope["#text/1"], $scope.input_value));
const $input = ($scope, input) => {
	$input_valueChange($scope, input.valueChange);
	$input_value($scope, input.value);
};
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange");
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<!><!><p> </p><!><!>";
const $walks = "b%/&bD l%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal_patch(() => import("./v:child.marko.input_value.mjs"), "ready:__tests__/child.marko");
let $load_Child_tag_input_valueChange = /*@__PURE__*/ _load_signal_patch(() => import("./v:child.marko.input_valueChange.mjs"), "ready:__tests__/child.marko");
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $value = /*@__PURE__*/ _let("value/7", ($scope) => $load_Child_tag_input_value($scope["#childScope/1"], $scope.value));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_valueChange($scope["#childScope/1"], $valueChange($scope));
	$await_content($scope);
	$value($scope, 0);
}
const $await_content = /*@__PURE__*/ _await_content("#text/3", "<div> </div>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/3", $await_content__$params);
const $input_label = ($scope, input_label) => {
	$await_promise($scope, resolveAfter(input_label, 3));
	_text($scope["#text/2"], input_label);
};
const $input = ($scope, input) => $input_label($scope, input.label);
const $valueChange = ($scope) => (_new_value) => {
	$value($scope, _new_value);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
