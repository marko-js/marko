// tags/leaf.marko
var leaf_default = _template("__tests__/tags/leaf.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<p>leaf</p>");
	_script($scope0_id, "__tests__/tags/leaf.marko_0");
	_resume_branch($scope0_id);
});

// tags/wrapper.marko
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { show } = input;
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			leaf_default({});
			$si__input_show && writeScope($scope1_id, {}, "__tests__/tags/wrapper.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1);
	$si__input_show && writeScope($scope0_id, {}, "__tests__/tags/wrapper.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let show = false;
	_html(`<div id=ref>init</div><button id=o>O</button>${_el_resume($scope0_id, "#button/0")}<button id=s>S</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (outer) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			wrapper_default({ show });
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0_show");
	_script($scope0_id, "__tests__/template.marko_0_outer");
	writeScope($scope0_id, {
		outer,
		show
	}, "__tests__/template.marko", 0, {
		outer: "1:6",
		show: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
