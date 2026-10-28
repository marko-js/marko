// tags/picker/card.marko
const $template$2 = "<em><!> <!></em>";
const $walks$2 = "D%c%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/picker/card.marko": "__tests__/tags/picker/card.marko;D%c%;<em><!> <!></em>" });
var card_default = _template("__tests__/tags/picker/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)} ${_text_resume($scope0_id, "#text/1", $global$1.brand, 2, 4, 0)}</em>`);
	_fill_global_subscribe("__tests__/tags/picker/card.marko_0_$global_brand#6", $scope0_id);
	_scope($scope0_id, {}, "__tests__/tags/picker/card.marko", 0);
});

// tags/picker/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/picker/index.marko": "__tests__/tags/picker/index.marko !;b%;<!><!><!>" });
var picker_default = _template("__tests__/tags/picker/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : null, { label: input.label }, 1, 0, 0, $wg__input_on__OR__input_label, $scope0_reason, 0);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/picker/index.marko_0_input_on#3_input_label#4/init");
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label
	}, "__tests__/tags/picker/index.marko", 0, {
		input_on: ["input.on"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "PatchFill:__tests__/tags/picker/index.marko_fill0", input.on, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "PatchFill:__tests__/tags/picker/index.marko_fill1", input.label, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.label));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html("<main>");
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	picker_default({
		on,
		label: input.label
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		on,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { on: "1:6" });
}, 1);
