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
	const $selectedId__closures = /* @__PURE__ */ new Set();
	let selectedId = "a";
	let openIds = ["a"];
	const open = _resume((id) => {
		selectedId = id;
		if (!openIds.includes(id)) openIds = openIds.concat(id);
	}, "c0", $scope0_id);
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
				_subscribe($selectedId__closures, writeScope($scope2_id, { a: _existing_scope($childScope) }));
				return 0;
			}
		}, $scope1_id, "a", 1, 1, 1, 0, 1);
		writeScope($scope1_id, {
			c: _serialize_if($scope0_reason, 1) && id,
			e: ws,
			f: ws?.id
		});
	}, (id) => id, $scope0_id, "b");
	_html(`</div>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "c1");
	writeScope($scope0_id, {
		e: input.status,
		f: input.workspaces,
		g: selectedId,
		h: openIds,
		i: open,
		l: $selectedId__closures
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const workspaces = [{
		id: "a",
		name: "A"
	}, {
		id: "b",
		name: "B"
	}];
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "a", resolveAfter({ ok: true }, 1), (status) => {
			const $scope3_id = _scope_id();
			shell_default({
				status: "ready",
				workspaces
			});
			_resume_branch($scope3_id);
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		shell_default({
			status: "loading",
			workspaces
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
		_resume_branch($scope1_id);
	}, $scope0_id) }) });
	writeScope($scope0_id, { b: workspaces });
}, 1);
