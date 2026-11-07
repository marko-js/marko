// tags/card.marko
const $template = "<p> </p>";
const $setup = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const f = input.opts.list[0];
	_html(`<p>${_text_mark($scope0_id, "a", f(), 1, _client_guard($scope0_reason, 0) << 1, 0, 1)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $fg__input_items = _filled_guard($scope0_reason, 5), $fg__input_label = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ opts: _patch_live($childScope, { list: [...input.items, () => "f:" + input.label] }, $scope1_id, ">e >f") });
			_patch_child_end();
			_patch_render($scope1_id, "a0", [_filled_guard($scope0_reason, 5) && ">e", _filled_guard($scope0_reason, 6) && ">f"], $scope0_reason, 2);
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 4);
	$fg__input_items && $cg__input_show && _patch_render($scope0_id, "a2", "e");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a3", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.items,
		f: _write_if($scope0_reason, 0) && input.label
	}) || ($fg__input_items && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.items, !_server_guard($scope0_reason, 5)), $fg__input_label && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 6)));
}, 1);
