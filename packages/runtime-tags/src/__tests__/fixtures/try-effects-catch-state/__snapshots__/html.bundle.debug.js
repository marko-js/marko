// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clickCount__closures = new Set();
	let clickCount = 0;
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button>inc</button>${_el_resume($scope1_id, "#button/0")} -- <!>${_escape((() => {
			if (clickCount > 1) throw new Error("ERROR!");
		})())}${_el_resume($scope1_id, "#text/1")}`);
		_script($scope1_id, "__tests__/template.marko_1_clickCount");
		_subscribe($clickCount__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2_content", (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`${_escape(err)}${_el_resume($scope2_id, "#text/0", _serialize_guard($scope2_reason, 0))}`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {}, "__tests__/template.marko", "12:4");
	}, $scope0_id) }) });
	writeScope($scope0_id, {
		clickCount,
		"ClosureScopes:clickCount": $clickCount__closures
	}, "__tests__/template.marko", 0, { clickCount: "1:6" });
	_resume_branch($scope0_id);
}, 1);
