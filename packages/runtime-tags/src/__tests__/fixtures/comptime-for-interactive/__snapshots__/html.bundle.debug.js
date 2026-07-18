// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let $on = false;
	let $on2 = false;
	_html(`<section><h2>kitchen</h2><button>${$on ? "off" : "on"}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}</section><section><h2>porch</h2><button>${$on2 ? "off" : "on"}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}</section>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		$on,
		$on2
	}, "__tests__/template.marko", 0, {
		$on: "4:8",
		$on2: "4:8"
	});
	_resume_branch($scope0_id);
}, 1);
