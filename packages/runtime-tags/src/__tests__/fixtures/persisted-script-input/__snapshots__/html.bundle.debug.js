// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_input_announce#4;E ;<main><h1> </h1></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h1></main>`);
	_script($scope0_id, "__tests__/template.marko_0_input_announce#4");
	_patch_effect($scope0_id, "__tests__/template.marko_0_input_announce#4", "input_announce");
	$scope0_reason ? _scope($scope0_id, { input_announce: input.announce }, "__tests__/template.marko", 0, { input_announce: ["input.announce"] }) : _owned_guard($scope0_owned, 1) && _patch_write($scope0_id, "input_announce", input.announce);
}, 1, 0);
