// template.marko
const $template = "<main><h1> </h1><input></main>";
const $walks = "E l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<main><h1> </h1><input></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const plain = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "__tests__/template.marko_0/plain");
	const loud = _resume((next) => {
		document.querySelector("main").dataset.got = next.toUpperCase();
	}, "__tests__/template.marko_0/loud");
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 1)}</h1><input${_attr_input_value($scope0_id, "#input/1", input.value, input.big ? loud : plain, "PatchControl:2#input/1", $scope0_reason, 0, "PatchWrite:ControlledHandler:#input/1", $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_value: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.value,
		input_big: _unfilled_if($scope0_reason, 0) && input.big,
		plain: _unfilled_if($scope0_reason, 0) && plain,
		loud: _unfilled_if($scope0_reason, 0) && loud
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		input_big: ["input.big"],
		plain: "1:8",
		loud: "2:8",
		"ControlledHandler:#input/1": ["valueChange", "5:28"]
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.value, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.big, !_server_guard($scope0_reason, 3)));
}, 1);
