// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const plain = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "__tests__/template.marko_0/plain");
	const loud = _resume((next) => {
		document.querySelector("main").dataset.got = next.toUpperCase();
	}, "__tests__/template.marko_0/loud");
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/0")}</h1><input${_attr_input_value($scope0_id, "#input/1", input.value, input.big ? loud : plain)}${_patch_bind($scope0_id, "ControlledHandler:#input/1", input.big ? loud : plain)}${_patch_control($scope0_id, "#input/1", 2, input.value, $scope0_owned, 0)}>${_el_resume($scope0_id, "#input/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_value: input.value,
		input_big: input.big,
		plain,
		loud
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		input_big: ["input.big"],
		plain: "1:8",
		loud: "2:8",
		"ControlledHandler:#input/1": ["valueChange", "5:28"]
	});
}, 1, 0);
