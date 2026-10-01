// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("a1", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_option = _write_guard($scope1_reason, 1), $wg__input_class__OR__input_option = _write_guard($scope1_reason, 0);
		_html(`<select${_attr_class(input.class)}>`);
		_for_of(input.option, (option) => {
			const $scope3_id = _scope_id();
			_html("<option");
			_attrs_content(option, "a", $scope3_id, "option");
			_html(`</option>${_el_resume($scope3_id, "a")}`);
			_script($scope3_id, "a0");
			_scope($scope3_id, {});
		}, 0, $scope1_id, "a", $wg__input_option, $wg__input_class__OR__input_option, $wg__input_option, "</select>", 1);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	({ content: _content("a2", ({ class: _class, ...rest }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg___class__OR__rest_option = _write_guard($scope2_reason, 0);
		_set_scope_reason($wg___class__OR__rest_option << 1 | _write_guard($scope2_reason, 1) << 3);
		const $childScope = _peek_scope_id();
		Child.content({
			class: _class,
			...rest
		});
		_write_if($scope2_reason, 0) && _scope($scope2_id, { a: _existing_scope($childScope) });
	}, $scope0_id) }).content({
		class: "foo",
		option: attrTags(attrTags(attrTag({
			value: 1,
			content: _content("a3", () => {
				_scope_reason();
				_scope_id();
				_html("One");
			}, $scope0_id)
		}), {
			value: 2,
			content: _content("a4", () => {
				_scope_reason();
				_scope_id();
				_html("Two");
			}, $scope0_id)
		}), {
			value: 3,
			content: _content("a5", () => {
				_scope_reason();
				_scope_id();
				_html("Three");
			}, $scope0_id)
		})
	});
}, 1);
