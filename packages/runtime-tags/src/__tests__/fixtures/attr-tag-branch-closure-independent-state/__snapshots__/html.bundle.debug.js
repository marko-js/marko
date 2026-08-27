// tags/sections.marko
var sections_default = _template("__tests__/tags/sections.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_section = _serialize_guard($scope0_reason, 0), $si__input_section = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.section, ({ content }) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_if(() => {
			if (content) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", content, {}, 0, 0, $sg__input_section);
				$si__input_section && writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/sections.marko", "2:9");
				return 0;
			}
		}, $scope1_id, "#div/0", $sg__input_section, $sg__input_section, $sg__input_section, "</div>");
		$si__input_section && writeScope($scope1_id, {}, "__tests__/tags/sections.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_section, $sg__input_section, $sg__input_section, 0, 1);
	$si__input_section && writeScope($scope0_id, {}, "__tests__/tags/sections.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 5;
	let n = 1;
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(1);
	let $section;
	forTo(n, 1, 1, (i) => {
		$section = attrTags($section, { content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(_escape(count));
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:6");
			_resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	sections_default({ section: $section });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		n,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		n: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
