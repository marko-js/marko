// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let total = 0;
	let seen = "";
	forOf([
		1,
		2,
		3
	], (i) => {
		const $scope1_id = _scope_id();
		_html(`<button>pick ${_escape(i)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_i");
		writeScope($scope1_id, {
			i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:2", { i: "4:6" });
	});
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/1")}<div class=total>${_escape(total)}${_el_resume($scope0_id, "#text/2")}</div><div class=seen>${_escape(seen)}${_el_resume($scope0_id, "#text/3")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		total,
		seen
	}, "__tests__/template.marko", 0, {
		total: "2:6",
		seen: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
