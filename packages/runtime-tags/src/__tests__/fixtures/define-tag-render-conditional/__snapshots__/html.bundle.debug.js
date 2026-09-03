// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let x = 1;
	const MyTag = { content: _content("__tests__/template.marko_2*content", ({ value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__value = _serialize_guard($scope2_reason, 0);
		_html(`<div>Hello ${_text_resume($scope2_id, "#text/0", value, $sg__value * 2)}</div>`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "4:2");
	}, $scope0_id) };
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			MyTag.content({ value: x });
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>${_text_resume($scope0_id, "#text/2", x)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "2:6" });
}, 1);
