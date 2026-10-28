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
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__uid = /*@__PURE__*/ _const("uid", ($scope) => $get$1($scope["#childScope/0"], $get($scope)));
const $if_content__input_v = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_v#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_v", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__uid($scope, $scope._.input_v || _id($scope, "IdFallback:uid")))));
const $if_content__setup = $if_content__input_v;
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
};
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_v", $if_content__input_v);
const $get = ($scope) => function() {
	return $scope.uid;
};
_bind_resume("__tests__/template.marko_1/get uid", $get);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
