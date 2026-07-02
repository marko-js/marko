// tags/leaf.marko
var leaf_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<p>leaf</p>");
	_script($scope0_id, "b0");
	_resume_branch($scope0_id);
});

// tags/wrapper.marko
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { show } = input;
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			leaf_default({});
			$si__input_show && writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1);
	$si__input_show && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let show = false;
	_html(`<div id=ref>init</div><button id=o>O</button>${_el_resume($scope0_id, "a")}<button id=s>S</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			wrapper_default({ show });
			writeScope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "c");
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: outer,
		e: show
	});
	_resume_branch($scope0_id);
}, 1);
