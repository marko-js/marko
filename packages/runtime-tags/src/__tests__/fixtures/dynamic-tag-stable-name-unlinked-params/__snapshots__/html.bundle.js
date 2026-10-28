// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Row = { content: _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("<b>R</b>");
	}, $scope0_id) };
	const Box = { content: _content_resume("a1", ({ show, content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 2), $wg__show = _write_guard($scope2_reason, 1);
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", content, {}, 0, 0, $wg__content);
				_write_if($scope2_reason, 0) && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", _write_guard($scope2_reason, 0), $wg__show);
		_write_if($scope2_reason, 1) && _scope($scope2_id, { e: content });
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", Box, {
		show: input.show,
		content: Row
	}, 0, 0, $wg__input_show);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		e: Row,
		f: Box
	});
}, 1);
