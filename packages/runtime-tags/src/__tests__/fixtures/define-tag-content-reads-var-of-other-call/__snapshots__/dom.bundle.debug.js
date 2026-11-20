// template.marko
const $Child_content__walks = " b%c";
const $Child_content__template = "<button>t</button><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($Child_content__template, $Child_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&b`)($Child_content__walks, $Child_content__walks);
const $Child_content2__v = /*@__PURE__*/ _closure_get("v/4", ($scope) => _text($scope["#text/0"], $scope._.v), 0, "__tests__/template.marko_3_v#0:3/subscribe");
const $Child_content2__setup = $Child_content2__v;
const $Child_content2 = _content_resume("__tests__/template.marko_3*content", "<em> </em>", "D ", $Child_content2__setup);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $Child_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $Child_content__x = /*@__PURE__*/ _let("x/5", ($scope) => {
	_return($scope, $scope.x ? "on" : "off");
	$Child_content__if($scope, $scope.x ? 0 : 1);
});
const $Child_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Child_content__x($scope, !$scope.x);
}));
const $Child_content__setup = ($scope) => {
	$Child_content__x($scope, false);
	$Child_content__setup__script($scope);
};
const $Child_content__tag_input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => $Child_content__tag_input_content($scope, input.content);
const $v__closure = /*@__PURE__*/ _closure($Child_content2__v);
const $v = _var_resume("__tests__/template.marko_0_v#3/var", /*@__PURE__*/ _const("v", $v__closure));
function $setup($scope) {
	$Child_content__setup($scope["#childScope/0"]);
	$Child_content__tag_input_content($scope["#childScope/0"]);
	$Child_content__setup($scope["#childScope/2"]);
	$Child_content__tag_input_content($scope["#childScope/2"], $Child_content2($scope));
	_var($scope, "#childScope/0", $v);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
