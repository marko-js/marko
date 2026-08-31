// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_a = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const { a } = input;
	let b = a * 2;
	_html(`<button>Increment</button>${_el_resume($scope0_id, "a")}${_escape(a) || _sep($sg__input_a)}${_el_resume($scope0_id, "b", $sg__input_a)} <!>${_escape(b)}${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { g: b });
	_resume_branch($scope0_id);
}, 1);
