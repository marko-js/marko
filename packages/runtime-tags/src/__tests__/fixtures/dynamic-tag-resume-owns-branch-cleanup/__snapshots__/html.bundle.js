// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { show } = input;
	_dynamic_tag($scope0_id, "a", show ? "div" : null, {}, _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_script($scope1_id, "b1");
		_resume_branch($scope1_id);
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
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
			child_default({ show });
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
		e: show
	});
	_resume_branch($scope0_id);
}, 1);
