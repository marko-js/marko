// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = input.value;
	_try($scope0_id, "a", _content_resume("b1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $childScope = _peek_scope_id();
		_set_serialize_reason(1);
		$Child_withLoadAssets({ value: count });
		_subscribe($count__closures, writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		}));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("b0", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_html(`<button>click</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	writeScope($scope0_id, {
		f: count,
		Bf: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
