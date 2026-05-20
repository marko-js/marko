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
		}, $scope1_id, "#text/0", $sg__input_section, $sg__input_section, $sg__input_section);
		$si__input_section && writeScope($scope1_id, { content }, "__tests__/tags/sections.marko", "1:2", { content: "1:8" });
	}, 0, $scope0_id, "#text/0", $sg__input_section, $sg__input_section, $sg__input_section);
	$si__input_section && writeScope($scope0_id, {}, "__tests__/tags/sections.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	sections_default({ section: attrTags(attrTag({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<div>static content</div>");
	}) }), { content: _content("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("<div>that never changes</div>");
	}) }) });
}, 1);
