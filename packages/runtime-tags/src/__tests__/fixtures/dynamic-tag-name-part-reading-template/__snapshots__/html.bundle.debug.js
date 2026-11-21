// tags/a.marko
var a_default = _template("__tests__/tags/a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>A ${_text_mark($scope0_id, "#text/0", input.label, _write_guard($scope0_reason, 0) * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/a.marko", 0);
});

// tags/b.marko
var b_default = _template("__tests__/tags/b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>B ${_text_mark($scope0_id, "#text/0", input.label, _write_guard($scope0_reason, 1) * 2)} `);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 2));
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/b.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 3), $wi__input_name = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_name__closures = new Set();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.tag !== b_default && a_default, { label: "left" }, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(_text_mark($scope1_id, "#text/0", input.name, $wg__input_name));
		_write_if($scope0_reason, 0) && _subscribe($wi__input_name && $input_name__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:9"), "__tests__/template.marko_1_input_name#0:5/subscribe", $wg__input_name);
	}, $scope0_id), 0, _write_guard($scope0_reason, 2));
	_html("</div>");
	_dynamic_tag($scope0_id, "#text/1", input.a ? a_default : b_default ? 1 : 2, { label: "alternate" }, _content("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("Hello");
	}, $scope0_id), 0, _write_guard($scope0_reason, 4));
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		input_name: _write_if($scope0_reason, 2) && input.name,
		"ClosureScopes:input_name/7": $wi__input_name && $input_name__closures
	}, "__tests__/template.marko", 0, { input_name: ["input.name"] });
}, 1);
