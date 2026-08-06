// template.marko
_renderer_shells({ "__tests__/template.marko_1_shell": ",`__tests__/template.marko_1_shell; ;<em>note</em>`" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><button${_attr_class([
		"btn",
		input.tone,
		count % 2 && "odd"
	])}>+</button>${_el_resume($scope0_id, "#button/0")}<span class=${count % 2 ? "odd" : "even"}>parity</span>${_el_resume($scope0_id, "#span/1")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<em${_patch_attr_class($scope1_id, "#em/0", input.tone, $scope0_owned, 1)}>note</em>${_el_resume($scope1_id, "#em/0")}`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1_shell"]);
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_tone: input.tone,
		count
	}, "__tests__/template.marko", 0, {
		input_tone: ["input.tone"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.tone);
	_resume_branch($scope0_id);
}, 1, 0);
