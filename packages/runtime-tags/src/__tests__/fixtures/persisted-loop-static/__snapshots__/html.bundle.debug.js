// template.marko
_renderer_shells({ "__tests__/template.marko_1_shell": ",`__tests__/template.marko_1_shell;D%c%;<p><!> <!></p>`" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_note = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_for_of(["a", "b"], (name) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "#text/0", name)}${_el_resume($scope1_id, "#text/0")} <!>${_patch_text($scope1_id, "#text/1", input.note, $scope0_owned, 1)}${_el_resume($scope1_id, "#text/1")}</p>`);
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#text/1", $sg__input_note, $sg__input_note, 0, void 0, void 0, "__tests__/template.marko_1_shell");
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
