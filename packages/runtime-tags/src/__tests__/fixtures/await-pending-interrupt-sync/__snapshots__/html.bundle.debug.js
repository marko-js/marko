// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let showAsync = true;
	_await($scope0_id, "#text/0", showAsync ? resolveAfter("ASYNC") : "SYNC", (value) => {
		const $scope1_id = _scope_id();
		_html(`Got: <!>${_escape(value)}${_el_resume($scope1_id, "#text/0")}`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_showAsync");
	writeScope($scope0_id, { showAsync }, "__tests__/template.marko", 0, { showAsync: "2:6" });
	_resume_branch($scope0_id);
}, 1);
