// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let sel = ["a"];
	_html(`<input type=checkbox${_attrs_partial({
		checkedValue: sel,
		value: "a"
	}, { type: 1 }, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}<button>t</button>${_el_resume($scope0_id, "#button/1")}<div>${_escape(sel.join(","))}${_el_resume($scope0_id, "#text/2")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_sel");
	writeScope($scope0_id, { sel }, "__tests__/template.marko", 0, { sel: "1:6" });
	_resume_branch($scope0_id);
}, 1);
