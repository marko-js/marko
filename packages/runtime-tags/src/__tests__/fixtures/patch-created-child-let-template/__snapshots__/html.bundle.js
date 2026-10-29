// tags/card.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = "<button>clear</button><section><!></section>";
const $walks = " bD%l";
const $setup = [["c2"], ["c0"]];
_shells({ c: "c c2!c0; bD%;<button>clear</button><section><!></section>" });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.tag;
	_first_value($scope0_id, "g", T, $scope0_reason, 0);
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", T, { label: input.label }, 1, 0, 0, 1, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "g");
	_html("</section>");
	_script($scope0_id, "c0");
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "wg", T, 1);
	_scope($scope0_id, {
		f: input.label,
		g: _unfilled_if($scope0_reason, 1) && T
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc1", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _content_withhold(input.tag));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({
				tag: card_default,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.label));
}, 1);
