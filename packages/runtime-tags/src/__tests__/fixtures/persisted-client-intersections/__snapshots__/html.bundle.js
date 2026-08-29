// tags/price-card.marko
const $template$2 = "<section><h2> </h2><button>+</button></section>";
const $walks$1 = "E l l";
_shells({ b: "b !b0;E l ;<section><h2> </h2><button>+</button></section>" });
var price_card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let qty = 1;
	_html(`<section><h2>${_text_resume($scope0_id, "a", input.label + " x1")}</h2><button>+</button>${_el_resume($scope0_id, "b")}</section>`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b1", qty, 1);
	$scope0_reason ? _scope($scope0_id, {
		e: input.label,
		f: qty
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "b0", input.label);
	_resume_branch($scope0_id);
}, 0, 0);

// tags/promo-tag.marko
const $template$1 = "<aside> </aside><button class=promo>seen</button>";
const $walks = "D l b";
_shells({ c: "c !c0;D l ;<aside> </aside><button class=promo>seen</button>" });
var promo_tag_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let seen = 0;
	_html(`<aside>${_text_resume($scope0_id, "a", input.text + " (0)")}</aside><button class=promo>seen</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c1", seen, 1);
	$scope0_reason ? _scope($scope0_id, {
		e: input.text,
		f: seen
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "c0", input.text);
	_resume_branch($scope0_id);
}, 0, 0);

// tags/site-footer.marko
const $template = "<footer> </footer>";
_shells({ d: "d;D ;<footer> </footer>" });
var site_footer_default = _template_persisted("d", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let frozen = 0;
	_html(`<footer>${_patch_text($scope0_id, "a", input.year + frozen, void 0, $scope0_owned, 0)}</footer>`);
	$scope0_reason && _scope($scope0_id, { e: frozen });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0, _w1, _w2) => `E l D l/${_w0}&/${_w1}&/${_w2}&l`)($walks$1, $walks, "D l"), ((_w0, _w1, _w2) => `<main><h1> </h1><p> </p>${_w0}${_w1}${_w2}</main>`)($template$2, $template$1, $template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h1><p${_patch_attr($scope0_id, "b", "title", $global$1.locale)}>${_patch_text($scope0_id, "c", $global$1.brand)}</p>${_el_resume($scope0_id, "b")}`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "d", $childScope);
	price_card_default({ label: input.label });
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "e", $childScope2);
	promo_tag_default({ text: "Sale" });
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
	const $childScope3 = _peek_scope_id();
	_patch_child($scope0_id, "f", $childScope3);
	site_footer_default({ year: input.year });
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		d: _existing_scope($childScope),
		e: _existing_scope($childScope2),
		f: _existing_scope($childScope3)
	});
}, 1, 1);
