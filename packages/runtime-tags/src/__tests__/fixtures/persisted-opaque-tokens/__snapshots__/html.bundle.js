// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_promoText = _serialize_guard($scope0_reason, 2), $sg__input_promo__OR__input_promoText = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button class=bump>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.promo ? 0 : void 0, $scope0_id, "c", $sg__input_promo__OR__input_promoText, $sg__input_promo__OR__input_promoText, _serialize_guard($scope0_reason, 1), 0, 1, "a0", [() => {
		const $scope1_id = _scope_id();
		_html(`<div class=promo><strong>sale!</strong> ${_sep($sg__input_promoText)}${_escape(input.promoText)}${_el_resume($scope1_id, "a", $sg__input_promoText)}</div>`);
		$sg__input_promo__OR__input_promoText && writeScope($scope1_id, { _: $sg__input_promoText && _scope_with_id($scope0_id) });
	}], [0], "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		g: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.promoText,
		h: _seed_fill(_state_reason() && count)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["<button class=bump> </button><!><!>", " D l%c"],
	"a": ["<button class=bump> </button><!><!>", " D l%c"]
});
