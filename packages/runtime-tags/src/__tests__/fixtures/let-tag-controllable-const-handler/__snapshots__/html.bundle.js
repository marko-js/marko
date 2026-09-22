// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let out = "-";
	const onChange = _resume((next) => {
		out = String(next);
	}, "a0", $scope0_id);
	_html(`<button>${_text_resume($scope0_id, "b", 1)}</button>${_el_resume($scope0_id, "a")}<p id=out>${_text_resume($scope0_id, "c", out)}</p>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { g: onChange || void 0 });
}, 1);
