// tags/price-card.marko
const $template$2 = "<section><h2> </h2><button>+</button></section>";
const $walks$1 = "E l l";
const $setup$3 = [[], ["b0"]];
_shells({ b: "b !b0;E l ;<section><h2> </h2><button>+</button></section>" });
var price_card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let qty = 1;
	_html(`<section><h2>${_text_mark($scope0_id, "a", input.label + " x1")}</h2><button>+</button>${_el_mark($scope0_id, "b")}</section>`);
	_script($scope0_id, "b0");
	_patch_render($scope0_id, "b1", $fg__input_label && "e");
	_patch_fill($scope0_id, "vb2", qty, 1);
	_scope($scope0_id, {
		e: input.label,
		f: qty
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
});

// tags/promo-tag.marko
const $template$1 = "<aside> </aside><button class=promo>seen</button>";
const $walks = "D l b";
const $setup$2 = [[], ["c0"]];
_shells({ c: "c !c0;D l ;<aside> </aside><button class=promo>seen</button>" });
var promo_tag_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_text = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let seen = 0;
	_html(`<aside>${_text_mark($scope0_id, "a", input.text + " (0)")}</aside><button class=promo>seen</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_patch_render($scope0_id, "c1", $fg__input_text && "e");
	_patch_fill($scope0_id, "vc2", seen, 1);
	_scope($scope0_id, {
		e: input.text,
		f: seen
	}) || $fg__input_text && _patch_write($scope0_id, "xe", input.text, !_server_guard($scope0_reason, 0));
});

// tags/site-footer.marko
const $template = "<footer> </footer>";
const $setup$1 = [[], []];
_shells({ d: "d !;D ;<footer> </footer>" });
var site_footer_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_year = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let frozen = 0;
	_html(`<footer>${_text_mark($scope0_id, "a", input.year + frozen)}</footer>`);
	_patch_render($scope0_id, "d0", $fg__input_year && "d");
	_patch_fill($scope0_id, "vd1", frozen, 1);
	_scope($scope0_id, {
		d: input.year,
		e: _write_if($scope0_reason, 0) && frozen
	}) || $fg__input_year && _patch_write($scope0_id, "xd", input.year, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["d>", $setup$3], ["e>", $setup$2], ["f>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1, _w2) => `E l D l/${_w0}&/${_w1}&/${_w2}&l`)($walks$1, $walks, "D l")};${((_w0, _w1, _w2) => `<main><h1> </h1><p> </p>${_w0}${_w1}${_w2}</main>`)($template$2, $template$1, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1><p${_attr("title", $global$1.locale, $scope0_id, "b")}>${_text_mark($scope0_id, "c", $global$1.brand, 1, 4, 0)}</p>${_el_mark($scope0_id, "b")}`);
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "d", 0);
	price_card_default({ label: input.label });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "e", 1);
	promo_tag_default({ text: "Sale" });
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
	const $childScope3 = _peek_scope_id($scope0_id, "f", 2);
	site_footer_default({ year: input.year });
	_patch_child_end();
	_html("</main>");
	_fill_global_subscribe("a0", $scope0_id);
	_fill_global_subscribe("a1", $scope0_id);
	_scope($scope0_id, {
		d: _existing_scope($childScope),
		e: _existing_scope($childScope2),
		f: _existing_scope($childScope3)
	});
}, 1);
