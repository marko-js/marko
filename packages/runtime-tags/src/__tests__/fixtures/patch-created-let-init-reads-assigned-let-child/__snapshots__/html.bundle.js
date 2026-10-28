// tags/child.marko
const $template = "<span> </span><!><!>";
const $walks = "D l%c";
const $setup = [[], []];
_shells({
	b: "b !;D l%;<span> </span><!><!>",
	b1: "b1;D ;<em> </em>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.v, 1, $scope0_reason, 0)}</span>`);
	_if(() => {
		if (input.v) {
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", input.a, 1, $scope0_reason, 1)}</em>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["b1"], $scope0_reason, 0);
	_scope($scope0_id, { f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input.a, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([["a6"], ["a0"]], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}& D l`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			_set_scope_reason(2 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({
				v: y,
				a: input.a
			});
			_patch_child_end();
			_html(`<button>${_text_resume($scope1_id, "c", x + input.a)}</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
			_patch_fill($scope1_id, "va2", x, 1);
			_scope($scope1_id, {
				d: _write_if($scope0_reason, 1) && x,
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, { e: input.a }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.a, !_server_guard($scope0_reason, 1));
}, 1);
