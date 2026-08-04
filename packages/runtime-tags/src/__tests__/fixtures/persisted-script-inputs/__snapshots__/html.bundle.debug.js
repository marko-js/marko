// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "#text/0")}</h1></main>`);
	_script($scope0_id, "__tests__/template.marko_0_input_a_input_b");
	_patch_effect($scope0_id, "__tests__/template.marko_0_input_a_input_b", "input_a input_b");
	$scope0_reason ? writeScope($scope0_id, {
		input_a: input.a,
		input_b: input.b
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) : (_patch_write($scope0_id, "input_a", input.a), _patch_write($scope0_id, "input_b", input.b));
}, 1);
