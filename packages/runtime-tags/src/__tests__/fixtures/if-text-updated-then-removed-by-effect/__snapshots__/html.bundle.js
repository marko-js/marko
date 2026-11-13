// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(_text_mark($scope1_id, "a", n));
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: n });
}, 1);
