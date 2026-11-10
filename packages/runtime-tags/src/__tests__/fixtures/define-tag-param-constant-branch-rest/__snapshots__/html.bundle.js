// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	({ content: _content("a1", ({ on, item }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				const { foo: $foo, ...rest } = item;
				_html(`<span${_attrs(rest, "a", $scope2_id, "span")}>${_text_mark($scope2_id, "b", item.foo, 0)}</span>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", 0, 0, 0, 0, 1);
	}, $scope0_id) }).content({
		on: true,
		item: {
			foo: 1,
			bar: 2
		}
	});
}, 1);
