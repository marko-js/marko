// page.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const ITEMS = ["a", "b"];
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<p>last</p>");
const $for_content__m = ($scope, m) => {
	$for_content__if($scope, m === "b" ? 0 : 1);
	_text($scope["#text/0"], m);
};
const $for_content__$params = ($scope, $params2) => $for_content__m($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/0", "<span> </span><!><!>", "D l%", 0, $for_content__$params);
function $setup$1($scope) {
	$for($scope, [ITEMS]);
}
var page_default = /*@__PURE__*/ _template("__tests__/page.marko", $template$1, "b%c", $setup$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
