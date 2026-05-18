// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	({ content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button></button>${_el_resume($scope1_id, "a")} `);
		_script($scope1_id, "a1");
		writeScope($scope1_id, {
			d: input.message,
			_: _scope_with_id($scope0_id)
		});
	}) }).content({ message: "hello" });
	writeScope($scope0_id, {});
}, 1);
