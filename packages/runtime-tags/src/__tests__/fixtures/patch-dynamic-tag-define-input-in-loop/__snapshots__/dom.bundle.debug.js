// template.marko
const $template = "<main></main>";
const $walks = " b";
const $Other_content__record_name = ($scope, record_name) => _text($scope["#text/0"], record_name);
const $Other_content__$params = ($scope, $params3) => $Other_content__record_name($scope, $params3[0].record?.name);
const $Other_content = _content("__tests__/template.marko_3*content", "<h5> </h5>", "D ", 0, $Other_content__$params);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__Card__OR__Other__OR__row_useA__OR__row_record = /*@__PURE__*/ _or(5, ($scope) => $for_content__dynamicTag($scope, $scope.row_useA ? $scope._.Card : $scope._.Other, ($_) => ({ record: $scope.row_record })), 3);
const $for_content__Card = /*@__PURE__*/ _for_closure("#main/0", $for_content__Card__OR__Other__OR__row_useA__OR__row_record);
const $for_content__setup = ($scope) => {
	$for_content__Card._($scope);
	$for_content__Other._($scope);
};
const $for_content__Other = /*@__PURE__*/ _for_closure("#main/0", $for_content__Card__OR__Other__OR__row_useA__OR__row_record);
const $for_content__row_useA = /*@__PURE__*/ _const("row_useA", $for_content__Card__OR__Other__OR__row_useA__OR__row_record);
const $for_content__row_record = /*@__PURE__*/ _const("row_record", $for_content__Card__OR__Other__OR__row_useA__OR__row_record);
const $for_content__$params = ($scope, $params4) => {
	$for_content__row_useA($scope, $params4[0]?.useA);
	$for_content__row_record($scope, $params4[0]?.record);
};
const $Card_content__record_name = ($scope, record_name) => _text($scope["#text/0"], record_name);
const $Card_content__$params = ($scope, $params2) => $Card_content__record_name($scope, $params2[0].record?.name);
const $Card_content = _content("__tests__/template.marko_1*content", "<h4> </h4>", "D ", 0, $Card_content__$params);
const $Card = /*@__PURE__*/ _const("Card");
const $Other = /*@__PURE__*/ _const("Other");
function $setup($scope) {
	$Card($scope, { content: $Card_content($scope) });
	$Other($scope, { content: $Other_content($scope) });
}
const $for = /*@__PURE__*/ _for_of("#main/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
