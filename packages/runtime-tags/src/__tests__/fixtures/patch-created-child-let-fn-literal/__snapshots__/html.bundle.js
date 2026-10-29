// tags/outer.marko
const $template = "<button>plain</button><section> </section>";
const $walks = " bD l";
const $setup = [["b3"], ["b1"]];
_shells({ b: "b b3!b1; bD ;<button>plain</button><section> </section>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = _resume((v) => "[" + v + "]", "b0");
	_html(`<button>plain</button>${_el_resume($scope0_id, "a")}<section>${_text_resume($scope0_id, "b", f(input.label), 1, $scope0_reason, 0, 1, "f")}</section>`);
	_script($scope0_id, "b1");
	_client_guard($scope0_reason, 0) && _patch_write($scope0_id, "wf", f, 1);
	_scope($scope0_id, {
		e: input.label,
		f: _unfilled_if($scope0_reason, 0) && f
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 1));
}, 1);
