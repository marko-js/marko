// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}<svg></svg><math></math>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: n });
}, 1);
