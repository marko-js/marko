// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("__tests__/template.marko_1_content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_option = _serialize_guard($scope1_reason, 1);
		_html(`<select${_attr_class(input.class)}>`);
		_for_of(input.option, (option) => {
			const $scope3_id = _scope_id();
			_html("<option");
			_attrs_content(option, "#option/0", $scope3_id, "option");
			_html(`</option>${_el_resume($scope3_id, "#option/0")}`);
			_script($scope3_id, "__tests__/template.marko_3_option");
			writeScope($scope3_id, {}, "__tests__/template.marko", "3:6");
		}, 0, $scope1_id, "#select/0", $sg__input_option, _serialize_guard($scope1_reason, 0), $sg__input_option, "</select>", 1);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}) };
	const Wrap = { content: _content("__tests__/template.marko_2_content", ({ class: _class, ...rest }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		const $childScope = _peek_scope_id();
		_set_serialize_reason({
			0: _serialize_guard($scope2_reason, 0),
			1: _serialize_guard($scope2_reason, 1)
		});
		Child.content({
			class: _class,
			...rest
		});
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "9:2");
	}) };
	Wrap.content({
		class: "foo",
		option: attrTags(attrTags(attrTag({
			value: 1,
			content: _content_resume("__tests__/template.marko_4_content", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html("One");
			}, $scope0_id)
		}), {
			value: 2,
			content: _content_resume("__tests__/template.marko_5_content", () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html("Two");
			}, $scope0_id)
		}), {
			value: 3,
			content: _content_resume("__tests__/template.marko_6_content", () => {
				_scope_reason();
				const $scope6_id = _scope_id();
				_html("Three");
			}, $scope0_id)
		})
	});
}, 1);
