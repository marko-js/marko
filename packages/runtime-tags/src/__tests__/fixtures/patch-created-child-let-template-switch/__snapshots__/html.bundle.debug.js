// tags/card.marko
const $template$3 = "<em> </em>";
const $walks$3 = "D l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<em> </em>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/big.marko
const $template$2 = "<strong><i> </i></strong>";
const $walks$2 = "E m";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/big.marko": "__tests__/tags/big.marko;E ;<strong><i> </i></strong>" });
var big_default = _template("__tests__/tags/big.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<strong><i>${_text_resume($scope0_id, "#text/0", input.label.toUpperCase(), 1, $scope0_reason, 0)}</i></strong>`);
	_scope($scope0_id, {}, "__tests__/tags/big.marko", 0);
});

// tags/outer.marko
const $template$1 = "<button>clear</button><section><!></section>";
const $walks$1 = " bD%l";
const $setup$1 = [[], ["__tests__/tags/outer.marko_0"]];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko !__tests__/tags/outer.marko_0; bD%;<button>clear</button><section><!></section>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.tag;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}<section>`);
	_dynamic_tag($scope0_id, "#text/1", T, { label: input.label });
	_html("</section>");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill1", T, 1);
	_scope($scope0_id, {
		input_label: input.label,
		T: _write_if($scope0_reason, 1) && T
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		T: "1:6"
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _content_withhold(input.tag));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({
				tag: input.big ? big_default : card_default,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_big#0:4/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:5/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_big: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.big,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.label
	}, "__tests__/template.marko", 0, {
		input_big: ["input.big"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.big, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.big), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 3)), $cg__input_show && _content_withhold(input.label));
}, 1);
