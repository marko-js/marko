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
			c: _serialize_if($scope0_reason, 0) && id,
			e: ws,
			f: ws?.id
		});
	}, (id) => id, $scope0_id, "b");
	_html(`</div>${_el_resume($scope0_id, "a")}`);
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
	{
		const $scope2_id = _scope_id();
		_try($scope2_id, "a", _content_resume("a2", () => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_await($scope4_id, "a", resolveAfter({ ok: true }, 1), (status) => {
				const $scope5_id = _scope_id();
				shell_default({
					status: "ready",
					workspaces
				});
				_resume_branch($scope5_id);
			}, 0);
		}, $scope2_id), {
			placeholder: attrTag({ content: _content_resume("a0", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				shell_default({
					status: "loading",
					workspaces
				});
				writeScope($scope3_id, { _: _scope_with_id($scope2_id) });
				_resume_branch($scope3_id);
			}, $scope2_id) }),
			catch: attrTag({ content: _content_resume("a1", (err) => {
				const $scope6_reason = _scope_reason();
				const $scope6_id = _scope_id();
				_html(`${_escape(String(err))}${_el_resume($scope6_id, "a", _serialize_guard($scope6_reason, 0))}`);
				_serialize_if($scope6_reason, 0) && writeScope($scope6_id, {});
			}, $scope2_id) })
		});
		writeScope($scope2_id, { _: _scope_with_id($scope0_id) });
	}
	writeScope($scope0_id, { b: workspaces });
}, 1);
