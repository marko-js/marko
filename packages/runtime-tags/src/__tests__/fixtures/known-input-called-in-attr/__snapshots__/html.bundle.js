// tags/btn.marko
var btn_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { getHandler } = input;
	_html(`<button${_attr_class(input.name)}>${_text_resume($scope0_id, "b", input.name, _serialize_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { f: getHandler });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mode = "a";
	let out = "";
	const LocalBtn = { content: _content("a2", ({ getHandler, name }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button${_attr_class(name)}>${_text_resume($scope1_id, "b", name, _serialize_guard($scope1_reason, 0))}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a3");
		_scope($scope1_id, { e: getHandler });
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	btn_default({
		name: "child",
		getHandler: _resume(function() {
			return () => {
				out = "A";
			};
		}, "a0", $scope0_id)
	});
	const $childScope2 = _peek_scope_id();
	LocalBtn.content({
		name: "local",
		getHandler: _resume(function() {
			return () => {
				out = "a";
			};
		}, "a1", $scope0_id)
	});
	_html(`<button id=mode>mode</button>${_el_resume($scope0_id, "c")}<p>${_text_resume($scope0_id, "d", out)}</p>`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: mode,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
