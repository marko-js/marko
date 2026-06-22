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
				$si__input_section && writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/sections.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__input_section, $sg__input_section, $sg__input_section, void 0, void 0, 1);
		$si__input_section && writeScope($scope1_id, { content }, "__tests__/tags/sections.marko", "1:2", { content: "1:8" });
	}, 0, $scope0_id, "#text/0", $sg__input_section, $sg__input_section, $sg__input_section, 0, 0, 1);
	$si__input_section && writeScope($scope0_id, {}, "__tests__/tags/sections.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	sections_default({ section: attrTag({
		onClick: _resume(function() {
			count++;
		}, "__tests__/template.marko_0/onClick", $scope0_id),
		content: _content_resume("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(count)}${_el_resume($scope1_id, "#text/0")}`);
			_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
			_resume_branch($scope1_id);
		}, $scope0_id)
	}) });
	writeScope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
