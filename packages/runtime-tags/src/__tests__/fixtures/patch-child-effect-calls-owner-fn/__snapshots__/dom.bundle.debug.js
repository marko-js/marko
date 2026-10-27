// tags/label.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $get__script = _script("__tests__/tags/label.marko_0_get#3", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.get();
	console.log("run", $scope.get());
});
const $get = /*@__PURE__*/ _const("get", $get__script);
const $input$1 = ($scope, input) => $get($scope, input.get);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = ($_) => {};
const $getTitle2 = ($scope, getTitle) => $get($scope["#childScope/0"], getTitle);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $getTitle2($scope, $getTitle($scope)));
const $input = ($scope, input) => $input_title($scope, input.title);
const $getTitle = ($scope) => () => $scope.input_title;
_bind_resume("__tests__/template.marko_0/getTitle input_title", $getTitle);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
