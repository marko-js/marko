// tags/card.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/flag.marko
const $template$1 = "<p> </p>";
const $setup$1 = [[], []];
_shells({ c: "c;D ;<p> </p>" });
var flag_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "a", input.value, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>clear</button>${_w0}<section><!></section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&D%l`)("D l");
const $setup = _shell_setup([[], ["d0"]], ["b>", $setup$1]);
_shells({ d: /*@__PURE__*/ (() => `d${_shell_marker($setup)};${((_w0) => ` b/${_w0}&D%l`)("D l")};${((_w0) => `<button>clear</button>${_w0}<section><!></section>`)($template$1)}`)() });
var outer_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.tag;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	flag_default({ value: `${!!T}` });
	_patch_child_end();
	_html("<section>");
	_dynamic_tag($scope0_id, "c", T, { label: input.label }, 8);
	_html("</section>");
	_script($scope0_id, "d0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vd2", T, 1);
	_scope($scope0_id, {
		g: input.label,
		h: _write_if($scope0_reason, 1) && T,
		b: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vd1", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _content_withhold(input.tag));
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
