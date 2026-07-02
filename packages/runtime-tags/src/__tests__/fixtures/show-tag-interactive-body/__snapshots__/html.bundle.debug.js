// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_show_start(visible, 1);
	let count = 0;
	_html(`<button id=inc>count <!>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}`);
	_show_end($scope0_id, "#text/4", visible);
	_script($scope0_id, "__tests__/template.marko_0_count");
	_script($scope0_id, "__tests__/template.marko_0_visible");
	writeScope($scope0_id, {
		visible,
		count
	}, "__tests__/template.marko", 0, {
		visible: "1:6",
		count: "4:8"
	});
	_resume_branch($scope0_id);
}, 1);
