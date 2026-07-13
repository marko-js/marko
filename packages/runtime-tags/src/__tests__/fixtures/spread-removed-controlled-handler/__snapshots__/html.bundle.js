// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "init";
	_html(`<input${_attrs({
		value,
		valueChange: _resume(function(next) {
			value = next;
		}, "a0", $scope0_id)
	}, "a", $scope0_id, "input")}>${_el_resume($scope0_id, "a")}<span>value=[<!>${_escape(value)}${_el_resume($scope0_id, "b")}]</span><button>drop</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
