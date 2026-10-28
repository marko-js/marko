// template.marko
const $template = "<!><!><output> </output>";
const $walks = "b%bD l";
let n = 0;
const $await_content__input_name__OR__uid = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_name#0:4_uid#4/init", 5, ($scope) => _attr($scope["#label/0"], "for", `${$scope.uid}-${$scope._.input_name}`));
const $await_content__input_name = /*@__PURE__*/ _closure_get("input_name/7", $await_content__input_name__OR__uid, 0, "__tests__/template.marko_1_input_name#0:4/subscribe");
const $await_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$shown($scope._, $scope.uid);
}));
const $await_content__setup = ($scope) => {
	$await_content__input_name($scope);
	$await_content__input_label($scope);
	$await_content__setup__script($scope);
};
const $await_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:5/init", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/1"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:5/subscribe"));
const $await_content__uid = /*@__PURE__*/ _const("uid", $await_content__input_name__OR__uid);
const $await_content__$params = ($scope, $params2) => $await_content__uid($scope, $params2[0]);
const $shown = /*@__PURE__*/ _let("shown/6", ($scope) => _text($scope["#text/1"], $scope.shown));
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<label> </label><button>show</button>", " D l ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$shown($scope, "");
	$await_promise($scope, Promise.resolve("u" + ++n));
}
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_label($scope, input.label);
};
const $input_name__closure = /*@__PURE__*/ _closure($await_content__input_name);
const $input_name = /*@__PURE__*/ _const("input_name", $input_name__closure);
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
