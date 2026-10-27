// tags/price-card.marko
const $template$3 = "<section><h2> </h2><button>+</button></section>";
const $walks$3 = "E l l";
const $setup$3 = [[], ["__tests__/tags/price-card.marko_0"]];
_shells({ "__tests__/tags/price-card.marko": "__tests__/tags/price-card.marko !__tests__/tags/price-card.marko_0;E l ;<section><h2> </h2><button>+</button></section>" });
var price_card_default = _template("__tests__/tags/price-card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let qty = 1;
	_html(`<section><h2>${_text_resume($scope0_id, "#text/0", input.label + " x" + qty)}</h2><button>+</button>${_el_resume($scope0_id, "#button/1")}</section>`);
	_script($scope0_id, "__tests__/tags/price-card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/price-card.marko_fill1", qty, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		qty
	}, "__tests__/tags/price-card.marko", 0, {
		input_label: ["input.label"],
		qty: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/price-card.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
});

// tags/promo-tag.marko
const $template$2 = "<aside> </aside><button class=promo>seen</button>";
const $walks$2 = "D l b";
const $setup$2 = [[], ["__tests__/tags/promo-tag.marko_0"]];
_shells({ "__tests__/tags/promo-tag.marko": "__tests__/tags/promo-tag.marko !__tests__/tags/promo-tag.marko_0;D l ;<aside> </aside><button class=promo>seen</button>" });
var promo_tag_default = _template("__tests__/tags/promo-tag.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let seen = 0;
	_html(`<aside>${_text_resume($scope0_id, "#text/0", input.text + " (" + seen + ")")}</aside><button class=promo>seen</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/promo-tag.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/promo-tag.marko_fill1", seen, 1);
	$scope0_page ? _scope($scope0_id, {
		input_text: input.text,
		seen
	}, "__tests__/tags/promo-tag.marko", 0, {
		input_text: ["input.text"],
		seen: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/promo-tag.marko_fill0", input.text, !_server_guard($scope0_reason, 0));
});

// tags/site-footer.marko
const $template$1 = "<footer> </footer>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/site-footer.marko": "__tests__/tags/site-footer.marko;D ;<footer> </footer>" });
var site_footer_default = _template("__tests__/tags/site-footer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_year = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let frozen = 0;
	_html(`<footer>${_patch_text($scope0_id, "#text/0", input.year + frozen, void 0, $scope0_reason, 0)}</footer>`);
	$cg__input_year && _patch_write($scope0_id, "PatchWrite:frozen", frozen, 1);
	$cg__input_year && _patch_init($scope0_id, "__tests__/tags/site-footer.marko_0_input_year#3_frozen#4/init");
	$scope0_page && _scope($scope0_id, { frozen: _unfilled_if($scope0_reason, 0) && frozen }, "__tests__/tags/site-footer.marko", 0, { frozen: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<main><h1> </h1><p> </p>${_w0}${_w1}${_w2}</main>`)($template$3, $template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `E l D l/${_w0}&/${_w1}&/${_w2}&l`)($walks$3, $walks$2, "D l");
const $setup = _shell_setup([[], []], ["#childScope/3>", $setup$3], ["#childScope/4>", $setup$2], ["#childScope/5>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1, _w2) => `E l D l/${_w0}&/${_w1}&/${_w2}&l`)($walks$3, $walks$2, "D l")};${((_w0, _w1, _w2) => `<main><h1> </h1><p> </p>${_w0}${_w1}${_w2}</main>`)($template$3, $template$2, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1><p${_patch_attr($scope0_id, "PatchAttr:#p/1 title", "title", $global$1.locale)}>${_patch_text($scope0_id, "#text/2", $global$1.brand)}</p>${_el_resume($scope0_id, "#p/1")}`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/3", 0);
	price_card_default({ label: input.label });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "#childScope/4", 1);
	promo_tag_default({ text: "Sale" });
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope3 = _patch_child($scope0_id, "#childScope/5", 2);
	site_footer_default({ year: input.year });
	_patch_child_end();
	_html("</main>");
	_fill_global_subscribe("__tests__/template.marko_0_$global_locale#8", $scope0_id);
	_fill_global_subscribe("__tests__/template.marko_0_$global_brand#10", $scope0_id);
	$scope0_page && _scope($scope0_id, {
		"#childScope/3": _existing_scope($childScope),
		"#childScope/4": _existing_scope($childScope2),
		"#childScope/5": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0);
}, 1);
