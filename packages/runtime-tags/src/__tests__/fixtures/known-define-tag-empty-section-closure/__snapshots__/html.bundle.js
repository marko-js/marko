// tags/test.marko
var test_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	({ content: _content("b0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope1_reason, 0), $si__input_x = _serialize_if($scope1_reason, 0);
		_if(() => {
			if (input.x) {
				const $scope2_id = _scope_id();
				_html("<div>123</div>");
				$si__input_x && writeScope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", $sg__input_x, $sg__input_x, $sg__input_x, 0, 1);
		$si__input_x && writeScope($scope1_id, {});
	}) }).content({ x: 1 });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {}, $scope0_id, "a");
	_html("</div>");
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
