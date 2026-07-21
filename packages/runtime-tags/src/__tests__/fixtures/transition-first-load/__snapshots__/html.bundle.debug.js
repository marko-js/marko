// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $id__closures = new Set();
	let id = 1;
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<h2>Id: <!>${_escape(id)}${_el_resume($scope1_id, "#text/0")}</h2>`);
		_await($scope1_id, "#text/1", resolveAfter({ id }), (data) => {
			const $scope3_id = _scope_id();
			_html(`<pre>${_escape(JSON.stringify(data))}${_el_resume($scope3_id, "#text/0")}</pre>`);
			writeScope($scope3_id, {}, "__tests__/template.marko", "6:4");
		});
		_subscribe($id__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	_html(`<button id=inc>${_escape(id)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		id,
		"ClosureScopes:id": $id__closures
	}, "__tests__/template.marko", 0, { id: "2:6" });
	_resume_branch($scope0_id);
}, 1);
