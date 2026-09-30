// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let y = 1;
	_html(`<button>${_text_resume($scope0_id, "b", x)}</button>${_el_resume($scope0_id, "a")}${_text_resume($scope0_id, "c", y)}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: x,
		e: y,
		f: void 0
	});
}, 1);
