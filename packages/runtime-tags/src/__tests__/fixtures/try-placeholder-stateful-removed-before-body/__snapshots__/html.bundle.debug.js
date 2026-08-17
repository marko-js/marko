// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section class=${input.active ? "on" : "off"}>${_escape(input.workspace.name)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 1))}</section>${_el_resume($scope0_id, "#section/0", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_workspace_id#5");
	writeScope($scope0_id, { input_workspace_id: input.workspace?.id }, "__tests__/tags/child.marko", 0, { input_workspace_id: ["input.workspace.id"] });
	_resume_branch($scope0_id);
});

// tags/shell.marko
var shell_default = _template("__tests__/tags/shell.marko", (input) => {
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
	_html(`</div>${_el_resume($scope0_id, "#div/0", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "__tests__/tags/shell.marko_0_input_status#4");
	writeScope($scope0_id, { input_status: input.status }, "__tests__/tags/shell.marko", 0, { input_status: ["input.status"] });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button>hide</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "#text/0", resolveAfter({ ok: true }, 3), (status) => {
					const $scope4_id = _scope_id();
					shell_default({ status: "ready" });
				}, 0);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				shell_default({ status: "loading" });
			}, $scope1_id) }) });
			writeScope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
