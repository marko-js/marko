// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const bump = () => {
		count = 1;
		return count;
	};
	_html(`<div>${_text_mark($scope0_id, "#text/0", bump())}</div>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
