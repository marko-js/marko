// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_n = ($scope, input_n) => $input_n$1($scope["#childScope/0"], input_n);
const $input_more = ($scope, input_more) => $input_more$1($scope["#childScope/0"], input_more);
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_more($scope, input.more);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/outer.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__n = /*@__PURE__*/ _init_resume("__tests__/tags/outer.marko_1_n#0:5/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.n)));
const $if_content__setup = $if_content__n;
const $n = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _let("n/5", $if_content__n));
const $input_n = $n;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_more = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_more($scope, input.more);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, "b%c", 0, $input);
