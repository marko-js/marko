// tags/test.marko
var test_default = _template("__tests__/tags/test.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Tag = { content: _content("__tests__/tags/test.marko_1_content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope1_reason, 0), $si__input_x = _serialize_if($scope1_reason, 0);
		_if(() => {
			if (input.x) {
				const $scope2_id = _scope_id();
				_html("<div>123</div>");
				$si__input_x && writeScope($scope2_id, {}, "__tests__/tags/test.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__input_x, $sg__input_x, $sg__input_x, 0, 1);
		$si__input_x && writeScope($scope1_id, {}, "__tests__/tags/test.marko", "2:2");
	}) };
	Tag.content({ x: 1 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let m = undefined;
	_html("<div>");
	_if(() => {
		if (m) {
			const $scope1_id = _scope_id();
			test_default({});
			writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html("</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
