// tags/mid-define.marko
var mid_define_default = _template("__tests__/tags/mid-define.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Show = { content: _content("__tests__/tags/mid-define.marko_1*content", ({ get }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<output></output>${_el_resume($scope1_id, "#output/0")}`);
		_script($scope1_id, "__tests__/tags/mid-define.marko_1_get#3");
		_scope($scope1_id, { get }, "__tests__/tags/mid-define.marko", "1:2", { get: "1:16" });
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	Show.content({ get: input.get });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/mid-define.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let upper = false;
	const up = _resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	mid_define_default({ get: upper ? up : low });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		upper,
		up,
		low,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		upper: "1:6",
		up: "2:8",
		low: "3:8"
	});
}, 1);
