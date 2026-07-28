// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = ["b", "c"];
	let options = [
		"x",
		"b",
		"c"
	];
	_attr_select_value($scope0_id, "a", value, _resume((_new_value) => {
		value = _new_value;
	}, "a0", $scope0_id), () => {
		_html("<select multiple>");
		_for_of(options, (opt) => {
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value(opt)}>${_escape(opt)}${_el_resume($scope1_id, "b")}</option>${_el_resume($scope1_id, "a")}`);
			writeScope($scope1_id, {});
		}, (v) => v, $scope0_id, "a", 1, 1, 1, "</select>", 1);
	});
	_html(`<div id=result>${_escape(value.join(","))}${_el_resume($scope0_id, "b")}</div><button class=reload>reload</button>${_el_resume($scope0_id, "c")}<button class=drop>drop</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
