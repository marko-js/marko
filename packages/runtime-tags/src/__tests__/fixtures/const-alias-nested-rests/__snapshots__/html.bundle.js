// template.marko
var template_default = _template("a", (input) => {
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
	_html(`<div>${_text_resume($scope0_id, "a", b)} ${_text_resume($scope0_id, "b", JSON.stringify(inner), 2)} ${_text_resume($scope0_id, "c", JSON.stringify(outer), 2)}</div><div>${_text_resume($scope0_id, "d", first)} ${_text_resume($scope0_id, "e", second, 2)} ${_text_resume($scope0_id, "f", last.join("+"), 2)}</div><button>update</button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
