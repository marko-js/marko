// tags/sections.marko
var sections_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_section = _serialize_guard($scope0_reason, 0), $si__input_section = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.section, ({ content }) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_if(() => {
			if (content) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", content, {}, 0, 0, $sg__input_section);
				$si__input_section && writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", $sg__input_section, $sg__input_section, $sg__input_section, "</div>");
		$si__input_section && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_section, $sg__input_section, $sg__input_section, 0, 1);
	$si__input_section && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 5;
	let n = 1;
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(1);
	let $section;
	forTo(n, 1, 1, (i) => {
		$section = attrTags($section, { content: _content("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(_escape(count));
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			_resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	sections_default({ section: $section });
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		c: count,
		d: n,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
