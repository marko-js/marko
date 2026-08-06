// template.marko
_renderer_shells({ "__tests__/template.marko_1_shell": ",`__tests__/template.marko_1_shell __tests__/template.marko_1_input_value,<p>promo</p>`" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_script($scope1_id, "__tests__/template.marko_1_input_value");
			_patch_effect($scope1_id, "__tests__/template.marko_1_input_value", "input_value 1");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", _serialize_guard($scope0_reason, 0), $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1_shell"]);
	_html("</main>");
	$scope0_reason ? writeScope($scope0_id, { input_value: input.value }, "__tests__/template.marko", 0, { input_value: ["input.value"] }) : _owned_guard($scope0_owned, 3) && _patch_write($scope0_id, "input_value", input.value);
}, 1);
