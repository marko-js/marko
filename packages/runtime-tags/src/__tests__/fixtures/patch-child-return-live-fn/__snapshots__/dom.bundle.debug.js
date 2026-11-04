// tags/make.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_title$1 = /*@__PURE__*/ _const("input_title", ($scope) => _return($scope, $_return($scope)));
const $input$1 = ($scope, input) => $input_title$1($scope, input.title);
const $_return = ($scope) => () => {
	document.getElementById("out").textContent = "v:" + $scope.input_title;
};
_bind_resume("__tests__/tags/make.marko_0/_return input_title", $_return);
var make_default = /*@__PURE__*/ _template("__tests__/tags/make.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<output id=out></output>${_w0}<button class=call>call</button><pre></pre>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b b b`)("");
const $fn__script = _script("__tests__/template.marko_0_fn#7", ($scope) => {
	{
		const el = _el_read($scope["#pre/3"]);
		el.textContent += el.fn === $scope.fn ? "same;" : "new;";
		el.fn = _el_read($scope["#button/2"]).onclick = $scope.fn;
	}
});
const $fn = _var_resume("__tests__/template.marko_0_fn#7/var", /*@__PURE__*/ _const("fn", $fn__script));
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
function $setup($scope) {
	_var($scope, "#childScope/0", $fn);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
