// tags/label.marko
const $template = "<span> </span>";
const $setup = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", typeof input.onHide, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("D l")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_v = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0), $fg__input_w = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let y = input.v;
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			label_default({ onHide: function() {
				y = "z";
			} });
			_patch_child_end();
			_html(`<p>${_text_mark($scope1_id, "b", y + input.w)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_patch_render($scope1_id, "a1", _filled_guard($scope0_reason, 2) && ">f");
			_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "va2", y, 1);
			_scope($scope1_id, {
				c: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	$fg__input_v && $cg__input_show && _patch_render($scope0_id, "a0", "e");
	$fg__input_w && $cg__input_show && _patch_render($scope0_id, "a4", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v,
		f: input.w
	}) || ($fg__input_v && $cg__input_show && _patch_write($scope0_id, "xe", input.v, !_server_guard($scope0_reason, 1)), $fg__input_w && _patch_write($scope0_id, "xf", input.w, !_server_guard($scope0_reason, 2)));
}, 1);
