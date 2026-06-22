// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_count = _serialize_guard($scope0_reason, 0), $si__input_count = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { count } = input;
	_for_to(count, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<p>item ${_escape(i)}</p>`);
		_script($scope1_id, "__tests__/tags/child.marko_1");
		$si__input_count && writeScope($scope1_id, {}, "__tests__/tags/child.marko", "2:2");
	}, 0, $scope0_id, "#text/0", $sg__input_count, $sg__input_count, $sg__input_count, 0, 1);
	$si__input_count && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let count = 0;
	_html(`<div id=ref>init</div><button id=o>O</button>${_el_resume($scope0_id, "#button/0")}<button id=a>A</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (outer) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			child_default({ count });
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0_count");
	_script($scope0_id, "__tests__/template.marko_0_outer");
	writeScope($scope0_id, {
		outer,
		count
	}, "__tests__/template.marko", 0, {
		outer: "1:6",
		count: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
