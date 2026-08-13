// template.marko
async function* stream(items) {
	let tick = 0;
	for (const item of items) {
		yield resolveAfter(item, ++tick);
	}
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $mounted__closures = new Set();
	let mounted = undefined;
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<ul>");
		_for_await(stream([
			"a",
			"b",
			mounted ? "hello" : "goodbye"
		]), (item, i) => {
			const $scope3_id = _scope_id();
			_html(`<li>#${_escape(i)}: <!>${_escape(item)}${_el_resume($scope3_id, "#text/1")}</li>`);
			writeScope($scope3_id, {}, "__tests__/template.marko", "14:6");
		}, 0, $scope1_id, "#text/0");
		_html("</ul>");
		_subscribe($mounted__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "12:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("Waiting...");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { "ClosureScopes:mounted": $mounted__closures }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
