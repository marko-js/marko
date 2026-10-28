// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content));
const $if_content__setup = $if_content__content;
const $Box_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $Box_content__show = ($scope, show) => $Box_content__if($scope, show ? 0 : 1);
const $Box_content__$params = ($scope, $params2) => {
	$Box_content__show($scope, $params2[0].show);
	$Box_content__content($scope, $params2[0].content);
};
const $Box_content__content = /*@__PURE__*/ _const("content", $if_content__content);
const $Box_content = _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", 0, $Box_content__$params);
const $Row_content = _content("__tests__/template.marko_1*content", "<b>R</b>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_show__OR__Row__OR__Tag = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.Box, ($_) => ({
	show: $scope.input_show,
	content: $scope.Row
})), 2);
const $Row = /*@__PURE__*/ _const("Row", $input_show__OR__Row__OR__Tag);
const $Box = /*@__PURE__*/ _const("Box", $input_show__OR__Row__OR__Tag);
function $setup($scope) {
	$Row($scope, { content: $Row_content($scope) });
	$Box($scope, { content: $Box_content($scope) });
}
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__Row__OR__Tag);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
