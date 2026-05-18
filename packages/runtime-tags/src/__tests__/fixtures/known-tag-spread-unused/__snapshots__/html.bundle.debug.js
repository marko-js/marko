// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("__tests__/template.marko_1_content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`${_escape(input.foo || "fallback")}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope1_reason, 0))}`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}) };
	const Bar = { content: _content("__tests__/template.marko_2_content", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		const $childScope = _peek_scope_id();
		_set_serialize_reason(_serialize_guard($scope2_reason, 0));
		Foo.content(input);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "5:2");
	}) };
	Bar.content({});
}, 1);
