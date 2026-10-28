// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0; D ;<a> </a>",
	b1: "b1; D ;<a> </a>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<a${_attr("href", x, $scope1_id, "aa$href", $scope0_reason, 0)}${_attr_class(x, $scope1_id, "aa$class", $scope0_reason, 0)}${_attr("data-x", x, $scope1_id, "aa$data-x", $scope0_reason, 0)}>${_text_resume($scope1_id, "b", x, 1, $scope0_reason, 0)}</a>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 0))}`);
		_scope($scope1_id, {});
	}, 1, "b0", _unfilled_if($scope0_reason, 0) && 2, 1);
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
