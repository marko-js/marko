// tags/price-card.marko
const $template$1 = "<div><h2> </h2><button>+</button></div>";
const $walks$1 = "E l l";
const $setup$1 = [[], ["__tests__/tags/price-card.marko_0"]];
_shells({ "__tests__/tags/price-card.marko": "__tests__/tags/price-card.marko !__tests__/tags/price-card.marko_0;E l ;<div><h2> </h2><button>+</button></div>" });
var price_card_default = _template("__tests__/tags/price-card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let qty = 1;
	_html(`<div><h2>${_text_resume($scope0_id, "#text/0", input.label + " x" + qty)}</h2><button>+</button>${_el_resume($scope0_id, "#button/1")}</div>`);
	_script($scope0_id, "__tests__/tags/price-card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/price-card.marko_fill1", qty, 1);
	_scope($scope0_id, {
		input_label: input.label,
		qty
	}, "__tests__/tags/price-card.marko", 0, {
		input_label: ["input.label"],
		qty: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/price-card.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `E l/${_w0}&l`)($walks$1)};${((_w0) => `<main><h1> </h1>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	price_card_default({ label: input.label });
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
