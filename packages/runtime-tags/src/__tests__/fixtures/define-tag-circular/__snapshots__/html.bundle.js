// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("a1", ({ show }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__show = _write_guard($scope1_reason, 0), $wi__show = _write_if($scope1_reason, 0);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				({ content: _content("a0", () => {
					_scope_id();
					_scope_reason();
					Foo.content({});
				}, $scope2_id) }).content({});
				$wi__show && _scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", $wg__show, $wg__show);
		_html(" foo");
		$wi__show && _scope($scope1_id, {});
	}, $scope0_id) };
	Foo.content({ show: true });
}, 1);
