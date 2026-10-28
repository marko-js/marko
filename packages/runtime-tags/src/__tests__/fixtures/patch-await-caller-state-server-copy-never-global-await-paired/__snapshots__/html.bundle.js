// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<p> </p>",
	b1: "b1;D ;<p> </p>",
	b2: "b2;b%;<!><!><!>",
	b3: "b3;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", Promise.resolve(x + ":" + $global$1.flag), (y) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", y, 1, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
			_scope($scope2_id, {});
		}, 1, "b0", _unfilled_if((2 | _mask_group($scope0_reason, 0)) << 1, 0) && 2, 1);
		_fill_global_subscribe("b4", $scope1_id);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { c: _unfilled_if($scope0_reason, 0) && x });
	}, 1, "b2", _unfilled_if($scope0_reason, 0) && 3, 1);
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
