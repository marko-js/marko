// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_count = _serialize_guard($scope0_reason, 0), $si__input_count = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { count } = input;
	_for_to(count, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<p>item ${_escape(i)}</p>`);
		_script($scope1_id, "b0");
		$si__input_count && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_count, $sg__input_count, $sg__input_count, 0, 1);
	$si__input_count && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let count = 0;
	_html(`<div id=ref>init</div><button id=o>O</button>${_el_resume($scope0_id, "a")}<button id=a>A</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			child_default({ count });
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
		e: count
	});
	_resume_branch($scope0_id);
}, 1);
