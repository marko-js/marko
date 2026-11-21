// template.marko
const $template = "<!><!><!><!><!>";
const $walks = "b%b%b%c";
function getTag() {}
const $Param_getter = _hoist_resume("__tests__/template.marko_0_Param#8/hoist", "Param");
const $Unknown_getter = _hoist_resume("__tests__/template.marko_0_Unknown#9/hoist", "Unknown");
const $Fn_getter = _hoist_resume("__tests__/template.marko_0_Fn#10/hoist", "Fn");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Unknown = /*@__PURE__*/ _const("Unknown", ($scope) => _assert_hoist($scope.Unknown));
const $Fn2 = /*@__PURE__*/ _const("Fn", ($scope) => _assert_hoist($scope.Fn));
function $setup($scope) {
	$dynamicTag($scope, $Param_getter($scope));
	$dynamicTag2($scope, $Unknown_getter($scope));
	$dynamicTag3($scope, $Fn_getter($scope));
	$Unknown($scope, getTag());
	$Fn2($scope, $Fn);
}
const $Param = /*@__PURE__*/ _const("Param", ($scope) => _assert_hoist($scope.Param));
const $input_show__OR__input_renderer = /*@__PURE__*/ _or(7, ($scope) => $Param($scope, $scope.input_show && $scope.input_renderer));
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__input_renderer);
const $input_renderer = /*@__PURE__*/ _const("input_renderer", $input_show__OR__input_renderer);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_renderer($scope, input.renderer);
};
function $Fn() {}
_resumed["__tests__/template.marko_0/Fn"] = $Fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
