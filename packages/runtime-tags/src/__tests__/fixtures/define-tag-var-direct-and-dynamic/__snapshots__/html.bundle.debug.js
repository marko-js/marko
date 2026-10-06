// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Count = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let n = 1;
		const $return = { n };
		return $return;
	}, $scope0_id) };
	let on = true;
	let a = Count.content({});
	const $onCount_scope = _peek_scope_id();
	let b = _dynamic_tag($scope0_id, "#text/2", on && Count, {});
	_var($scope0_id, "#scopeOffset/3", $onCount_scope, "__tests__/template.marko_0_b#11/var");
	_html(`<p>${_escape(String(a && a.n))} ${_text_resume($scope0_id, "#text/5", String(b && b.n), 2)}</p><button></button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		Count,
		on
	}, "__tests__/template.marko", 0, {
		Count: "1:9",
		on: "5:6"
	});
}, 1);
