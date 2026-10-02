// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let z = {
		x: 1,
		y: 2
	};
	_html(`<div>${_escape(z.x)}</div>${_escape(z.y)}`);
}, 1);
