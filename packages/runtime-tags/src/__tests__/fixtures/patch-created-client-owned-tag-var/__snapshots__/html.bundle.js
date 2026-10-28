// tags/card.marko
const $template$1 = "<span> </span>";
const $setup$2 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.x + "!";
	_html(`<span>${_text_resume($scope0_id, "a", input.x, void 0, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
	return $return;
});

// tags/wrap.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c: "c !;b%;<!><!><!>",
	c3: /*@__PURE__*/ (() => `c3${_shell_marker(_shell_setup([[], ["c1"]], ["a>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("D l")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button class=log>log</button>`)($template$1)}`)()
});
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0, $cg__input_label && 1);
			let v = card_default({ x: input.label });
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "we", v, !$sg__input_label);
			$cg__input_label && _var($scope1_id, "b", $childScope, "c0");
			_patch_child_end();
			_html(`<p>${_text_resume($scope1_id, "c", v, void 0, $scope0_reason, 1)}</p><button class=log>log</button>${_el_resume($scope1_id, "d")}`);
			_script($scope1_id, "c1");
			$cg__input_label && _patch_init($scope1_id, "c2");
			_scope($scope1_id, {
				e: v,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["c3"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc4", input.label, !$sg__input_label);
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=edit>edit</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let label = input.label;
	_html(`<button class=edit>edit</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(8 | _mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	wrap_default({
		label,
		show: input.show
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: label,
		b: _existing_scope($childScope)
	});
}, 1);
