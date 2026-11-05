// template.marko
const $E_content__walks = "b%c";
const $E_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($E_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($E_content__walks);
const $if_content__depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $E_content__tag_input_depth($scope["#childScope/0"], $scope._.depth - 1));
const $if_content__setup = $if_content__depth;
const $E_content__if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($E_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($E_content__walks), $if_content__setup);
const $E_content__tag_input_depth = /*@__PURE__*/ _const("depth", ($scope) => {
	$E_content__if($scope, $scope.depth > 0 ? 0 : 1);
	$if_content__depth($scope);
});
const $E_content__$params = ($scope, $params2) => $E_content__$temp($scope, $params2[0]);
const $E_content__$temp = ($scope, $temp) => $E_content__tag_input_depth($scope, $temp.depth);
function $setup($scope) {
	$E_content__tag_input_depth($scope["#childScope/0"], 2);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
