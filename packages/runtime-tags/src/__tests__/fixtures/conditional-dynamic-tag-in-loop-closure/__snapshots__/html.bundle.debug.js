// tags/sections.marko
var sections_default = _template("__tests__/tags/sections.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_section = _serialize_guard($scope0_reason, 0), $si__input_section = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.section, ({ content }) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (content) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", content, {}, 0, 0, $sg__input_section);
				$si__input_section && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/sections.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__input_section, $sg__input_section, $sg__input_section);
		$si__input_section && _scope($scope1_id, {}, "__tests__/tags/sections.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_section, $sg__input_section, $sg__input_section);
	$si__input_section && _scope($scope0_id, {}, "__tests__/tags/sections.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	sections_default({ section: attrTag({
		onClick: function() {
			count++;
		},
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "#text/0", count));
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
		}, $scope0_id)
	}) });
	_scope($scope0_id, {
		"ClosureScopes:count/2": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
