// tags/noop.marko
var noop_default = _template("__tests__/tags/noop.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/noop.marko_0_input_v#2", 0);
	_scope($scope0_id, { input_v: input.v }, "__tests__/tags/noop.marko", 0, { input_v: ["input.v"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const Nothing = { content: _content("__tests__/template.marko_1*content", ({ v }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_script($scope1_id, "__tests__/template.marko_1_v#2", 0);
		_scope($scope1_id, { v }, "__tests__/template.marko", "2:2", { v: "2:19" });
	}, $scope0_id) };
	_html("<div>");
	const $childScope = _peek_scope_id();
	noop_default({ v: open });
	_if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_html("<span>on</span>");
			_scope($scope2_id, {}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	const $childScope2 = _peek_scope_id();
	noop_default({ v: !open });
	_html("</div><ul>");
	const $childScope3 = _peek_scope_id();
	Nothing.content({ v: open });
	_for_of(open ? [1, 2] : [1], (item) => {
		const $scope3_id = _scope_id();
		_html(`<li>${_text_resume($scope3_id, "#text/0", item)}</li>`);
		_scope($scope3_id, {}, "__tests__/template.marko", "10:4");
	}, 0, $scope0_id, "#text/4", 1, 1, 1, 0, 1);
	_html(`</ul><button>toggle</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		open,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2),
		"#childScope/3": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
