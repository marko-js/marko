// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let sel = ["a"];
	_html(`<input type=checkbox${_attrs_partial({
		checkedValue: sel,
		value: "a"
	}, { type: 1 }, "a", $scope0_id, "input")}>${_el_resume($scope0_id, "a")}<button>t</button>${_el_resume($scope0_id, "b")}<div>${_escape(sel.join(","))}${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: sel });
	_resume_branch($scope0_id);
}, 1);
