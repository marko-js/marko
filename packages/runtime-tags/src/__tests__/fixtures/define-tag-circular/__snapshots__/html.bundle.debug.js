// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("__tests__/template.marko_1_content", ({ show }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__show = _serialize_guard($scope1_reason, 0), $si__show = _serialize_if($scope1_reason, 0);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				const Bar = { content: _content("__tests__/template.marko_3_content", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					Foo.content({});
				}) };
				Bar.content({});
				$si__show && writeScope($scope2_id, {}, "__tests__/template.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__show, $sg__show, $sg__show);
		_html(" foo");
		$si__show && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}) };
	Foo.content({ show: true });
}, 1);
