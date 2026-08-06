// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const handler = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "__tests__/template.marko_0/handler");
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title)}${_el_resume($scope0_id, "#text/0")}</h1><input${_attr_input_value($scope0_id, "#input/1", input.value, input.wire ? handler : undefined)}${_patch_bind($scope0_id, "ControlledHandler:#input/1", input.wire ? handler : undefined)}${_patch_control($scope0_id, "#input/1", 2, input.value)}>${_el_resume($scope0_id, "#input/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_value: input.value,
		input_wire: input.wire,
		handler
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		input_wire: ["input.wire"],
		handler: "1:8"
	});
}, 1);
