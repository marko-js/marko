// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__x = _resumed["__tests__/template.marko_1_x#0:5/patch"] = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_x#0:5/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _attr_class($scope["#p/0"], $scope._.x)));
const $if_content__setup = $if_content__x;
const $x = /*@__PURE__*/ _let("x/5", $if_content__x);
const $input_v = $x;
const $if = /*@__PURE__*/ _if("#text/0", "<p>t</p>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
