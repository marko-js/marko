// template.marko
async function* stream(items) {
	let tick = 0;
	for (const item of items) yield resolveAfter(item, ++tick);
}
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $mounted__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<ul>");
		_for_await(stream([
			"a",
			"b",
			"goodbye"
		]), (item, i) => {
			const $scope3_id = _scope_id();
			_html(`<li>#${_escape(i)}: <!>${_escape(item)}${_el_resume($scope3_id, "b")}</li>`);
			writeScope($scope3_id, {});
		}, 0, $scope1_id, "a");
		_html("</ul>");
		_subscribe($mounted__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("Waiting...");
	}, $scope0_id) }) });
	_script($scope0_id, "a2");
	writeScope($scope0_id, { c: $mounted__closures });
	_resume_branch($scope0_id);
}, 1);
