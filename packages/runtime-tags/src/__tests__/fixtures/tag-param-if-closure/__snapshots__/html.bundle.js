// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const a = "abc";
	const Foo = { content: _content("a0", (input) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_dynamic_tag($scope3_id, "a", input.content, [input.value], 0, 1, _serialize_guard($scope3_reason, 0));
		_serialize_if($scope3_reason, 0) && writeScope($scope3_id, {
			d: _serialize_if($scope3_reason, 2) && input.content,
			e: _serialize_if($scope3_reason, 1) && input.value
		});
	}) };
	_html(`<button>Increment</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(10);
	Foo.content({
		value: count,
		content: _content_resume("a1", (v) => {
			const $sg__v = _serialize_guard(_scope_reason(), 0);
			const $scope1_id = _scope_id();
			_if(() => {
				if (v) {
					const $scope2_id = _scope_id();
					_html(_escape(a));
					writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a", $sg__v, $sg__v, $sg__v, 0, 1);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		c: count,
		d: a,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
