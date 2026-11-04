// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button id=add>add</button>${_el_resume($scope0_id, "a")}`);
	_for_until(count, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		card_default({ content: _content_resume("a0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`item ${_escape(i)}`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
			_resume_branch($scope2_id);
		}, $scope1_id) });
		_scope($scope1_id, { M: i });
	}, 0, $scope0_id, "b");
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: count });
}, 1);
