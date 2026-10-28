// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = ($_) => {};
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
const $input_uid = ($scope, input_uid) => $uid($scope, input_uid || _id($scope, "IdFallback:uid"));
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input_heading$1 = ($scope, input_heading) => _attr($scope["#input/2"], "aria-describedby", input_heading);
const $input$1 = ($scope, input) => {
	$input_uid($scope, input.uid);
	$input_name($scope, input.name);
	$input_heading$1($scope, input.heading);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<h1>Fields</h1><label>second</label><input><!><label>local</label><input><button>toggle</button>";
const $walks = " b b b%b b b b";
const $for_content__heading = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_heading#0:11/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "heading", /*@__PURE__*/ _for_closure("#text/3", ($scope) => $input_heading$1($scope["#childScope/0"], $scope._.heading))));
const $for_content__setup = ($scope) => {
	$for_content__heading._($scope);
	$input_name($scope["#childScope/0"], $scope["#LoopKey"]);
};
const $for_content__item_uid = ($scope, item_uid) => $input_uid($scope["#childScope/0"], item_uid);
const $for_content__$params = ($scope, $params2) => $for_content__item_uid($scope, $params2[0]?.uid);
const $heading = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "heading", ($scope) => {
	$for_content__heading($scope);
	_attr($scope["#h1/0"], "id", $scope.heading);
}, $for_content__heading);
const $input_heading = ($scope, input_heading) => $heading($scope, input_heading || _id($scope, "IdFallback:heading"));
const $second = ($scope, second) => {
	_attr($scope["#label/1"], "for", second);
	_attr($scope["#input/2"], "id", second);
};
const $localId = ($scope, localId) => {
	_attr($scope["#label/4"], "for", localId);
	_attr($scope["#input/5"], "id", localId);
};
const $local = _let("local/13", ($scope) => $localId($scope, $scope.local || _id($scope, "IdFallback:localId")));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/6"], "click", function() {
	$local($scope, $scope.local ? "" : "given");
}));
function $setup($scope) {
	$local($scope, "given");
	$setup__script($scope);
	$second($scope, _id($scope));
}
const $for = /*@__PURE__*/ _for_of("#text/3", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "key"]);
const $input = ($scope, input) => {
	$input_heading($scope, input.heading);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
