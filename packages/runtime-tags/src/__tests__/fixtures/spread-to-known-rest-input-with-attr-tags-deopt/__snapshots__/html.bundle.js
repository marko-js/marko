// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_foo = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { foo } = input;
	_for_of(foo, ({ desc, ...item }) => {
		const $scope1_id = _scope_id();
		_html(`<span${_attrs(item, "a", $scope1_id, "span")}>`);
		_dynamic_tag($scope1_id, "b", desc, {}, 0, 0, $sg__input_foo);
		_html(`</span>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		writeScope($scope1_id, { f: item });
	}, 0, $scope0_id, "a", $sg__input_foo, $sg__input_foo, $sg__input_foo, 0, 1);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_foo = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_foo__closures = /* @__PURE__ */ new Set();
	const { class: _class, foo, ...rest } = input;
	_html(" ");
	_dynamic_tag($scope0_id, "a", _class ? "span" : "div", {
		...rest,
		class: _class
	}, _content_resume("c0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $childScope = _peek_scope_id();
		_set_serialize_reason(_serialize_guard($scope0_reason, 1));
		child_default({ foo: input.foo });
		_subscribe($si__input_foo && $input_foo__closures, writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: $si__input_foo && _existing_scope($childScope)
		}));
		_resume_branch($scope1_id);
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 0));
	writeScope($scope0_id, {
		d: input.foo,
		e: _serialize_if($scope0_reason, 3) && _class,
		f: _serialize_if($scope0_reason, 2) && rest,
		Bd: $si__input_foo && $input_foo__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input,
		2: $sg__input
	});
	wrap_default({
		"data-one": 2,
		"data-foo": 1,
		...input,
		foo: attrTags(attrTag({
			value: 1,
			desc: attrTag({ content: _content_resume("a0", () => {
				_scope_reason();
				_scope_id();
				_html("One");
			}, $scope0_id) })
		}), {
			value: 1,
			desc: attrTag({ content: _content_resume("a1", () => {
				_scope_reason();
				_scope_id();
				_html("Two");
			}, $scope0_id) })
		})
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
