// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let useBox = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	const Box = { content: _content_resume("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let count = 0;
		_html(`<button class=box>${_text_resume($scope1_id, "b", count)} `);
		_dynamic_tag($scope1_id, "c", input.content, {}, 0, 0, _serialize_guard($scope1_reason, 0));
		_html(`</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, { g: count });
	}, $scope0_id) };
	Box.content({ content: _content("a2", () => {
		_scope_reason();
		_scope_id();
		_html("static");
	}, $scope0_id) });
	_dynamic_tag($scope0_id, "c", "div", {}, _content_resume("a3", () => {
		_scope_id();
		_scope_reason();
		_html("dynamic");
	}, $scope0_id));
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		d: useBox,
		e: Box
	});
}, 1);
