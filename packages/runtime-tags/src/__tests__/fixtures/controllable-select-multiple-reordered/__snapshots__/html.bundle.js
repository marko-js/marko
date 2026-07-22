// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let options = [
		"a",
		"b",
		"c"
	];
	let selected = ["b", "a"];
	_attr_select_value($scope0_id, "a", selected, _resume(function(v) {
		selected = v;
	}, "a0", $scope0_id), () => {
		_html("<select multiple>");
		_for_of(options, (opt) => {
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value(opt)}>${_escape(opt)}${_el_resume($scope1_id, "b")}</option>${_el_resume($scope1_id, "a")}`);
			writeScope($scope1_id, {});
		}, (v) => v, $scope0_id, "a", 1, 1, 1, "</select>", 1);
	});
	_html(`<span>sel:<!>${_escape(selected.join(","))}${_el_resume($scope0_id, "b")}</span><button>Add</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: options });
	_resume_branch($scope0_id);
}, 1);
