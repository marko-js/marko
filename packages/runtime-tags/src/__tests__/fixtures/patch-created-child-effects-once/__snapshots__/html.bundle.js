// tags/child.marko
const $template = "<span><!> <!></span>";
const $walks = "D%c%l";
const $setup = [[], ["b2"]];
_shells({ b: "b !b2;D%c%;<span><!> <!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0), $fg__input_count = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)} ${_text_mark($scope0_id, "b", input.count, 2, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "b0", 1, $fg__input_count, "f");
	_script($scope0_id, "b1", 1, $fg__input_label, "e");
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		e: input.label,
		f: input.count
	}) || ($fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0)), $fg__input_count && _patch_write($scope0_id, "xf", input.count, !_server_guard($scope0_reason, 1)));
});

// template.marko
_shells({
	a: "a !a2; D l%;<button> </button><!><!>",
	a1: `a1${_shell_marker([["a4"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_msg = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(8 | _updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({
				label: input.msg,
				count
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_script($scope0_id, "a2");
	$fg__input_msg && $cg__input_show && _patch_render($scope0_id, "a0", "g");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.msg,
		h: count
	}) || $fg__input_msg && $cg__input_show && _patch_write($scope0_id, "xg", input.msg, !_server_guard($scope0_reason, 1));
}, 1);
