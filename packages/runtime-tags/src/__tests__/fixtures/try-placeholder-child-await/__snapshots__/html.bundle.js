// tags/child.marko
var child_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	_await(_scope_id(), "a", resolveAfter(input.value), (value) => {
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "a", value, $sg__input_value));
		_serialize_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, $sg__input_value);
});

// tags/boundary.marko
var boundary_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", _content_resume("b1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.value), (value) => {
			const $scope3_id = _scope_id();
			_html(_text_resume($scope3_id, "a", value, $sg__input_value));
			$si__input_value && _scope($scope3_id, {});
		}, $sg__input_value);
		$si__input_value && _subscribe($input_value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b2", 0);
		$si__input_value && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("b0", () => {
		_scope_reason();
		_scope_id();
		_html("loading inner");
	}, $scope0_id) }) });
	$si__input_value && _scope($scope0_id, { e: $input_value__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_serialize_reason(2);
		const $childScope = _peek_scope_id();
		child_default({ value: count });
		_subscribe($count__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), "a2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("loading changing");
	}, $scope0_id) }) });
	_try($scope0_id, "c", _content_resume("a4", () => {
		_scope_id();
		_scope_reason();
		child_default({ value: "static" });
	}, $scope0_id), { placeholder: attrTag({ content: _content("a3", () => {
		_scope_reason();
		_scope_id();
		_html("loading static");
	}, $scope0_id) }) }, 0);
	_try($scope0_id, "d", _content_resume("a6", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_set_serialize_reason(2);
		const $childScope2 = _peek_scope_id();
		boundary_default({ value: count });
		_subscribe($count__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope2),
			Cf: 1
		}), "a7");
	}, $scope0_id), { placeholder: attrTag({ content: _content("a5", () => {
		_scope_reason();
		_scope_id();
		_html("loading outer");
	}, $scope0_id) }) }, 0);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		e: count,
		f: $count__closures
	});
}, 1);
