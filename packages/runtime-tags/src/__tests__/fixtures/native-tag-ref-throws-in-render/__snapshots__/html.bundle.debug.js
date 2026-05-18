// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}<div>${_escape((($el) => $el())(_el_read_error))}</div>`);
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
