// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	let shown = false;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "#button/0")}<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}<div id=visible>visible <!>${_escape(n)}${_el_resume($scope0_id, "#text/2")}</div>`);
	_show_start(shown);
	_html(`<div id=hidden>hidden <!>${_escape(n)}${_el_resume($scope0_id, "#text/4")}</div>`);
	_show_end($scope0_id, "#text/5", shown, 1, 1, 0, 1);
	_await($scope0_id, "#text/6", resolveAfter(n), (v) => {
		const $scope1_id = _scope_id();
		_html(`<div id=awaited>awaited <!>${_escape(v)}${_el_resume($scope1_id, "#text/0")}</div>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "13:2");
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		shown
	}, "__tests__/template.marko", 0, {
		n: "3:6",
		shown: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
