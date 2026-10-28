// tags/price-card.marko
const $template$1 = "<div><h2> </h2><button class=bump>+</button></div>";
const $walks$1 = "E l l";
const $setup$1 = [[], ["__tests__/tags/price-card.marko_0"]];
_shells({ "__tests__/tags/price-card.marko": "^__tests__/tags/price-card.marko !__tests__/tags/price-card.marko_0;E l ;<div><h2> </h2><button class=bump>+</button></div>" });
_stateful_return("__tests__/tags/price-card.marko");
var price_card_default = _template("__tests__/tags/price-card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let qty = 1;
	const $return = qty;
	_html(`<div><h2>${_text_resume($scope0_id, "#text/0", input.label + " x" + qty)}</h2><button class=bump>+</button>${_el_resume($scope0_id, "#button/1")}</div>`);
	_script($scope0_id, "__tests__/tags/price-card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/price-card.marko_fill1", qty, 1);
	_scope($scope0_id, {
		input_label: input.label,
		qty
	}, "__tests__/tags/price-card.marko", 0, {
		input_label: ["input.label"],
		qty: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/price-card.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<main><h1> </h1><button class=read>read</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&E l l`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `0${_w0}&E l l`)($walks$1)};${((_w0) => `${_w0}<main><h1> </h1><button class=read>read</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, 1);
	let card = price_card_default({ label: input.label });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_card#8/var");
	_patch_child_end();
	_html(`<main><h1>${_text_resume($scope0_id, "#text/2", input.title, void 0, $scope0_reason, 1)}</h1><button class=read>read</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		card,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { card: "1:13" });
}, 1);
