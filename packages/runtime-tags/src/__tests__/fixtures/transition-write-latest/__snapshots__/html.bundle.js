// get-data.ts
let calls = 0;
function getData(id) {
	return resolveAfter({
		id,
		call: ++calls
	}, calls + 3);
}

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $id__closures = /* @__PURE__ */ new Set();
	let id = 1;
	_html(`<button id=inc>${_escape(id)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<button id=back>back</button>${_el_resume($scope0_id, "c")}`);
	_try($scope0_id, "d", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", getData(id), (data) => {
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
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		e: id,
		f: $id__closures
	});
	_resume_branch($scope0_id);
}, 1);
