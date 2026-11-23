// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = input.start;
	const reset = () => {
		count = 0;
		return "";
	};
	_html(`<div>${_escape(reset())}${_text_mark($scope0_id, "#text/1", count, 2)}</div>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
