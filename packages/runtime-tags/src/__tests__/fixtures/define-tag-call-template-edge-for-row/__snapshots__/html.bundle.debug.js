// tags/row.marko
var row_default = _template("__tests__/tags/row.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Item = { content: _content("__tests__/tags/row.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0);
		_html(`<li>${_text_mark($scope1_id, "#text/0", label, $wg__label)}</li>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/row.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	Item.content({ label: input.label });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/row.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let labels = ["a", "b"];
	_html("<ul>");
	_for_of(labels, (label) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		row_default({ label });
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button id=add>Add</button>${_el_mark($scope0_id, "#button/1")}<button id=remove>Remove</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { labels }, "__tests__/template.marko", 0, { labels: "1:6" });
}, 1);
