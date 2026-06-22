// tags/my-for.marko
var my_for_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_to = _serialize_guard($scope0_reason, 1), $sg__input_to__OR__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (...args) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, [...args], 0, 1, $sg__input_to__OR__input_content);
		_serialize_if($scope0_reason, 0) && writeScope($scope1_id, {
			b: _serialize_if($scope0_reason, 2) && $params2,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", $sg__input_to__OR__input_content, $sg__input_to, $sg__input_to, 0, 0, 1);
	_serialize_if($scope0_reason, 1) && writeScope($scope0_id, { e: input.content });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	my_for_default({
		to: 5,
		content: _content_resume("a0", (i) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(i)}${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 0))}`);
			_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
		}, _scope_id())
	});
}, 1);
