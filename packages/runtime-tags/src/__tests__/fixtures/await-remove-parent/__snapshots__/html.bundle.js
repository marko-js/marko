// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=outside>Pass</div>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", resolveAfter(0, 1), () => {
					const $scope4_id = _scope_id();
					_script($scope4_id, "a0", 0);
				}, 0);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("loading...");
			}, void 0, "a1");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_script($scope0_id, "a2");
	_scope($scope0_id, {});
}, 1);
