// tags/kid.marko
const $template = "<div> </div><!><button>t</button>";
const $walks = "D l%b b";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D l%b ;<div> </div><!><button>t</button>" });
var kid_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<div>${_patch_text($scope0_id, "a", input.a, void 0, $scope0_reason, 0)}</div>`);
	_if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", on, 1);
	_scope($scope0_id, {
		g: input.b,
		h: on
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.b, !_server_guard($scope0_reason, 1));
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
			const $childScope = _patch_child($scope1_id, "a", 0);
			kid_default({
				a: input.a,
				b: "const"
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.a, !_server_guard($scope0_reason, 1));
}, 1);
