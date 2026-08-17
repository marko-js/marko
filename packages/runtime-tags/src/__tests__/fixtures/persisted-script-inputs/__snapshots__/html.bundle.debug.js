// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1></main>`);
	_script($scope0_id, "__tests__/template.marko_0_input_a#4_input_b#5");
	_patch_effect($scope0_id, "__tests__/template.marko_0_input_a#4_input_b#5", "input_a input_b");
	$scope0_reason ? writeScope($scope0_id, {
		input_a: input.a,
		input_b: input.b
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) : (_owned_guard($scope0_owned, 1) && _patch_write($scope0_id, "input_a", input.a), _owned_guard($scope0_owned, 2) && _patch_write($scope0_id, "input_b", input.b));
}, 1, 0);
