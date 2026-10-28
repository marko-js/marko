// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;E ;<main><h1> </h1></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1></main>`);
	_script($scope0_id, "__tests__/template.marko_0_input_announce#4", 1, _filled_guard($scope0_reason, 1), "input_announce");
	_scope($scope0_id, { input_announce: input.announce }, "__tests__/template.marko", 0, { input_announce: ["input.announce"] }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_announce", input.announce, !_server_guard($scope0_reason, 1));
}, 1);
