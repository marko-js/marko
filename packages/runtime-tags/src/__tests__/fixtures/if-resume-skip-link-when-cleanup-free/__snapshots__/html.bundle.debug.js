// tags/leaf.marko
var leaf_default = _template("__tests__/tags/leaf.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_n = _serialize_guard($scope0_reason, 0), $si__input_n = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { n } = input;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html(`<div>n is ${_sep($sg__input_n)}${_escape(n)}${_el_resume($scope1_id, "#text/0", $sg__input_n)}</div>`);
			$si__input_n && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/leaf.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $sg__input_n, $sg__input_n, $sg__input_n, 0, 1, 1);
	$si__input_n && writeScope($scope0_id, { n }, "__tests__/tags/leaf.marko", 0, { n: "1:10" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let n = 0;
	_html(`<button id=o>O</button>${_el_resume($scope0_id, "#button/0")}<button id=n>N</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (outer) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			leaf_default({ n });
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0_n");
	_script($scope0_id, "__tests__/template.marko_0_outer");
	writeScope($scope0_id, {
		outer,
		n
	}, "__tests__/template.marko", 0, {
		outer: "1:6",
		n: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
