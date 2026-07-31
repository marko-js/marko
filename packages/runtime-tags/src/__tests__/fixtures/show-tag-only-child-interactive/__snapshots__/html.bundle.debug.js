// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	let n = 0;
	_html_opens("__tests__/template.marko:4:1", "__tests__/template.marko:6:1"), _html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}<div>`);
	_show_start(open, 0, "__tests__/template.marko:7:3");
	_html_opens("__tests__/template.marko:8:5"), _html(`<button id=inc>count <!>${_escape(n)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}`);
	_show_end($scope0_id, "#div/1", open, 1, 1, "</div>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		open,
		n
	}, "__tests__/template.marko", 0, {
		open: "1:6",
		n: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
