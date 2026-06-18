// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "";
	const rest = { placeholder: "p" };
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<input${_attrs({
		type: "checkbox",
		checkedValue: v,
		value: "",
		...rest
	}, "#input/1", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/1")}<output>${_escape(v === undefined ? "undefined" : "value=" + v)}${_el_resume($scope0_id, "#text/2")}</output>`);
	_script($scope0_id, "__tests__/template.marko_0_v_rest");
	_script($scope0_id, "__tests__/template.marko_0_v");
	writeScope($scope0_id, {
		v,
		rest
	}, "__tests__/template.marko", 0, {
		v: "1:6",
		rest: "2:8"
	});
	_resume_branch($scope0_id);
}, 1);
