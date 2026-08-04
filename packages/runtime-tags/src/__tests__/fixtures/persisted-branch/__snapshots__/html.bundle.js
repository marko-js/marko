// template.marko
_renderer_shells({ a0: ",`a0;D ;<aside class=\"promo banner\"> </aside>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_promo = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.promo) {
			const $scope1_id = _scope_id();
			_html(`<aside class="promo banner">${_patch_text($scope1_id, "a", input.promo)}${_escape(input.promo)}${_el_resume($scope1_id, "a")}</aside>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", $sg__input_promo, $sg__input_promo, $sg__input_promo, void 0, void 0, ["a0"]);
	_html(`<button>Count <!>${_escape(count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && writeScope($scope0_id, {
		h: input.promo,
		i: count
	});
	_resume_branch($scope0_id);
}, 1);
