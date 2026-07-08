// counter.js
let n = 0;
function next() {
	return "p" + ++n;
}

// provider.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
function $setup$2($scope) {
	$scope["#ContextValue"] = next();
	_context_branch($scope, "__tests__/provider.marko");
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var provider_default = /*@__PURE__*/ _template("__tests__/provider.marko", $template$2, "b%c", $setup$2, $input);

// consumer.marko
const $template$1 = "<!><li> </li>";
const $walks$1 = "bD l";
const $label = ($scope, label) => _text($scope["#text/0"], label);
function $setup$1($scope) {
	$label($scope, _context_read($scope, "label", "__tests__/provider.marko", "./provider.marko"));
}
var consumer_default = /*@__PURE__*/ _template("__tests__/consumer.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)("b%c");
const $Provider_content3__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $Provider_content3 = /*@__PURE__*/ _content("__tests__/template.marko_4_content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $Provider_content3__setup);
const $for_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $Provider_content3($scope));
};
const $Provider_content2__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $Provider_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2_content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $Provider_content2__setup);
const $Provider_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$setup$2($scope["#childScope/1"]);
	$input_content_direct($scope["#childScope/1"], $Provider_content2($scope));
	$setup$1($scope["#childScope/2"]);
};
const $Provider_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!>`)($template$1, $template$2, $template$1), /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&b`)($walks$1, "b%c", $walks$1), $Provider_content__setup);
const $for = /*@__PURE__*/ _for_of("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $for_content__setup);
function $setup($scope) {
	$setup$2($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $Provider_content($scope));
	$for($scope, [[
		"x",
		"y",
		"z"
	], (x) => x]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
