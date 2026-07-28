// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	let options = ["x", "b"];
	_attr_select_value($scope0_id, "#select/0", value, _resume((_new_value) => {
		value = _new_value;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html("<select>");
		_for_of(options, (opt) => {
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value(opt)}>${_escape(opt)}${_el_resume($scope1_id, "#text/1")}</option>${_el_resume($scope1_id, "#option/0")}`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
		}, (v) => v, $scope0_id, "#select/0", 1, 1, 1, "</select>", 1);
	});
	_html(`<div id=result>${_escape(value)}${_el_resume($scope0_id, "#text/1")}</div><button class=reload>reload</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
