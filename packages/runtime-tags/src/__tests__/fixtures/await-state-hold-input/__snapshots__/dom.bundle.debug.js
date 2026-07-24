// template.marko
const $template = "<input id=field><span id=mirror> </span><!><!>";
const $walks = " bD l%c";
_enable_hold();
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/2", "<div id=awaited>awaited: <!></div>", "Db%l");
const $await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $text = /*@__PURE__*/ _let("text/3", ($scope) => {
	_attr_input_value($scope, "#input/0", $scope.text, $valueChange($scope));
	_text($scope["#text/1"], $scope.text);
	$await_promise($scope, resolveAfter($scope.text));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
function $setup($scope) {
	$await_content($scope);
	$text($scope, "");
	$setup__script($scope);
}
function $valueChange($scope) {
	return (_new_text) => {
		$text($scope, _new_text);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
