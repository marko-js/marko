// tags/n2.marko
var n2_default = _template("__tests__/tags/n2.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=n2>${_text_resume($scope0_id, "#text/0", input.label, _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/n2.marko", 0);
});

// tags/n5.marko
var n5_default = _template("__tests__/tags/n5.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n5>${_text_resume($scope0_id, "#text/1", input.label, _serialize_guard($scope0_reason, 0))} ${_text_resume($scope0_id, "#text/2", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/n5.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/n5.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
});

// tags/n1.marko
var n1_default = _template("__tests__/tags/n1.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n1>${_text_resume($scope0_id, "#text/1", input.label, _serialize_guard($scope0_reason, 0))} ${_text_resume($scope0_id, "#text/2", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/n1.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/n1.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clicks__closures = new Set();
	const $tag__closures = new Set();
	let clicks = 0;
	let tag = n5_default;
	_html(`<button>clicks ${_text_resume($scope0_id, "#text/1", clicks, 2)}</button>${_el_resume($scope0_id, "#button/0")}<button class=swap>swap</button>${_el_resume($scope0_id, "#button/2")}`);
	_try($scope0_id, "#text/3", _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "#text/0", resolveAfter("body", 2), (body) => {
			const $scope3_id = _scope_id();
			_script($scope3_id, "__tests__/template.marko_3_clicks#4/pending");
			_script($scope3_id, "__tests__/template.marko_3_tag#5/pending");
			_dynamic_tag($scope3_id, "#text/0", tag, { label: `${body} ${clicks}` });
			_scope($scope3_id, {
				body,
				_: _scope_with_id($scope2_id),
				"ClosureSignalIndex:clicks": 1
			}, "__tests__/template.marko", "11:4", { body: "11:10" });
			_resume_branch($scope3_id);
		});
		_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_serialize_reason(1);
		const $childScope = _peek_scope_id();
		n1_default({ label: `placeholder ${clicks}` });
		_subscribe($clicks__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "10:4"));
		_resume_branch($scope1_id);
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		clicks,
		tag,
		"ClosureScopes:clicks": $clicks__closures,
		"ClosureScopes:tag": $tag__closures
	}, "__tests__/template.marko", 0, {
		clicks: "5:6",
		tag: "6:6"
	});
	_resume_branch($scope0_id);
}, 1);
