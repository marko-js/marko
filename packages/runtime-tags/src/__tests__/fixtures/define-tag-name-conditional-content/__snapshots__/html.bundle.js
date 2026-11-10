// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	({ content: _content("a0", ({ content }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let open = false;
		_html(`<button id=toggle>toggle</button>${_el_mark($scope1_id, "a")}`);
		_dynamic_tag($scope1_id, "b", void 0, {});
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			e: content,
			f: open
		});
	}, $scope0_id) }).content({ content: _content_resume("a2", () => {
		_scope_reason();
		_scope_id();
		_html("Hello");
	}, $scope0_id) });
}, 1);
