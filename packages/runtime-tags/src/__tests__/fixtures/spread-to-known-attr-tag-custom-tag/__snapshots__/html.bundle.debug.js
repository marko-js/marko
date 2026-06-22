// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_option = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<select${_attr_class(input.class)}>`);
	_for_of(input.option, (option) => {
		const $scope1_id = _scope_id();
		_html("<option");
		_attrs_content(option, "#option/0", $scope1_id, "option");
		_html(`</option>${_el_resume($scope1_id, "#option/0")}`);
		_script($scope1_id, "__tests__/tags/child.marko_1_option");
		writeScope($scope1_id, {}, "__tests__/tags/child.marko", "2:4");
	}, 0, $scope0_id, "#select/0", $sg__input_option, _serialize_guard($scope0_reason, 0), $sg__input_option, "</select>", 1, 1);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
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
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/wrap.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	wrap_default({
		class: "foo",
		option: attrTags(attrTags(attrTag({
			value: 1,
			content: _content_resume("__tests__/template.marko_1_content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html("One");
			}, $scope0_id)
		}), {
			value: 2,
			content: _content_resume("__tests__/template.marko_2_content", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("Two");
			}, $scope0_id)
		}), {
			value: 3,
			content: _content_resume("__tests__/template.marko_3_content", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html("Three");
			}, $scope0_id)
		})
	});
}, 1);
