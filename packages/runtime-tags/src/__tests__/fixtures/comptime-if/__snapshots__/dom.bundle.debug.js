// template.marko
const $template = "<table><tbody></tbody><tfoot><tr><td colspan=2>end of table</td></tr></tfoot></table>";
const $walks = "D l";
const $setup = () => {};
const cols = ["name", "price"];
const $for_content2__row__OR__col = /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope._.row[$scope.col]));
const $for_content2__row = /*@__PURE__*/ _for_closure("#tr/0", $for_content2__row__OR__col);
const $for_content2__setup = $for_content2__row;
const $for_content2__col = /*@__PURE__*/ _const("col", $for_content2__row__OR__col);
const $for_content2__$params = ($scope, $params3) => $for_content2__col($scope, $params3[0]);
const $for_content__for = /*@__PURE__*/ _for_of("#tr/0", "<td> </td>", "D l", $for_content2__setup, $for_content2__$params);
const $for_content__setup = ($scope) => $for_content__for($scope, [cols]);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $for_content__row = /*@__PURE__*/ _const("row", $for_content2__row);
const $for = /*@__PURE__*/ _for_of("#tbody/0", "<tr></tr>", " b", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup, $input);
