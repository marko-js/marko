// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_await(_scope_id(), "a", resolveAfter(1, 1), (value) => {
		const $scope1_id = _scope_id();
		const obj = { get bad() {
			throw new Error("getter failed");
		} };
		_html(`<button>${_escape(value)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, { e: obj });
	});
}, 1);
