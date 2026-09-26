// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_styles = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<!doctype html><html><head>");
	_for_of(input.styles, (href) => {
		const $scope2_id = _scope_id();
		_html(`<link rel=stylesheet${_attr("href", href)}>${_el_resume($scope2_id, "a", $sg__input_styles)}`);
		_serialize_if($scope0_reason, 0) && _scope($scope2_id, {});
	}, 0, $scope0_id, "a", $sg__input_styles, $sg__input_styles, $sg__input_styles, 0, 1);
	_html(`${_flush_head()}</head><body>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<button>hide</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_trailers("</body></html>");
	_scope($scope0_id, {});
}, 1);
