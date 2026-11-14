// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const D = { content: _content("__tests__/template.marko_1*content", ({ on, item }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				const { foo: $foo, ...rest } = item;
				_html(`<span${_attrs(rest, "#span/0", $scope2_id, "span")}>${_escape(item.foo)}</span>${_el_mark($scope2_id, "#span/0")}`);
				_script($scope2_id, "__tests__/template.marko_2_rest#1:6");
				_scope($scope2_id, {}, "__tests__/template.marko", "2:4", { "EventAttributes:#span/0": ["...rest", "4:14"] });
				return 0;
			}
		}, $scope1_id, "#text/0", 0, 0, 0, 0, 1);
	}, $scope0_id) };
	D.content({
		on: true,
		item: {
			foo: 1,
			bar: 2
		}
	});
}, 1);
