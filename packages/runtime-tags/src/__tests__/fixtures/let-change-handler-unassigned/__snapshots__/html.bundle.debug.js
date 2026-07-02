// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { initial, onValue } = input;
	let value = initial;
	_html(`<span>${_escape(value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		initial: _serialize_if($scope0_reason, 2) && initial,
		onValue: _serialize_if($scope0_reason, 1) && onValue
	}, "__tests__/tags/child.marko", 0, {
		initial: "1:10",
		onValue: "1:19"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let initial = 1;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(6);
	child_default({
		initial,
		onValue: _resume(() => {}, "__tests__/template.marko_0/onValue")
	});
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		initial,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { initial: "1:6" });
	_resume_branch($scope0_id);
}, 1);
