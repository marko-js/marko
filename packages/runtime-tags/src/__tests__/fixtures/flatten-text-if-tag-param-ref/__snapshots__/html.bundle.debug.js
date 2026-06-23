// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	forOf([
		"a",
		"b",
		"c"
	], (item) => {
		const $scope1_id = _scope_id();
		_html(`<div>${item ? _escape(`${_to_text(item)}`) : ""}</div>`);
	});
}, 1);
