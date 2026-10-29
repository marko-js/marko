// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<p> </p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Body_content__setup($scope["#childScope/0"]);
};
const $Body_content__input_w = /*@__PURE__*/ _closure_get("input_w/6", ($scope) => _text($scope["#text/0"], $scope._.input_w), 0, "__tests__/template.marko_1_input_w#0:4/subscribe");
const $Body_content__setup = $Body_content__input_w;
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $x = /*@__PURE__*/ _let("x/5", ($scope) => $await_promise($scope, Promise.resolve($scope.x)));
const $input_v = $x;
const $setup = $await_content;
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($Body_content__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
