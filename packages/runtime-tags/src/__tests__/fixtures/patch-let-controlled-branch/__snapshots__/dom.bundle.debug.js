// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__x = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_x#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "x", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.x))));
const $if_content__setup = $if_content__x;
const $if = /*@__PURE__*/ _if("#text/0", "<p>yes <!></p>", "Db%", $if_content__setup);
const $x = /*@__PURE__*/ _fill_let_change("__tests__/template.marko_fill0", "x/4", ($scope) => {
	$if_content__x($scope);
	$if($scope, $scope.x ? 0 : 1);
}, $if_content__x);
const $input_v = ($scope, input_v) => $x($scope, input_v, $valueChange);
const $input = ($scope, input) => $input_v($scope, input.v);
function $valueChange(v) {}
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
