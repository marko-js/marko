// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let log = "";
	forOf(["a", "b"], (label) => {
		const $scope1_id = _scope_id();
		_html(`<button>pick</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_label");
		writeScope($scope1_id, {
			label,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { label: "3:6" });
	});
	_html(`<div class=log>${_escape(log)}${_el_resume($scope0_id, "#text/1")}</div>`);
	writeScope($scope0_id, { log }, "__tests__/template.marko", 0, { log: "2:6" });
	_resume_branch($scope0_id);
}, 1);
