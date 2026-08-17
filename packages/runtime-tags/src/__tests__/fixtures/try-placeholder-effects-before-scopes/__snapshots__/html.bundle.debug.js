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
	const $selectedId__closures = new Set();
	let selectedId = "a";
	let openIds = ["a"];
	const open = _resume((id) => {
		selectedId = id;
		if (!openIds.includes(id)) openIds = openIds.concat(id);
	}, "__tests__/tags/shell.marko_0/open", $scope0_id);
	_html(`<div${_attr("data-status", input.status)}><a href=#b>open b</a>`);
	_for_of(openIds, (id) => {
		const $scope1_id = _scope_id();
		const ws = input.workspaces.find((w) => w.id === id);
		_if(() => {
			if (ws) {
				const $scope2_id = _scope_id();
				_set_serialize_reason(1);
				const $childScope = _peek_scope_id();
				child_default({
					workspace: ws,
					active: ws.id === selectedId
				});
				_subscribe($selectedId__closures, writeScope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/shell.marko", "34:6"));
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		writeScope($scope1_id, {
			id: _serialize_if($scope0_reason, 1) && id,
			ws,
			ws_id: ws?.id
		}, "__tests__/tags/shell.marko", "32:4", {
			id: "32:8",
			ws: "33:12",
			ws_id: ["ws.id", "33:12"]
		});
	}, (id) => id, $scope0_id, "#text/1");
	_html(`</div>${_el_resume($scope0_id, "#div/0", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "__tests__/tags/shell.marko_0_input_status#4_open#8");
	writeScope($scope0_id, {
		input_status: input.status,
		input_workspaces: input.workspaces,
		selectedId,
		openIds,
		open,
		"ClosureScopes:selectedId": $selectedId__closures
	}, "__tests__/tags/shell.marko", 0, {
		input_status: ["input.status"],
		input_workspaces: ["input.workspaces"],
		selectedId: "5:6",
		openIds: "6:6",
		open: "7:8"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selectedId = "a";
	let openIds = ["a"];
	const workspaces = [{
		id: "a",
		name: "A"
	}, {
		id: "b",
		name: "B"
	}];
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "#text/0", resolveAfter({ ok: true }, 1), (status) => {
			const $scope3_id = _scope_id();
			shell_default({
				status: "ready",
				workspaces
			});
			_resume_branch($scope3_id);
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		shell_default({
			status: "loading",
			workspaces
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4");
		_resume_branch($scope1_id);
	}, $scope0_id) }) });
	writeScope($scope0_id, { workspaces }, "__tests__/template.marko", 0, { workspaces: "5:8" });
}, 1);
