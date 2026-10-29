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
const $template$2 = "<strong> </strong>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/big.marko": "__tests__/tags/big.marko;D ;<strong> </strong>" });
var big_default = _template("__tests__/tags/big.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<strong>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</strong>`);
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
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/outer.marko_0_input_tag#4_input_tagChange#5/init");
	const $TChange = input.tagChange || void 0;
	_patch_let_change($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill3", T, "PatchWrite:TagVariableChange:T", $TChange, $scope0_reason, 0);
	_scope($scope0_id, {
		input_tag: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.tag,
		input_tagChange: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.tagChange,
		input_label: input.label,
		T: _write_if($scope0_reason, 3) && T,
		"TagVariableChange:T": $TChange
	}, "__tests__/tags/outer.marko", 0, {
		input_tag: ["input.tag"],
		input_tagChange: ["input.tagChange"],
		input_label: ["input.label"],
		T: "1:6",
		"TagVariableChange:T": ["TChange", "1:6"]
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.tag, !_server_guard($scope0_reason, 1)), _content_withhold(input.tag), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill1", input.tagChange, !_server_guard($scope0_reason, 2)), _content_withhold(input.tagChange), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill2", input.label, !_server_guard($scope0_reason, 3)), _content_withhold(input.label));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 7);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		tag: input.big ? big_default : card_default,
		tagChange: _resume(function() {}, "__tests__/template.marko_0/tagChange"),
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
