// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let x = 1;
	const MyTag = { content: _content("__tests__/template.marko_2_content", ({ value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__value = _serialize_guard($scope2_reason, 0);
		_html(`<div>Hello ${_sep($sg__value)}${_escape(value)}${_el_resume($scope2_id, "#text/0", $sg__value)}</div>`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {}, "__tests__/template.marko", "4:2");
	}) };
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			MyTag.content({ value: x });
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "2:6" });
	_resume_branch($scope0_id);
}, 1);
