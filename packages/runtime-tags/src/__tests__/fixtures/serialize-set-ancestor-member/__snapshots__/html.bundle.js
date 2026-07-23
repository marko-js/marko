// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = "pending";
	const root = (() => {
		const root = { name: "root" };
		const set = /* @__PURE__ */ new Set();
		set.add(root);
		root.set = set;
		return root;
	})();
	_html(`<button>${_escape(checked)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: root });
	_resume_branch($scope0_id);
}, 1);
