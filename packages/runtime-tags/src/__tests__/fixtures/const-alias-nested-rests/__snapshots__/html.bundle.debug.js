// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = {
		a: {
			b: 1,
			c: 2
		},
		d: 3
	};
	const { a: { b, ...inner }, ...outer } = obj;
	const [first, ...tail] = [
		obj.d,
		4,
		5,
		6
	];
	const [second, ...last] = tail;
	_html(`<div>${_text_resume($scope0_id, "#text/0", b)} ${_text_resume($scope0_id, "#text/1", JSON.stringify(inner), 2)} ${_text_resume($scope0_id, "#text/2", JSON.stringify(outer), 2)}</div><div>${_text_resume($scope0_id, "#text/3", first)} ${_text_resume($scope0_id, "#text/4", second, 2)} ${_text_resume($scope0_id, "#text/5", last.join("+"), 2)}</div><button>update</button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
