// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let options = [
		"a",
		"b",
		"c"
	];
	let selected = ["b", "a"];
	_attr_select_value($scope0_id, "#select/0", selected, _resume(function(v) {
		selected = v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html("<select multiple>");
		_for_of(options, (opt) => {
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value(opt)}>${_escape(opt)}${_el_resume($scope1_id, "#text/1")}</option>${_el_resume($scope1_id, "#option/0")}`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
		}, (v) => v, $scope0_id, "#select/0", 1, 1, 1, "</select>", 1);
	});
	_html(`<span>sel:<!>${_escape(selected.join(","))}${_el_resume($scope0_id, "#text/1")}</span><button>Add</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { options }, "__tests__/template.marko", 0, { options: "1:6" });
	_resume_branch($scope0_id);
}, 1);
