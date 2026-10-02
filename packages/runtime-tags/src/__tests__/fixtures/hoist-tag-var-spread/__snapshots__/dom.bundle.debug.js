// tags/child.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_a$1 = ($scope, input_a) => _text($scope["#text/0"], typeof input_a);
const $input$1 = ($scope, input) => $input_a$1($scope, input.a);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!><!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b%b/${_w0}&`)("D l");
const $if_content3__setup = ($scope) => {
	$input_a$1($scope["#childScope/0"], $x_getter($scope._._).a);
};
const $x_getter = _hoist_resume("__tests__/template.marko_0_x#2:0/hoist", "x", "BranchScopes:#text/0");
const $if_content2__x = /*@__PURE__*/ _const("x", ($scope) => _assert_hoist($scope.x));
const $if_content2__setup = ($scope) => $if_content2__x($scope, $x);
const $if_content__if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content3__setup);
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__if($scope, $scope._.input_b ? 0 : 1));
const $if_content__setup = $if_content__input_b;
const $y_getter = _hoist_resume("__tests__/template.marko_0_y#7/hoist", "y");
const $if = /*@__PURE__*/ _if("#text/0", 0, 0, $if_content2__setup);
const $if2 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $input_a = ($scope, input_a) => {
	$if($scope, input_a ? 0 : 1);
	$if2($scope, !input_a ? 0 : 1);
};
const $y2 = /*@__PURE__*/ _const("y", ($scope) => _assert_hoist($scope.y));
function $setup($scope) {
	$input_a$1($scope["#childScope/2"], $y_getter($scope).a);
	$y2($scope, $y);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_b = /*@__PURE__*/ _const("input_b", $if_content__input_b);
function $x() {
	return 1;
}
function $y() {
	return 2;
}
_resumed["__tests__/template.marko_2/x"] = $x;
_resumed["__tests__/template.marko_0/y"] = $y;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
