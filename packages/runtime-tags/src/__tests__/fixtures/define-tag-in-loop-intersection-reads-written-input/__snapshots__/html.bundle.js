// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_p = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_p__closures = /* @__PURE__ */ new Set();
	let v = 0;
	const D = { content: _content("a0", ({ q }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope1_id, "a", input.p1 + q, 2));
		_subscribe($wi__input_p && $input_p__closures, _scope($scope1_id, {
			d: $wi__input_p && q,
			_: _scope_with_id($scope0_id)
		}), "a1");
	}, $scope0_id) };
	_for_of([1, 2], (i) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		D.content({ q: v + i });
		_scope($scope2_id, {
			c: i,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 0);
	_script($scope0_id, "a2", 0);
	_scope($scope0_id, {
		d: input.p1,
		f: $wi__input_p && $input_p__closures
	});
	_resume_branch($scope0_id);
}, 1);
