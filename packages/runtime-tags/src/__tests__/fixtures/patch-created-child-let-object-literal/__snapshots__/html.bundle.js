// tags/card.marko
const $template = "<span> </span>";
const $setup = [[], []];
_shells({ b: "b !;D ;<span> </span>" });
_stateful_return("b");
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.opts;
	const $return = o.label + "!";
	_html(`<span>${_text_resume($scope0_id, "a", o.label)}</span>`);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb0", o, 1);
	_scope($scope0_id, {});
	return $return;
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], ["a1"]], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("D l")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button>log</button>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0, 1);
			let v = card_default({ opts: _patch_live($childScope, { label: input.label }, $scope1_id, ">e") });
			_var($scope1_id, "b", $childScope, "a0");
			_patch_child_end();
			_html(`<p>${_text_resume($scope1_id, "c", v)}</p><button>log</button>${_el_resume($scope1_id, "d")}`);
			_script($scope1_id, "a1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a2");
			_scope($scope1_id, {
				e: v,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 1));
}, 1);
