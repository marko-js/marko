// tags/price-card.marko
const $template = "<div><h2> </h2><button>+</button></div>";
const $walks = "E l l";
_shells({ b: "b !b0;E l ;<div><h2> </h2><button>+</button></div>" });
var price_card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let qty = 1;
	_html(`<div><h2>${_text_resume($scope0_id, "a", input.label + " x1")}</h2><button>+</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b1", qty, 1);
	$scope0_reason ? _scope($scope0_id, {
		e: input.label,
		f: qty
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "b0", input.label);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `E l/${_w0}&l`)($walks), ((_w0) => `<main><h1> </h1>${_w0}</main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h1>`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	price_card_default({ label: input.label });
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1, () => [price_card_default]);
