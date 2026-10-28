// tags/panel.marko
const $template$2 = "<section> </section>";
const $setup$2 = [[], []];
_shells({ c: "c;D ;<section> </section>" });
var panel_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section>${_text_resume($scope0_id, "a", input.data.title, void 0, $scope0_reason, 0)}</section>`);
	_scope($scope0_id, {});
});

// tags/card.marko
const $template$1 = "<div> </div>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<div> </div>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.user.name, void 0, $scope0_reason, 0)}</div>`);
	_scope($scope0_id, {});
});

// tags/toggle.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = [[], ["d0"]];
_shells({ d: "d !d0; D ;<button> </button>" });
var toggle_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>${_text_resume($scope0_id, "b", input.user.name)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_patch_fill($scope0_id, "vd3", open, 1);
	_scope($scope0_id, {
		f: input.user?.bio,
		g: input.user?.name,
		h: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vd1", input.user?.bio, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vd2", input.user?.name, !_server_guard($scope0_reason, 1)));
});

// template.marko
_shells({
	a: "a !a7; D l%b%;<button class=inc> </button><!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$2),
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1),
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup$1], ["b>", $setup]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", $walks)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_admin = _client_guard($scope0_reason, 1), $cg__input_more = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.admin) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _patch_child($scope1_id, "a", 0);
			panel_default({ data: input.adminData });
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
			const $childScope2 = _patch_child($scope2_id, "a", 0);
			card_default({ user: input.user });
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "a1");
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 1;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2", "a3"], $scope0_reason, 1);
	_if(() => {
		if (input.more) {
			const $scope3_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 6) << 1);
			const $childScope3 = _patch_child($scope3_id, "a", 1);
			card_default(input.props);
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 5) << 1 | _mask_group($scope0_reason, 5) << 3);
			const $childScope4 = _patch_child($scope3_id, "b", 2);
			toggle_default({ user: input.other });
			_patch_child_end();
			_client_guard($scope0_reason, 5) && _patch_init($scope3_id, "a5");
			_client_guard($scope0_reason, 6) && _patch_init($scope3_id, "a6");
			_scope($scope3_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope3),
				b: _existing_scope($childScope4)
			});
			return 0;
		}
	}, $scope0_id, "d", 1, _write_guard($scope0_reason, 4), void 0, void 0, void 0, ["a4"], $scope0_reason, 4);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.adminData,
		i: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.user,
		l: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && input.other,
		m: n,
		n: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.props?.user
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_admin && _patch_fill($scope0_id, "va8", input.adminData, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_admin && _patch_fill($scope0_id, "va9", input.user, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 5) && $cg__input_more && _patch_fill($scope0_id, "va10", input.other, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $cg__input_more && _patch_fill($scope0_id, "va11", input.props?.user, !_server_guard($scope0_reason, 6)));
}, 1);
