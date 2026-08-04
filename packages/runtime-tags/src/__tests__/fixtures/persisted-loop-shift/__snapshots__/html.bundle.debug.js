// template.marko
_renderer_shells({
	"__tests__/template.marko_2_shell": ",`__tests__/template.marko_2_shell;D ;<li> </li>`",
	"__tests__/template.marko_1_shell": ",`__tests__/template.marko_1_shell;D ;<aside> </aside>`"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0), $sg__input_promo = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><ul>");
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "#text/0", item.label)}${_escape(item.label)}${_el_resume($scope2_id, "#text/0")}</li>`);
		writeScope($scope2_id, {}, "__tests__/template.marko", "4:6");
	}, "id", $scope0_id, "#ul/0", $sg__input_items, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_2_shell");
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_items)}`);
	_if(() => {
		if (input.promo) {
			const $scope1_id = _scope_id();
			_html(`<aside>${_patch_text($scope1_id, "#text/0", input.promo)}${_escape(input.promo)}${_el_resume($scope1_id, "#text/0")}</aside>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4");
			return 0;
		}
	}, $scope0_id, "#text/1", $sg__input_promo, $sg__input_promo, $sg__input_promo, void 0, void 0, ["__tests__/template.marko_1_shell"]);
	_html(`<p>${_patch_text($scope0_id, "#text/2", input.note)}${_escape(input.note)}${_el_resume($scope0_id, "#text/2")}</p><button>Count <!>${_escape(count)}${_el_resume($scope0_id, "#text/4")}</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_promo: input.promo,
		count
	}, "__tests__/template.marko", 0, {
		input_promo: ["input.promo"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
