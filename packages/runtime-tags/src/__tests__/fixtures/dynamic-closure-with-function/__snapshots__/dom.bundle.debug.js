// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content2__bar__OR__foo = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._._.bar($scope._.foo)));
const $if_content2__bar = /*@__PURE__*/ _closure_get("bar", $if_content2__bar__OR__foo, ($scope) => $scope._._);
const $if_content2__setup = ($scope) => {
	$if_content2__bar($scope);
	$if_content2__foo._($scope);
};
const $if_content2__foo = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content2__bar__OR__foo);
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<div> </div>", "D l", $if_content2__setup);
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_b ? 0 : 1));
const $if_content__foo = /*@__PURE__*/ _const("foo");
const $if_content__setup = ($scope) => {
	$if_content__input_b._($scope);
	$if_content__foo($scope, "foo");
};
const $bar2__closure = /*@__PURE__*/ _closure($if_content2__bar);
const $bar2 = /*@__PURE__*/ _const("bar", $bar2__closure);
const $input_c = /*@__PURE__*/ _const("input_c", ($scope) => $bar2($scope, $bar($scope)));
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%c", $if_content__setup);
const $input_a = ($scope, input_a) => $if($scope, input_a ? 0 : 1);
const $input = ($scope, input) => {
	$input_c($scope, input.c);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_b = /*@__PURE__*/ _const("input_b", $if_content__input_b);
function $bar($scope) {
	return function(test) {
		return $scope.input_c + test;
	};
}
_resume("__tests__/template.marko_0/bar", $bar);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
