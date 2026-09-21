// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content4__input_html = /*@__PURE__*/ _closure_get("input_html", ($scope) => _html($scope, $scope._._._.input_html, "#text/0"), ($scope) => $scope._._._);
const $if_content4__setup = $if_content4__input_html;
const $if_content3__input_html = /*@__PURE__*/ _closure_get("input_html", ($scope) => {
	_html($scope, $scope._._._.input_html, "#text/0");
	_html($scope, $scope._._._.input_html, "#text/1");
}, ($scope) => $scope._._._);
const $if_content3__setup = $if_content3__input_html;
const $if_content2__if = /*@__PURE__*/ _if("#text/0", "<div> </div><div class=y> </div>", "D lD ", $if_content3__setup);
const $if_content2__if2 = /*@__PURE__*/ _if("#text/1", " ", " ", $if_content4__setup);
const $if_content2__input_html = /*@__PURE__*/ _closure_get("input_html", ($scope) => {
	$if_content2__if($scope, $scope._._.input_html ? 0 : 1);
	$if_content2__if2($scope, $scope._._.input_html ? 0 : 1);
}, ($scope) => $scope._._);
const $if_content2__setup = $if_content2__input_html;
const $if_content__if = /*@__PURE__*/ _if("#text/2", "<!><!><!><!>", "b%b%", $if_content2__setup);
const $if_content__input_show = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__if($scope, $scope._.input_show > 1 ? 0 : 1));
const $if_content__setup = ($scope) => {
	$if_content__input_show._($scope);
	$if_content__input_html._($scope);
};
const $if_content__input_html = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => {
	_html($scope, $scope._.input_html, "#text/0");
	_html($scope, $scope._.input_html, "#text/1");
});
const $if = /*@__PURE__*/ _if("#main/0", "<div> </div><div class=x> </div><!><!>", "D lD l%", $if_content__setup);
const $input_show = /*@__PURE__*/ _const("input_show", ($scope) => {
	$if_content__input_show($scope);
	$if($scope, $scope.input_show ? 0 : 1);
});
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_html($scope, input.html);
};
const $input_html__closure = /*@__PURE__*/ _closure($if_content2__input_html, $if_content3__input_html, $if_content4__input_html);
const $input_html = /*@__PURE__*/ _const("input_html", ($scope) => {
	$if_content__input_html($scope);
	$input_html__closure($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
