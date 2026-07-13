// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const Foo = { content: _content("a1", ({ show }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__show = _serialize_guard($scope1_reason, 0), $si__show = _serialize_if($scope1_reason, 0);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				({ content: _content("a0", () => {
					_scope_id();
					_scope_reason();
					Foo.content({});
				}) }).content({});
				$si__show && writeScope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", $sg__show, $sg__show, $sg__show);
		_html(" foo");
		$si__show && writeScope($scope1_id, {});
	}) };
	Foo.content({ show: true });
}, 1);
