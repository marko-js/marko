// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "v1";
	let wrong = "";
	const state = {
		v,
		vChange: _resume(function(x) {
			v = x;
		}, "__tests__/template.marko_0/state", $scope0_id),
		keyChange: _resume(function(x) {
			wrong = x;
		}, "__tests__/template.marko_0/state2", $scope0_id)
	};
	_html(`<div>v=<!>${_escape(v)}${_el_resume($scope0_id, "#text/0")}|wrong=<!>${_escape(wrong)}${_el_resume($scope0_id, "#text/1")}</div><input${_attr_input_value($scope0_id, "#input/2", state["v"], state["v" + "Change"])}>${_el_resume($scope0_id, "#input/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { state }, "__tests__/template.marko", 0, { state: "6:8" });
	_resume_branch($scope0_id);
}, 1);
