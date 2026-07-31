// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = () => {};
const $else_content__input_summary = /*@__PURE__*/ _closure_get("input_summary", ($scope) => _text($scope["#text/0"], $scope._._.input_summary), ($scope) => $scope._._);
const $else_content__setup = $else_content__input_summary;
const $if_content2__input_text = /*@__PURE__*/ _closure_get("input_text", ($scope) => _text($scope["#text/0"], $scope._._.input_text), ($scope) => $scope._._);
const $if_content2__setup = $if_content2__input_text;
const $if_content__input_kind = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _attr($scope["#section/0"], "title", $scope._.input_kind));
const $if_content__setup = ($scope) => {
	$if_content__input_kind._($scope);
	$if_content__input_detail._($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#section/0", "<p> </p>", "D ", $if_content2__setup, "<em> </em>", "D ", $else_content__setup);
const $if_content__input_detail = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => $if_content__if($scope, $scope._.input_detail ? 0 : 1));
const $if = /*@__PURE__*/ _if("#div/0", "<section></section>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_kind($scope, input.kind);
	$input_detail($scope, input.detail);
	$input_text($scope, input.text);
	$input_summary($scope, input.summary);
};
const $input_kind = /*@__PURE__*/ _const("input_kind", $if_content__input_kind);
const $input_detail = /*@__PURE__*/ _const("input_detail", $if_content__input_detail);
const $input_text__closure = /*@__PURE__*/ _closure($if_content2__input_text);
const $input_text = /*@__PURE__*/ _const("input_text", $input_text__closure);
const $input_summary__closure = /*@__PURE__*/ _closure($else_content__input_summary);
const $input_summary = /*@__PURE__*/ _const("input_summary", $input_summary__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
