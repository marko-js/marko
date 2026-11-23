// template.marko
const $template = "<div></div><input type=checkbox>";
const $walks = " b b";
function $setup($scope) {
	$signalReset($scope, 0);
	$signalReset($scope, 1);
	_attr_class_item($scope["#div/0"], "live", $signal($scope, 0));
	_attr_input_checked_default($scope, "#input/1", $signal($scope, 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
