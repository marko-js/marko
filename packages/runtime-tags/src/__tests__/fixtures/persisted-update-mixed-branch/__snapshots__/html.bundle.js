// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 2), $sg__input_err = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.err) {
			const $scope2_id = _scope_id();
			_html("<h2>Something went wrong</h2>");
			$sg__input_err && writeScope($scope2_id, {});
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_html(`<h1>${_escape(_hole_value($scope1_id, "a", input.title, $sg__input_title))}${_el_resume($scope1_id, "a", $sg__input_title)}</h1><button>${_escape(count)}${_el_resume($scope1_id, "c")}</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a2");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", 1 | _serialize_guard($scope0_reason, 0) || $sg__input_err, $sg__input_err, $sg__input_err);
	writeScope($scope0_id, {
		e: _serialize_if($scope0_reason, 1) && input.title,
		f: count
	});
	_resume_branch($scope0_id);
}, 1);
