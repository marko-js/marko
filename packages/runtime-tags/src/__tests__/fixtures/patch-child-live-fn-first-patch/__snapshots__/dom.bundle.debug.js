// tags/reader.marko
const $template$1 = "<button class=call>call</button><pre></pre>";
const $walks$1 = " b b";
const $setup$1 = ($_) => {};
const $input_fn__script = _script("__tests__/tags/reader.marko_0_input_fn#4", ($scope) => {
	{
		const el = _el_read($scope["#pre/1"]);
		el.textContent += el.fn === $scope.input_fn ? "same;" : "new;";
		el.fn = _el_read($scope["#button/0"]).onclick = $scope.input_fn;
	}
});
const $input_fn = /*@__PURE__*/ _const("input_fn", $input_fn__script);
const $input$1 = ($scope, input) => $input_fn($scope, input.fn);
var reader_default = /*@__PURE__*/ _template("__tests__/tags/reader.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<output id=out></output>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = ($_) => {};
const $fn2 = ($scope, fn) => $input_fn($scope["#childScope/0"], fn);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $fn2($scope, $fn($scope)));
const $input = ($scope, input) => $input_title($scope, input.title);
const $fn = ($scope) => () => {
	document.getElementById("out").textContent = "v:" + $scope.input_title;
};
_bind_resume("__tests__/template.marko_0/fn input_title", $fn);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
