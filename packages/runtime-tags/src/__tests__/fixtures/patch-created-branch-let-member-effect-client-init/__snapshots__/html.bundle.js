// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b3: "b3 !; ;<div></div>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_data = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let value = input.data;
			_html(`<div></div>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b1");
			_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "vb2", { b: value?.b }, 1);
			_scope($scope1_id, {
				c: value?.b,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b3"], $scope0_reason, 0);
	$fg__input_data && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b1", "e");
	_scope($scope0_id, { e: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.data }) || $fg__input_data && $ui__input_show && _patch_write($scope0_id, "xe", input.data, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["c>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&b`)("b%c")};${((_w0) => `<button class=inc> </button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(8 | _updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	child_default({
		data: { b: count },
		show: input.show
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: count,
		c: _existing_scope($childScope)
	});
}, 1);
