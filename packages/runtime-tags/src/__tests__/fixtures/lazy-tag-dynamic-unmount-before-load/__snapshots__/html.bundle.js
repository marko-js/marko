// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "a0");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const $load_Child = withAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = true;
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("b2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(void 0, 1), (_) => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "b0");
			_dynamic_tag($scope2_id, "a", $load_Child, { value: 1 });
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
			_resume_branch($scope2_id);
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("b1", () => {
		_scope_reason();
		_scope_id();
		_html("Loading...");
	}, $scope0_id) }) });
	_script($scope0_id, "b3");
	writeScope($scope0_id, {
		c: show,
		Bc: $show__closures
	});
	_resume_branch($scope0_id);
}, 1);
