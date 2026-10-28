// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content; D ;<a> </a>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await; D ;<a> </a>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<a${_attr("href", x, $scope1_id, "PatchAttr:#a/0 href", $scope0_reason, 0)}${_attr_class(x, $scope1_id, "PatchAttr:#a/0 class", $scope0_reason, 0)}${_attr("data-x", x, $scope1_id, "PatchAttr:#a/0 data-x", $scope0_reason, 0)}>${_text_resume($scope1_id, "#text/1", x, 1, $scope0_reason, 0)}</a>${_el_resume($scope1_id, "#a/0", _mask_group($scope0_reason, 0))}`);
		_scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 0) && 2, 1);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	show_await_default({ promise: p });
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
