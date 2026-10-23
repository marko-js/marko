// template.marko
const $template = "<div>ready</div>";
const $walks = "b";
const $format_getter = _hoist_resume("__tests__/template.marko_0_format#1/hoist", "format");
const $show2__script = _script("__tests__/template.marko_0_show#0", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.show();
} }));
const $show2 = /*@__PURE__*/ _const("show", $show2__script);
const $format2 = /*@__PURE__*/ _const("format", ($scope) => _assert_hoist($scope.format));
function $setup($scope) {
	$show2($scope, $show($scope));
	$format2($scope, $format);
}
const $show = ($scope) => () => {
	console.log("show", typeof $format_getter($scope));
};
function $format() {
	return "formatted";
}
_resumed["__tests__/template.marko_0/show"] = $show;
_resumed["__tests__/template.marko_0/format"] = $format;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b", $setup);
