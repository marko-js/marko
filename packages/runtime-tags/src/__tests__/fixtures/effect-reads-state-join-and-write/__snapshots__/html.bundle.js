// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const x = n + input.label;
	_html(`<button>${_text_resume($scope0_id, "b", x)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.label,
		f: input.other,
		g: n,
		i: x
	});
}, 1);
