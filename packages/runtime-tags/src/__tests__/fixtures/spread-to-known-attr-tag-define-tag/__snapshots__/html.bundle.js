// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("a1", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<select${_attr_class(input.class)}>`);
		_for_of(input.option, (option) => {
			const $scope3_id = _scope_id();
			_html("<option");
			_attrs_content(option, "a", $scope3_id, "option");
			_html(`</option>${_el_mark($scope3_id, "a")}`);
			_script($scope3_id, "a0");
			_scope($scope3_id, {});
		}, 0, $scope1_id, "a", 0, 0, 0, "</select>", 1);
	}, $scope0_id) };
	({ content: _content("a2", ({ class: _class, ...rest }) => {
		_scope_id();
		_scope_reason();
		_set_scope_reason(0);
		Child.content({
			class: _class,
			...rest
		});
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
