// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $xabi_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "t");
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $xabi_content);
const $if_content__x = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_x#0:5/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.x === "a" ? "b" : "i")));
const $if_content__setup = $if_content__x;
const $x = _let("x/5", $if_content__x);
const $input_v = $x;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
