// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2,<p>shown</p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>shown</p>");
			_script($scope1_id, "b0", 0, _filled_guard($scope0_reason, 1), ">e");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 0);
	_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_init_entry($scope0_id, "b1", ["e"]);
	_scope($scope0_id, { e: input.count }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.count, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["c>", $setup$1], ["d>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)("b%c", "b%c")};${((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	child_default({
		show: input.show,
		count
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "d", 1);
	child_default({
		show: input.show,
		count: input.count
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: count,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	});
}, 1);
