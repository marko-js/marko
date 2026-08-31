// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = "";
	_html(`<div>d</div>${_text_resume($scope0_id, "#text/0", a)}`);
	_if(() => {
		if (true) {
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "#text/0", a));
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 0, 0, 0, 1);
	_for_of([1], (i) => {
		const $scope2_id = _scope_id();
		_html(`${_text_resume($scope2_id, "#text/0", a)} tail`);
		writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, 0, $scope0_id, "#text/2", 1, 0, 0);
	_html(`<input${_attr_input_value($scope0_id, "#input/3", a, _resume((_new_a) => {
		a = _new_a;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}>${_el_resume($scope0_id, "#input/3")}${_text_resume($scope0_id, "#text/4", a)}<button>set</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#input/3": ["valueChange"] });
	_resume_branch($scope0_id);
}, 1);
