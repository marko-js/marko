// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section class=${input.active ? "on" : "off"}>${_escape(input.workspace.name)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 1))}</section>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { f: input.workspace?.id });
	_resume_branch($scope0_id);
});

// tags/shell.marko
var shell_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attr("data-status", input.status)}>`);
	child_default({
		workspace: {
			id: "a",
			name: "A"
		},
		active: true
	});
	_html(`</div>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "c0");
	writeScope($scope0_id, { e: input.status });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>hide</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", _content_resume("a1", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", resolveAfter({ ok: true }, 3), (status) => {
					_scope_id();
					shell_default({ status: "ready" });
				}, 0);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
				_scope_reason();
				_scope_id();
				shell_default({ status: "loading" });
			}, $scope1_id) }) });
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
