// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
		_html(`<button${_attr("data-selected", selected === num)}${_attr("data-multiple", num % selected === 0)}>${_escape(num)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_num");
		writeScope($scope1_id, {
			num,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { num: "3:6" });
	}, 0, $scope0_id, "#text/0", 1, 0, 0, 0, 1, 1);
	_resume_branch($scope0_id);
}, 1);
