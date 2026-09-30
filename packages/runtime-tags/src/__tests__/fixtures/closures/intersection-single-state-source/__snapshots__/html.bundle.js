// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button>increment</button>${_el_resume($scope0_id, "a")}<div>-- ${_text_resume($scope0_id, "b", count, 2)} -- ${_text_resume($scope0_id, "c", 2, 2)} -- ${_text_resume($scope0_id, "d", 3, 2)} -- ${_text_resume($scope0_id, "e", 5, 2)}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: count });
}, 1);
