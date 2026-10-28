// tags/brand.marko
const $template$2 = "<span> </span><b> </b>";
const $walks$2 = "D lD l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/brand.marko": "__tests__/tags/brand.marko;D lD ;<span> </span><b> </b>" });
var brand_default = _template("__tests__/tags/brand.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<span>${_text_resume($scope0_id, "#text/0", $global$1.brand, 1, 4, 0)}</span><b>${_text_resume($scope0_id, "#text/1", input.label, 1, $scope0_reason, 0)}</b>`);
	_fill_global_subscribe("__tests__/tags/brand.marko_0_$global_brand#5", $scope0_id);
	_scope($scope0_id, {}, "__tests__/tags/brand.marko", 0);
});

// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_1*content": /*@__PURE__*/ ((_w0) => `__tests__/tags/show-await.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2),
	"__tests__/tags/show-await.marko_0_#text#0/await": /*@__PURE__*/ ((_w0) => `__tests__/tags/show-await.marko_0_#text#0/await${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2]))};${((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2),
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		brand_default({ label: x });
		_patch_child_end();
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/show-await.marko", "1:2");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 0), 1);
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
