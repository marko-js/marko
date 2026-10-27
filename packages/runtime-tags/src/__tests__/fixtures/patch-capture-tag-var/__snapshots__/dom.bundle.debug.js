// tags/pick.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = ($_) => {};
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _return($scope, $scope.input_value + "!"));
const $input$2 = ($scope, input) => $input_value($scope, input.value);
var pick_default = /*@__PURE__*/ _template("__tests__/tags/pick.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$2));

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
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&`)("", " b");
const $picked = _var_resume("__tests__/template.marko_0_picked#6/var", /*@__PURE__*/ _const("picked", ($scope) => $get$1($scope["#childScope/2"], $get($scope))));
const $input_v = ($scope, input_v) => $input_value($scope["#childScope/0"], input_v);
const $input = ($scope, input) => $input_v($scope, input.v);
function $setup($scope) {
	_var($scope, "#childScope/0", $picked);
}
const $get = ($scope) => function() {
	return $scope.picked;
};
_bind_resume("__tests__/template.marko_0/get picked", $get);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
