// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	const MyTag = { content: _content("a0", ({ name, count }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__name = _write_guard($scope1_reason, 1), $wg__count = _write_guard($scope1_reason, 2);
		_html(`<div>Hello ${_text_resume($scope1_id, "a", name, $wg__name * 2)} ${_text_resume($scope1_id, "b", count, $wg__count * 2)}</div>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	MyTag.content({
		name: "Ryan",
		count
	});
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: count,
		c: _existing_scope($childScope)
	});
}, 1);
