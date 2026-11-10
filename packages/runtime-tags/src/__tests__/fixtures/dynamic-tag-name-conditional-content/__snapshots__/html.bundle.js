// tags/wrapper.marko
var wrapper_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", open, {});
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
	wrapper_default({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("Hello");
	}, $scope0_id) });
}, 1);
