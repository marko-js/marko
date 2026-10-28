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
const $template = "<output id=out></output><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_alt__OR__fn = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "fn", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_alt", /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_alt || reader_default, ($_) => ({ fn: $scope.fn })))));
const $fn2 = /*@__PURE__*/ _const("fn", $input_alt__OR__fn);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $fn2($scope, $fn($scope)));
const $input_alt = /*@__PURE__*/ _const("input_alt", $input_alt__OR__fn);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_alt($scope, input.alt);
};
const $fn = ($scope) => () => {
	document.getElementById("out").textContent = "v:" + $scope.input_title;
};
_bind_resume("__tests__/template.marko_0/fn input_title", $fn);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
