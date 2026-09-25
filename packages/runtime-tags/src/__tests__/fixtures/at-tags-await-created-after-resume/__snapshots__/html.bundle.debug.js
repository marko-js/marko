// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = false;
	_html(`<button id=show>show</button>${_el_resume($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/1", input.item, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
				_scope($scope2_id, {}, "__tests__/tags/child.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_subscribe($show__closures, _scope($scope1_id, {
			item_content: item?.content,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "4:2", { item_content: ["item.content", "4:8"] }), "__tests__/tags/child.marko_1_show#5/subscribe");
	});
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, {
		show: _serialize_if($scope0_reason, 0) && show,
		"ClosureScopes:show": $show__closures
	}, "__tests__/tags/child.marko", 0, { show: "2:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	child_default({ item: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`Item ${_text_resume($scope1_id, "#text/0", count, 2)}`);
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_1_count#2/subscribe");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
