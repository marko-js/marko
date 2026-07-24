// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	let shown = false;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "a")}<button id=toggle>toggle</button>${_el_resume($scope0_id, "b")}<div id=visible>visible <!>${_escape(n)}${_el_resume($scope0_id, "c")}</div>`);
	_show_start(shown);
	_html(`<div id=hidden>hidden <!>${_escape(n)}${_el_resume($scope0_id, "e")}</div>`);
	_show_end($scope0_id, "f", shown, 1, 1, 0, 1);
	_await($scope0_id, "g", resolveAfter(n), (v) => {
		const $scope1_id = _scope_id();
		_html(`<div id=awaited>awaited <!>${_escape(v)}${_el_resume($scope1_id, "a")}</div>`);
		writeScope($scope1_id, {});
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		h: n,
		i: shown
	});
	_resume_branch($scope0_id);
}, 1);
