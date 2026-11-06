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
	const key = input.key;
	_html(`<div>${_escape(a)}-${_text_mark($scope0_id, "b", o[rest] ?? "-", 2)}-${_text_mark($scope0_id, "c", o[rest.b] ?? "-", 2)}-${_text_mark($scope0_id, "d", o[key.name] ?? "-", 2)}</div><button class=mutate>mutate</button>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: o,
		l: rest,
		n: rest.b,
		p: key,
		q: key?.name
	});
}, 1);
