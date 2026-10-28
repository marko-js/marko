// tags/card.marko
const $template = "<p><!> <!></p><button>show</button>";
const $walks = "D%c%l b";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D%c%l ;<p><!> <!></p><button>show</button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.opts;
	_html(`<p>${_text_resume($scope0_id, "a", o.n, 1, (_mask_group($scope0_reason, 0) & 1) << 1, 0)} ${_text_resume($scope0_id, "b", "-", 2, 0, 0, 1)}</p><button>show</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wi", o?.label, 1);
	_scope($scope0_id, { i: o?.label });
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ opts: _patch_live($childScope, {
				label: input.label,
				n: input.n
			}, $scope1_id, ">e >f") });
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 4);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.n
	}) || (_filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "va3", input.label) : _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 5))), _filled_guard($scope0_reason, 6) && ($cg__input_show ? _patch_fill($scope0_id, "va5", input.n) : _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "va4", input.n, !_server_guard($scope0_reason, 6))));
}, 1);
