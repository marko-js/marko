// tags/price-card.marko
const $template$1 = "<div><h2> </h2><button>+</button></div>";
const $walks$1 = "E l l";
_shells({ "__tests__/tags/price-card.marko": "__tests__/tags/price-card.marko !__tests__/tags/price-card.marko_0;E l ;<div><h2> </h2><button>+</button></div>" });
var price_card_default = _template_persisted("__tests__/tags/price-card.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let qty = 1;
	_html(`<div><h2>${_text_resume($scope0_id, "#text/0", input.label + " x" + qty)}</h2><button>+</button>${_el_resume($scope0_id, "#button/1")}</div>`);
	_script($scope0_id, "__tests__/tags/price-card.marko_0");
	_patch_value($scope0_id, "__tests__/tags/price-card.marko1", qty, 1);
	$scope0_reason ? _scope($scope0_id, {
		input_label: input.label,
		qty
	}, "__tests__/tags/price-card.marko", 0, {
		input_label: ["input.label"],
		qty: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/tags/price-card.marko0", input.label);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `E l/${_w0}&l`)($walks$1), ((_w0) => `<main><h1> </h1>${_w0}</main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h1>`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	price_card_default({ label: input.label });
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [price_card_default]);
