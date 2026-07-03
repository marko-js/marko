// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 2), $sg__input_err = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.err) {
			const $scope2_id = _scope_id();
			_html("<h2>Something went wrong</h2>");
			$sg__input_err && writeScope($scope2_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_html(`<h1>${_escape(_hole_value($scope1_id, "#text/0", input.title, $sg__input_title))}${_el_resume($scope1_id, "#text/0", $sg__input_title)}</h1><button>${_escape(count)}${_el_resume($scope1_id, "#text/2")}</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1 | _serialize_guard($scope0_reason, 0) || $sg__input_err, $sg__input_err, $sg__input_err);
	writeScope($scope0_id, {
		input_title: _serialize_if($scope0_reason, 1) && input.title,
		count
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
