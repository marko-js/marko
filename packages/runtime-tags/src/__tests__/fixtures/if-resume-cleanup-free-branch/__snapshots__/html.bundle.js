// tags/leaf.marko
var leaf_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_n = _serialize_guard($scope0_reason, 0), $si__input_n = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { n } = input;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html(`<div>n is ${_sep($sg__input_n)}${_escape(n)}${_el_resume($scope1_id, "a", $sg__input_n)}</div>`);
			$si__input_n && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $sg__input_n, $sg__input_n, $sg__input_n, 0, 1);
	$si__input_n && writeScope($scope0_id, { d: n });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let n = 0;
	_html(`<button id=o>O</button>${_el_resume($scope0_id, "a")}<button id=n>N</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			leaf_default({ n });
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c");
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: outer,
		e: n
	});
	_resume_branch($scope0_id);
}, 1);
