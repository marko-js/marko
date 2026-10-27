// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Row = { content: _content_resume("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0);
		_html(`<b>R${_text_resume($scope1_id, "#text/0", label, $wg__label * 2)}</b>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", Row, { label: input.y }, 0, 0, $wg__input_y);
	_write_if($scope0_reason, 0) && _scope($scope0_id, { Row }, "__tests__/template.marko", 0, { Row: "1:9" });
}, 1);
