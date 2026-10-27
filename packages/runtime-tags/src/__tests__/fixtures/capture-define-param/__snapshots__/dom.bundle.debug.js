// tags/label.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $get__script = _script("__tests__/tags/label.marko_0_get#3", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.get();
	console.log("run", $scope.get());
});
const $get$1 = /*@__PURE__*/ _const("get", $get__script);
const $input$1 = ($scope, input) => $get$1($scope, input.get);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$1, " b", 0, $input$1);

// template.marko
const $Row_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $Row_content__template = $template$1;
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks);
const $setup = ($_) => {};
const $Row_content__text = /*@__PURE__*/ _const("text", ($scope) => $get$1($scope["#childScope/0"], $get($scope)));
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__text($scope, $temp.text);
const $input_v = ($scope, input_v) => $Row_content__text($scope["#childScope/0"], input_v);
const $input = ($scope, input) => $input_v($scope, input.v);
const $get = ($scope) => function() {
	return $scope.text;
};
_resumed["__tests__/template.marko_1/get"] = $get;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
