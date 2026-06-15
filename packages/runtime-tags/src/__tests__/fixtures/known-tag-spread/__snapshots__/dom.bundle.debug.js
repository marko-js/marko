// tags/child-a/index.marko
const $template$2 = "<div><!> <!> <!></div>";
const $walks$2 = "D%c%c%l";
const $setup$2 = () => {};
const $input_a$1 = ($scope, input_a) => _text($scope["#text/0"], input_a);
const $input_b$1 = ($scope, input_b) => _text($scope["#text/1"], input_b);
const $input_c = ($scope, input_c) => _text($scope["#text/2"], input_c);
const $input$2 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_b$1($scope, input.b);
	$input_c($scope, input.c);
};
var child_a_default = /* @__PURE__ */ _template("__tests__/tags/child-a/index.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/child-c/index.marko
const $template$1 = "<div><!> <!></div>";
const $walks$1 = "D%c%l";
const $setup$1 = () => {};
const $input_a = ($scope, input_a) => _text($scope["#text/0"], input_a);
const $input_b = ($scope, input_b) => _text($scope["#text/1"], input_b);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var child_c_default = /* @__PURE__ */ _template("__tests__/tags/child-c/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1, _w2) => `<button>inc <!></button>${_w0}${_w1}${_w2}`)($template$2, $template$2, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1, _w2) => ` Db%l/${_w0}&/${_w1}&/${_w2}&`)($walks$2, $walks$2, $walks$1);
const $extras__OR__n = /* @__PURE__ */ _or(10, ($scope) => {
	const $childa_input_spread = {
		a: $scope.n,
		...$scope.extras
	};
	$input_a$1($scope["#childScope/2"], $childa_input_spread.a);
	$input_b$1($scope["#childScope/2"], $childa_input_spread.b);
	$input_c($scope["#childScope/2"], $childa_input_spread.c);
});
const $extras = /* @__PURE__ */ _const("extras", ($scope) => {
	$extras_b($scope, $scope.extras.b);
	$extras_c($scope, $scope.extras.c);
	$extras__OR__n($scope);
});
const $extras_b = ($scope, extras_b) => $input_b$1($scope["#childScope/3"], extras_b);
const $extras_c = ($scope, extras_c) => $input_c($scope["#childScope/3"], extras_c);
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /* @__PURE__ */ _let("n/9", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$input_a$1($scope["#childScope/3"], $scope.n);
	$extras__OR__n($scope);
	$n__script($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/2"]);
	/* @__PURE__ */ $setup$2($scope["#childScope/3"]);
	/* @__PURE__ */ $setup$1($scope["#childScope/4"]);
	$extras($scope, {
		b: 2,
		c: 3
	});
	$n($scope, 1);
}
const $input_settings_a = ($scope, input_settings_a) => $input_a($scope["#childScope/4"], input_settings_a);
const $input_settings_b = ($scope, input_settings_b) => $input_b($scope["#childScope/4"], input_settings_b);
const $input = ($scope, input) => $input_settings($scope, input.settings);
const $input_settings = ($scope, input_settings) => {
	$input_settings_a($scope, input_settings?.a);
	$input_settings_b($scope, input_settings?.b);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
