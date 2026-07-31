// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_patch_text($scope1_id, "#text/0", input.text)}${_escape(input.text)}${_el_resume($scope1_id, "#text/0")}</span>`);
			writeScope($scope1_id, { _: _serialize_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, _serialize_guard($scope0_reason, 0));
	_html(`<p>${_patch_text($scope0_id, "#text/1", input.after)}${_escape(input.after)}${_el_resume($scope0_id, "#text/1")}</p></div>`);
	writeScope($scope0_id, { input_text: _serialize_if($scope0_reason, 0) && input.text }, "__tests__/template.marko", 0, { input_text: ["input.text"] });
}, 1);
