// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>Clicked ${_text_resume($scope0_id, "#text/1", clicks, 2)} times</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_clicks#2");
	writeScope($scope0_id, { clicks }, "__tests__/template.marko", 0, { clicks: "1:6" });
	_resume_branch($scope0_id);
}, 1);
