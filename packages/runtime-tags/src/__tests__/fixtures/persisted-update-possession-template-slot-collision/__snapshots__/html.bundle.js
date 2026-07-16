// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_for_of($global().childItems, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p${_attr("data-child", _hole_value($scope1_id, "Ndata-child:a", item.id, _persisted_reason()))}>child ${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "Qb", item.id, _persisted_reason()))}${_el_resume($scope1_id, "b", _persisted_reason())}</p>${_el_resume($scope1_id, "a", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope1_id, {});
	}, "id", $scope0_id, "a", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "b0");
	_persisted_reason() && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_for_of($global().parentItems, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p>parent ${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "Qa", item.id, _persisted_reason()))}${_el_resume($scope1_id, "a", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope1_id, {});
	}, "id", $scope0_id, "c", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "a0");
	const $childScope = _peek_scope_id();
	child_default({});
	_dynamic_tag($scope0_id, "e", $global().nativeTag, {}, _content_resume("a3", () => {
		_scope_id();
		_scope_reason();
		_html("dynamic");
	}, $scope0_id), 0, _persisted_reason() | _persisted_reason(), "a1");
	_script($scope0_id, "a5");
	writeScope($scope0_id, {
		f: _state_reason() && count,
		d: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
