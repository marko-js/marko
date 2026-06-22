// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	const getMessage = _resume(() => input.message, "a0", $scope0_id);
	_html("<div>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, "</div>", 1, 1);
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		f: input.message,
		g: x,
		h: getMessage
	});
	_resume_branch($scope0_id);
}, 1);
