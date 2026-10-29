// tags/outer.marko
const $template = "<button>plain</button><p> </p><p> </p><p> </p>";
const $walks = " bD lD lD l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; bD lD lD ;<button>plain</button><p> </p><p> </p><p> </p>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	const o = { f };
	_html(`<button>plain</button>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "b", [input.label].map(f).join())}</p><p>${_text_resume($scope0_id, "c", f(input.label))}</p><p>${_text_resume($scope0_id, "d", o.f(input.label))}</p>`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", f, 1);
	_scope($scope0_id, {
		h: input.label,
		i: $wi__input_label && f,
		k: $wi__input_label && o
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "[" + v + "]", "a0");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({
				fmt: wrap,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		f: _unfilled_if($scope0_reason, 0) && wrap
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 1));
}, 1);
