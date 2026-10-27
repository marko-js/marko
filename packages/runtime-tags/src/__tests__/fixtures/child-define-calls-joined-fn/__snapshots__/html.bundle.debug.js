// tags/label-view.marko
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Show = { content: _content("__tests__/tags/label-view.marko_1*content", ({ a, b, flag }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const get = flag ? a : b;
		_html(`<output></output>${_el_resume($scope1_id, "#output/0")}`);
		_script($scope1_id, "__tests__/tags/label-view.marko_1_get#7");
		_scope($scope1_id, {
			a: _write_if($scope1_reason, 2) && a,
			b: _write_if($scope1_reason, 1) && b,
			flag: _write_if($scope1_reason, 0) && flag,
			get
		}, "__tests__/tags/label-view.marko", "1:2", {
			a: "1:16",
			b: "1:19",
			flag: "1:22",
			get: "2:10"
		});
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	Show.content({
		a: input.a,
		b: input.b,
		flag: input.flag
	});
	_write_if($scope0_reason, 3) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/label-view.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let upper = false;
	const up = _resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	_set_scope_reason(138 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	label_view_default({
		a: upper ? up : low,
		b: low,
		flag: true
	});
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
