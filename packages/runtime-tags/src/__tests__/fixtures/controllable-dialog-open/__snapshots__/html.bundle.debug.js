// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<dialog${_attr_dialog_open($scope0_id, "#dialog/0", open, _resume((_new_open) => {
		open = _new_open;
	}, "__tests__/template.marko_0/openChange", $scope0_id))}></dialog>${_el_resume($scope0_id, "#dialog/0")}<span>${_text_resume($scope0_id, "#text/1", String(open))}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#dialog/0": ["openChange"] });
}, 1);
