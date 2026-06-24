// template.marko
const $template = "<details><summary></summary></details><span> </span>";
const $walks = " bD l";
const $open = /*@__PURE__*/ _let("open/2", ($scope) => {
	_attr_details_or_dialog_open($scope, "#details/0", $scope.open, $openChange($scope));
	_text($scope["#text/1"], String($scope.open));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_details_or_dialog_open_script($scope, "#details/0"));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
function $openChange($scope) {
	return (_new_open) => {
		$open($scope, _new_open);
	};
}
_resume("__tests__/template.marko_0/openChange", $openChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
