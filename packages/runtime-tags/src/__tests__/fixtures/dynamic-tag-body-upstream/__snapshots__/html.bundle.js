// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_foo = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.foo, $sg__input_foo)}</em>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_foo = _serialize_guard($scope0_reason, 2), $si__input_foo = _serialize_if($scope0_reason, 2), $si__input_tag__OR__input_foo = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_foo__closures = /* @__PURE__ */ new Set();
	let tag = "div";
	_dynamic_tag($scope0_id, "a", input.tag, {}, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_serialize_reason($sg__input_foo << 1);
		const $childScope = _peek_scope_id();
		child_default({ foo: input.foo });
		$si__input_tag__OR__input_foo && _subscribe($si__input_foo && $input_foo__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: $si__input_foo && _existing_scope($childScope)
		}));
		$sg__input_foo || $si__input_tag__OR__input_foo && _resume_branch($scope1_id);
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 1));
	_dynamic_tag($scope0_id, "b", tag, {}, _content_resume("a1", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_set_serialize_reason($sg__input_foo << 1);
		const $childScope2 = _peek_scope_id();
		child_default({ foo: input.foo });
		_subscribe($si__input_foo && $input_foo__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			a: $si__input_foo && _existing_scope($childScope2),
			Ci: $si__input_foo && 1
		}));
		$sg__input_foo || _resume_branch($scope2_id);
	}, $scope0_id));
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		g: input.foo,
		h: tag,
		i: $si__input_foo && $input_foo__closures
	});
}, 1);
