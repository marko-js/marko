// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = "pending";
	const root = (() => {
		const root = { name: "root" };
		const set = new Set();
		set.add(root);
		root.set = set;
		return root;
	})();
	_html(`<button>${_escape(checked)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { root }, "__tests__/template.marko", 0, { root: "2:8" });
	_resume_branch($scope0_id);
}, 1);
