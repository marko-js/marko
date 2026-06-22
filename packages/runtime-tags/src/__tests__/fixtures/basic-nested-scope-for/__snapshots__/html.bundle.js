// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = 0;
	_for_of([
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12
	], (num) => {
		const $scope1_id = _scope_id();
		_html(`<button${_attr("data-selected", selected === num)}${_attr("data-multiple", num % selected === 0)}>${_escape(num)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, {
			d: num,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 0, 0, 0, 1, 1);
	_resume_branch($scope0_id);
}, 1);
