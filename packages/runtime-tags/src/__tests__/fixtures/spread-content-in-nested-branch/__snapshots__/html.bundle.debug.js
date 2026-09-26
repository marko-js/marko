// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html("<div");
				_attrs_content(item, "#div/0", $scope2_id, "div");
				_html(`</div>${_el_resume($scope2_id, "#div/0")}`);
				_script($scope2_id, "__tests__/tags/list.marko_2_item#2");
				_scope($scope2_id, {}, "__tests__/tags/list.marko", "4:4", { "EventAttributes:#div/0": ["...item", "5:13"] });
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		_scope($scope1_id, {
			item,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/list.marko", "3:2", { item: "3:6" });
	}, 0, $scope0_id, "#text/1", 1, $sg__input_item, $sg__input_item);
	_script($scope0_id, "__tests__/tags/list.marko_0");
	_scope($scope0_id, { show }, "__tests__/tags/list.marko", 0, { show: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	list_default({ item: attrTag({
		class: "a",
		content: _content_resume("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`One ${_text_resume($scope1_id, "#text/0", count, 2)}`);
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_1_count#2/subscribe");
		}, $scope0_id)
	}) });
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/3": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
