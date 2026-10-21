// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = {};
	const { a, ...rest } = {
		a: 1,
		b: 2,
		c: 3
	};
	_html(`<div>${_escape(a)}-${_text_resume($scope0_id, "b", o[rest] ?? "-", 2)}-${_text_resume($scope0_id, "c", o[rest.b] ?? "-", 2)}</div><button class=mutate>mutate</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: o,
		h: rest,
		j: rest.b
	});
}, 1);
