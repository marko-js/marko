// template.marko
const boss = { name: "merge_conflict" };
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let dbg = false;
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (dbg) {
			const $scope1_id = _scope_id();
			_html(_escape(boss.name));
			writeScope($scope1_id, {}, "__tests__/template.marko", "9:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
