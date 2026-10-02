// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.name, $wg__input_name)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [0, 1];
	_html(`<button>Push</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(items, (outer) => {
		const $scope1_id = _scope_id();
		_for_of(items, (inner) => {
			const $scope2_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			child_default({ name: `${outer}.${inner}` });
			_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "5:4");
		}, 0, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
}, 1);
