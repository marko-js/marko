// tags/btn.marko
var btn_default = _template("__tests__/tags/btn.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { getHandler } = input;
	_html(`<button${_attr_class(input.name)}>${_text_resume($scope0_id, "#text/1", input.name, _serialize_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/btn.marko_0_getHandler#5");
	_scope($scope0_id, { getHandler }, "__tests__/tags/btn.marko", 0, { getHandler: "1:10" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mode = "a";
	let out = "";
	const LocalBtn = { content: _content("__tests__/template.marko_1*content", ({ getHandler, name }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button${_attr_class(name)}>${_text_resume($scope1_id, "#text/1", name, _serialize_guard($scope1_reason, 0))}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_getHandler#4");
		_scope($scope1_id, { getHandler }, "__tests__/template.marko", "3:2", { getHandler: "3:20" });
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	btn_default({
		name: "child",
		getHandler: _resume(function() {
			return mode === "a" ? () => {
				out = "A";
			} : () => {
				out = "B";
			};
		}, "__tests__/template.marko_0/getHandler", $scope0_id)
	});
	const $childScope2 = _peek_scope_id();
	LocalBtn.content({
		name: "local",
		getHandler: _resume(function() {
			return mode === "a" ? () => {
				out = "a";
			} : () => {
				out = "b";
			};
		}, "__tests__/template.marko_0/getHandler2", $scope0_id)
	});
	_html(`<button id=mode>mode</button>${_el_resume($scope0_id, "#button/2")}<p>${_text_resume($scope0_id, "#text/3", out)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		mode,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { mode: "1:6" });
}, 1);
