// v:template.marko.css
var v_template_marko_default = "input { color: var(--idspackages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bid-19style-19namespace-1btemplate-1amarko_0); }";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>field</label><input${_attr("id", uid)}${_attr_class(uid)}>`);
	_for_to(360, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`--idspackages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bid-19style-19namespace-1btemplate-1amarko_0:${_escape_style_value(input.color)};`)}${_el_resume($scope1_id, "#style/0", $wg__input_color)}`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/2", $wg__input_color, 0, 0, 0, 1);
}, 1);
