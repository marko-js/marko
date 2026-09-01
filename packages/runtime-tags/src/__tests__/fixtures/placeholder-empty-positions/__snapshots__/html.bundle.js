// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = "";
	_html(`<div>d</div>${_text_resume($scope0_id, "a", a)}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "a", a));
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, 0, 0, 0, 1);
	_for_of([1], (i) => {
		const $scope2_id = _scope_id();
		_html(`${_text_resume($scope2_id, "a", a)} tail`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "c", 1, 0, 0);
	_html(`<input${_attr_input_value($scope0_id, "d", a, _resume((_new_a) => {
		a = _new_a;
	}, "a0", $scope0_id))}>${_el_resume($scope0_id, "d")}${_text_resume($scope0_id, "e", a)}<button>set</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
