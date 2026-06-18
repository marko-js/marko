// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_option = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<select${_attr_class(input.class)}>`);
	_for_of(input.option, (option) => {
		const $scope1_id = _scope_id();
		_html("<option");
		_attrs_content(option, "a", $scope1_id, "option");
		_html(`</option>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_option, _serialize_guard($scope0_reason, 0), $sg__input_option, "</select>", 1);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { class: _class, ...rest } = input;
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 0),
		1: _serialize_guard($scope0_reason, 1)
	});
	child_default({
		class: _class,
		...rest
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	wrap_default({
		class: "foo",
		option: attrTags(attrTags(attrTag({
			value: 1,
			content: _content_resume("a0", () => {
				_scope_reason();
				_scope_id();
				_html("One");
			}, $scope0_id)
		}), {
			value: 2,
			content: _content_resume("a1", () => {
				_scope_reason();
				_scope_id();
				_html("Two");
			}, $scope0_id)
		}), {
			value: 3,
			content: _content_resume("a2", () => {
				_scope_reason();
				_scope_id();
				_html("Three");
			}, $scope0_id)
		})
	});
}, 1);
