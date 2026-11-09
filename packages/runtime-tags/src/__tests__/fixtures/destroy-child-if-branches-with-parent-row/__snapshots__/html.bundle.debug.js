// tags/c2.marko
var c2_default = _template("__tests__/tags/c2.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		if (input.on) {
			const $scope2_id = _scope_id();
			_script($scope2_id, "__tests__/tags/c2.marko_2", 0);
			_write_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/tags/c2.marko", "2:2");
			_resume_branch($scope2_id);
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_on, $wg__input_on);
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_script($scope1_id, "__tests__/tags/c2.marko_1_n#0:6", 0);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/c2.marko", "5:2");
			_resume_branch($scope1_id);
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $wg__input_on);
	_html(`<button class=inc></button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/c2.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/c2.marko", 0, { n: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_for_of(items, (it) => {
		const $scope1_id = _scope_id();
		c2_default({ on: true });
		_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/0");
	_html(`<button id=clear></button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
