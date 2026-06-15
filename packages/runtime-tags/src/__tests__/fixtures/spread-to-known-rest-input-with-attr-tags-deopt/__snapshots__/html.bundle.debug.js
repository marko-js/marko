// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_foo = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { foo } = input;
	_for_of(foo, ({ desc, ...item }) => {
		const $scope1_id = _scope_id();
		_html(`<span${_attrs(item, "#span/0", $scope1_id, "span")}>`);
		_dynamic_tag($scope1_id, "#text/1", desc, {}, 0, 0, $sg__input_foo);
		_html(`</span>${_el_resume($scope1_id, "#span/0")}`);
		_script($scope1_id, "__tests__/tags/child.marko_1_item");
		writeScope($scope1_id, { item }, "__tests__/tags/child.marko", "2:2", { item: "2:17" });
	}, 0, $scope0_id, "#text/0", $sg__input_foo, $sg__input_foo, $sg__input_foo, 0, 1);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_foo = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_foo__closures = new Set();
	const { class: _class, foo, ...rest } = input;
	_html(" ");
	_dynamic_tag($scope0_id, "#text/0", _class ? "span" : "div", {
		...rest,
		class: _class
	}, _content_resume("__tests__/tags/wrap.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $childScope = _peek_scope_id();
		_set_serialize_reason(_serialize_guard($scope0_reason, 1));
		child_default({ foo: input.foo });
		_subscribe($si__input_foo && $input_foo__closures, writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $si__input_foo && _existing_scope($childScope)
		}, "__tests__/tags/wrap.marko", "2:4"));
		_resume_branch($scope1_id);
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 0));
	writeScope($scope0_id, {
		input_foo: input.foo,
		_class: _serialize_if($scope0_reason, 3) && _class,
		rest: _serialize_if($scope0_reason, 2) && rest,
		"ClosureScopes:input_foo": $si__input_foo && $input_foo__closures
	}, "__tests__/tags/wrap.marko", 0, {
		input_foo: ["input.foo"],
		_class: "1:17",
		rest: "1:33"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input,
		2: $sg__input,
		3: $sg__input
	});
	wrap_default({
		"data-one": 2,
		"data-foo": 1,
		...input,
		foo: attrTags(attrTag({
			value: 1,
			desc: attrTag({ content: _content_resume("__tests__/template.marko_1_content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html("One");
			}, $scope0_id) })
		}), {
			value: 1,
			desc: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("Two");
			}, $scope0_id) })
		})
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
