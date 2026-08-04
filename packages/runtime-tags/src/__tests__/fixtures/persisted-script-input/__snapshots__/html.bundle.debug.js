// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "#text/0")}</h1></main>`);
	_script($scope0_id, "__tests__/template.marko_0_input_announce");
	_patch_effect($scope0_id, "__tests__/template.marko_0_input_announce", "input_announce");
	$scope0_reason ? writeScope($scope0_id, { input_announce: input.announce }, "__tests__/template.marko", 0, { input_announce: ["input.announce"] }) : _patch_write($scope0_id, "input_announce", input.announce);
}, 1);
