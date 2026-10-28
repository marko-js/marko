// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_data($scope["#childScope/0"], {
	a: "x",
	b: $scope._.input_label,
	c: { d: $scope._.input_label },
	items: [$scope._.input_label, "y"]
}))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/inner.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $input__script = _script("__tests__/tags/inner.marko_0_input#2", ($scope) => _el_read($scope["#div/0"]).textContent = $scope.input.fn());
const $input$1 = /*@__PURE__*/ _const("input", $input__script);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$1, " b", 0, $input$1);

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=set>set</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)(" b");
const $value = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _let("value/5", ($scope) => $value_b($scope, $scope.value?.b)));
const $fn2 = ($scope, fn) => $input$1($scope["#childScope/1"], { fn });
const $value_b = /*@__PURE__*/ _const("value_b", ($scope) => $fn2($scope, $fn($scope)));
const $input_data = $value;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_data($scope, input.data);
const $fn = ($scope) => function() {
	return $scope.value_b;
};
_resumed["__tests__/tags/outer.marko_0/fn"] = $fn;
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
