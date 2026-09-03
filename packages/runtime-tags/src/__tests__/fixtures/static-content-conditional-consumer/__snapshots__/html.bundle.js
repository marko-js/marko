// tags/consumer.marko
var consumer_default = _template("b", (input) => {
	_serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: show
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	consumer_default({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("<div>static content</div>");
	}, _scope_id()) });
}, 1);
