// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_escape(input.label)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 1))}</button>${_el_resume($scope0_id, "a")}<a${_attr("href", input.hrefFor("x"))} class=${input.count % 2 ? "odd" : "even"}>x</a>${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { f: input.onToggle });
});

// tags/parent.marko
var parent_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const prefix = "a";
	let shut = false;
	const hrefFor = _resume((key) => `#${key}`, "c0");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			const label = shut ? `${prefix}:shut` : `${prefix}:open`;
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			child_default({
				label,
				count: input.count,
				hrefFor,
				onToggle: _resume(function() {
					shut = !shut;
					input.onToggle();
				}, "c1", $scope1_id)
			});
			writeScope($scope1_id, {
				c: _serialize_if($scope0_reason, 0) && label,
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, 0, 0);
	writeScope($scope0_id, {
		d: input.count,
		e: input.onToggle,
		f: prefix,
		g: shut,
		h: hrefFor
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	parent_default({
		count,
		onToggle: _resume(function() {
			count++;
		}, "a0", $scope0_id)
	});
	writeScope($scope0_id, {
		b: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
