// template.marko
_renderer_shells({ "__tests__/template.marko_1_shell": ",`__tests__/template.marko_1_shell __tests__/template.marko_1; D ;<span> </span>`" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_patch_text($scope1_id, "#text/1", input.label)}${_escape(input.label)}${_el_resume($scope1_id, "#text/1")}</span>${_el_resume($scope1_id, "#span/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", _serialize_guard($scope0_reason, 0), $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1_shell"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
