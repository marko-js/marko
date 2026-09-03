// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let messages = ["hello"];
	let last = void 0;
	_html("<div>");
	_for_of(messages, (message, index) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_html_resume($scope1_id, "b", message)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, { e: index });
	}, (f) => f, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_if(() => {}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_scope($scope0_id, {
		c: messages,
		d: last
	});
}, 1);
