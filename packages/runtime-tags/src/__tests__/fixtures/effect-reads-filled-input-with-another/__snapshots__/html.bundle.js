// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n + input.label)}</button>${_el_resume($scope0_id, "a")}<div></div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: input.label,
		g: input.other,
		i: n
	});
}, 1);
