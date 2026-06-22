// tags/sections.marko
var sections_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_section = _serialize_guard($scope0_reason, 0), $si__input_section = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.section, ({ content }) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (content) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", content, {}, 0, 0, $sg__input_section);
				$si__input_section && writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", $sg__input_section, $sg__input_section, $sg__input_section, void 0, void 0, 1);
		$si__input_section && writeScope($scope1_id, { d: content });
	}, 0, $scope0_id, "a", $sg__input_section, $sg__input_section, $sg__input_section, 0, 0, 1);
	$si__input_section && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	sections_default({ section: attrTag({
		onClick: _resume(function() {
			count++;
		}, "a0", $scope0_id),
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(count)}${_el_resume($scope1_id, "a")}`);
			_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}, $scope0_id)
	}) });
	writeScope($scope0_id, {
		b: count,
		Bb: $count__closures,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
