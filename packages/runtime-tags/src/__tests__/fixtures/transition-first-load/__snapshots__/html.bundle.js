// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $id__closures = /* @__PURE__ */ new Set();
	let id = 1;
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<h2>Id: <!>${_escape(id)}${_el_resume($scope1_id, "a")}</h2>`);
		_await($scope1_id, "b", resolveAfter({ id }), (data) => {
			const $scope3_id = _scope_id();
			_html(`<pre>${_escape(JSON.stringify(data))}${_el_resume($scope3_id, "a")}</pre>`);
			writeScope($scope3_id, {});
		});
		_subscribe($id__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	_html(`<button id=inc>${_escape(id)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		d: id,
		e: $id__closures
	});
	_resume_branch($scope0_id);
}, 1);
