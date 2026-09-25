// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/1", input.q, _serialize_guard($scope0_reason, 0))} ${_text_resume($scope0_id, "#text/2", input.on, _serialize_guard($scope0_reason, 1) * 2)}</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
function run(fn) {
	return typeof fn;
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $on__closures = new Set();
	let on = 1;
	const unused = run(() => {
		on++;
	});
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(0, 4), () => {
			const $scope2_id = _scope_id();
			_set_serialize_reason(8);
			const $childScope = _peek_scope_id();
			child_default({
				q: 1,
				on
			});
			_subscribe($on__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "9:4"));
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) }, 0);
	_scope($scope0_id, { "ClosureScopes:on": $on__closures }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
