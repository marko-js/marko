// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "a", count)}</span>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_for_until(count, 0, 1, (x) => {
		const $scope2_id = _scope_id();
		_html(_escape(x));
		_scope($scope2_id, {});
	}, 0, $scope0_id, "b");
	_html(`<button>inc</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: count });
}, 1);
