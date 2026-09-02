// template.marko
const $template = "<h1> </h1>";
const $walks = "D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_alias#5;D ;<h1> </h1>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const copy = input.value;
	const alias = copy;
	_html(`<h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 1)}</h1>`);
	_script($scope0_id, "__tests__/template.marko_0_alias#5");
	_patch_effect($scope0_id, "__tests__/template.marko_0_alias#5", "copy");
	$scope0_reason ? _scope($scope0_id, { copy }, "__tests__/template.marko", 0, { copy: "1:8" }) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "copy", copy);
}, 1, 0);
