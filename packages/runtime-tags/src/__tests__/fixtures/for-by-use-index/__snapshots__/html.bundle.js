// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let messages = ["hello"];
	_html("<div>");
	_for_of(messages, (message, index) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_unescaped(message)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, { e: index });
	}, (f) => f, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_if(() => {}, $scope0_id, "b", 1, 1, 1, 0, 1);
	writeScope($scope0_id, { c: messages });
	_resume_branch($scope0_id);
}, 1);
