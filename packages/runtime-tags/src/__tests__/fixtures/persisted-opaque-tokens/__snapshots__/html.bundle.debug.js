// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_promoText = _serialize_guard($scope0_reason, 2), $sg__input_promo__OR__input_promoText = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button class=bump>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.promo ? 0 : undefined, $scope0_id, "#text/2", $sg__input_promo__OR__input_promoText, $sg__input_promo__OR__input_promoText, _serialize_guard($scope0_reason, 1), 0, 1, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		_html(`<div class=promo><strong>sale!</strong> ${_sep($sg__input_promoText)}${_escape(input.promoText)}${_el_resume($scope1_id, "#text/0", $sg__input_promoText)}</div>`);
		$sg__input_promo__OR__input_promoText && writeScope($scope1_id, { _: $sg__input_promoText && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
	}], [0], "__tests__/template.marko_r0");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_promoText: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.promoText,
		count: _seed_fill(_state_reason() && count)
	}, "__tests__/template.marko", 0, {
		input_promoText: ["input.promoText"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=bump> </button><!><!>", " D l%c"],
	"__tests__/template.marko": ["<button class=bump> </button><!><!>", " D l%c"]
});
