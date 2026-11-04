// tags/make.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = ($_) => {};
const $input_title$1 = /*@__PURE__*/ _const("input_title", ($scope) => _return($scope, $_return($scope)));
const $input$2 = ($scope, input) => $input_title$1($scope, input.title);
const $_return = ($scope) => () => {
	document.getElementById("out").textContent = "v:" + $scope.input_title;
};
_bind_resume("__tests__/tags/make.marko_0/_return input_title", $_return);
var make_default = /*@__PURE__*/ _template("__tests__/tags/make.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$2));

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
const $template = /*@__PURE__*/ ((_w0, _w1) => `<output id=out></output>${_w0}${_w1}<button class=other>o</button>`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&b/${_w1}& b`)("", $walks$1);
const $fn = _var_resume("__tests__/template.marko_0_fn#7/var", ($scope, fn) => $input_fn($scope["#childScope/2"], fn));
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	document.getElementById("out").textContent = "o";
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $fn);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
