// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}<div${_attr_style({
		display: open ? undefined : "none",
		border: "1px solid black"
	})}>foo bar</div>${_el_resume($scope0_id, "#div/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:5" });
	_resume_branch($scope0_id);
}, 1);
