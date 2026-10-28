// tags/brand.marko
const $template$1 = "<span> </span>";
const $setup$2 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var brand_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<span>${_text_resume($scope0_id, "a", $global$1.brand, 1, 4, 0)}</span>`);
	_fill_global_subscribe("b0", $scope0_id);
	_scope($scope0_id, {});
});

// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c0: /*@__PURE__*/ (() => `c0${_shell_marker(_shell_setup([[], []], ["b>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D l")};${/*@__PURE__*/ ((_w0) => `<div><p> </p>${_w0}</div>`)($template$1)}`)(),
	c1: /*@__PURE__*/ (() => `c1${_shell_marker(_shell_setup([[], []], ["b>", $setup$2]))};${((_w0) => `E l/${_w0}&l`)("D l")};${((_w0) => `<div><p> </p>${_w0}</div>`)($template$1)}`)(),
	c: "c;b%;<!><!><!>"
});
var show_await_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<div><p>${_text_resume($scope1_id, "a", x, 1, $scope0_reason, 0)}</p>`);
		const $childScope = _peek_scope_id($scope1_id, "b", 0);
		brand_default({});
		_patch_child_end();
		_html("</div>");
		_scope($scope1_id, { b: _existing_scope($childScope) });
	}, 1, "c0", _unfilled_if($scope0_reason, 0), 1);
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	show_await_default({ promise: p });
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
