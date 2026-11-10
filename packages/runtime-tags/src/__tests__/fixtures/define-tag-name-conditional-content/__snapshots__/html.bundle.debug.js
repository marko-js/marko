// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrapper = { content: _content("__tests__/template.marko_1*content", ({ content }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let open = false;
		_html(`<button id=toggle>toggle</button>${_el_mark($scope1_id, "#button/0")}`);
		_dynamic_tag($scope1_id, "#text/1", open ? content : undefined, {});
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			content,
			open
		}, "__tests__/template.marko", "1:2", {
			content: "1:19",
			open: "2:8"
		});
	}, $scope0_id) };
	Wrapper.content({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("Hello");
	}, $scope0_id) });
}, 1);
