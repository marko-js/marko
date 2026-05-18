// tags/layout.marko
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { content } = input;
	_html("<body>");
	_dynamic_tag($scope0_id, "#text/0", content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_trailers("</body>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/layout.marko", 0);
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_name = _serialize_guard($scope0_reason, 0), $si__input_name = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $name__closures = new Set();
	const { name } = input;
	layout_default({ content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<h1>Hello ${_sep($sg__input_name)}${_escape(name)}${_el_resume($scope1_id, "#text/0", $sg__input_name)}</h1>`);
		$si__input_name && _subscribe($name__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"));
		_resume_branch($scope1_id);
	}) });
	$si__input_name && writeScope($scope0_id, { "ClosureScopes:name": $name__closures }, "__tests__/template.marko", 0);
}, 1);
