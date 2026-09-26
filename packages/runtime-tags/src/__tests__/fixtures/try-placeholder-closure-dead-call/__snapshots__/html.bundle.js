// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "b", input.q, _serialize_guard($scope0_reason, 0))} ${_text_resume($scope0_id, "c", input.on, _serialize_guard($scope0_reason, 1) * 2)}</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $on__closures = /* @__PURE__ */ new Set();
	let on = 1;
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(0, 4), () => {
			const $scope2_id = _scope_id();
			_set_serialize_reason(8);
			const $childScope = _peek_scope_id();
			child_default({
				q: 1,
				on
			});
			_subscribe($on__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope)
			}));
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) }, 0);
	_scope($scope0_id, { c: $on__closures });
	_resume_branch($scope0_id);
}, 1);
