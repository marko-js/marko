// template.marko
const $Child_content__walks = "D lD l", $Child_content__template = "<div> </div><div> </div>";
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($Child_content__template);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($Child_content__walks);
const $setup = () => {};
const $Child_content__a__script = _script("__tests__/template.marko_1_a", ($scope) => {
	if ($scope.input_a !== "a") throw new Error("did not serialize a");
});
const $Child_content__a = ($scope) => {
	_text($scope["#text/0"], $scope.input_a);
	$Child_content__a__script($scope);
};
const $Child_content__b = ($scope, b) => _text($scope["#text/1"], b);
const $Child_content__input_a__script = _script("__tests__/template.marko_1_input_a", ($scope) => {
	if ($scope.input_a !== "a") throw new Error("did not serialize input.a");
});
const $Child_content__input_a = /* @__PURE__ */ _const("input_a", ($scope) => {
	$Child_content__a($scope, $scope.input_a);
	$Child_content__input_a__script($scope);
});
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => {
	$Child_content__input_a($scope, input.a);
	$Child_content__b($scope, input.b);
};
const $input_a = ($scope, input_a) => $Child_content__input_a($scope["#childScope/0"], input_a);
const $input_b = ($scope, input_b) => $Child_content__b($scope["#childScope/0"], input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
