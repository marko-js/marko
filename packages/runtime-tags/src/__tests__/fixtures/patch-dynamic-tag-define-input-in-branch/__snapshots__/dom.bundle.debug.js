// template.marko
const $template = "<main></main>";
const $walks = " b";
const $Other_content__record_name = ($scope, record_name) => _text($scope["#text/0"], record_name);
const $Other_content__$params = ($scope, $params3) => $Other_content__record_name($scope, $params3[0].record?.name);
const $Other_content = _content("__tests__/template.marko_3*content", "<h5> </h5>", "D ", 0, $Other_content__$params);
const $Card_content__record_name = ($scope, record_name) => _text($scope["#text/0"], record_name);
const $Card_content__$params = ($scope, $params2) => $Card_content__record_name($scope, $params2[0].record?.name);
const $Card_content = _content("__tests__/template.marko_2*content", "<h4> </h4>", "D ", 0, $Card_content__$params);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_useA__OR__input_record__OR__Card__OR__Other = /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill1", "input_record", /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0", "input_useA", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_useA#0:4_input_record#0:5_Card#0:6_Other#0:7/init", 1, ($scope) => $if_content__dynamicTag($scope, $scope._.input_useA ? $scope._.Card : $scope._.Other, ($_) => ({ record: $scope._.input_record })), 3), "#main/0", 0), "#main/0", 0);
const $if_content__input_useA = /*@__PURE__*/ _if_closure("#main/0", 0, $if_content__input_useA__OR__input_record__OR__Card__OR__Other);
const $if_content__setup = ($scope) => {
	$if_content__input_useA._($scope);
	$if_content__input_record._($scope);
	$if_content__Card._($scope);
	$if_content__Other._($scope);
};
const $if_content__input_record = /*@__PURE__*/ _if_closure("#main/0", 0, $if_content__input_useA__OR__input_record__OR__Card__OR__Other);
const $if_content__Card = /*@__PURE__*/ _if_closure("#main/0", 0, $if_content__input_useA__OR__input_record__OR__Card__OR__Other);
const $if_content__Other = /*@__PURE__*/ _if_closure("#main/0", 0, $if_content__input_useA__OR__input_record__OR__Card__OR__Other);
const $Card = /*@__PURE__*/ _const("Card");
const $Other = /*@__PURE__*/ _const("Other");
function $setup($scope) {
	$Card($scope, { content: $Card_content($scope) });
	$Other($scope, { content: $Other_content($scope) });
}
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_useA($scope, input.useA);
	$input_record($scope, input.record);
};
const $input_useA = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_useA", $if_content__input_useA);
const $input_record = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_record", $if_content__input_record);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
