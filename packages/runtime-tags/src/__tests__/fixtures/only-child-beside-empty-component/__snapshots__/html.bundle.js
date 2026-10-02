// tags/noop.marko
var noop_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0);
	_scope($scope0_id, { c: input.v });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const Nothing = { content: _content("a0", ({ v }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_script($scope1_id, "a1", 0);
		_scope($scope1_id, { c: v });
	}, $scope0_id) };
	_html("<div>");
	const $childScope = _peek_scope_id();
	noop_default({ v: open });
	_if(() => {}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	const $childScope2 = _peek_scope_id();
	noop_default({ v: true });
	_html("<ul>");
	const $childScope3 = _peek_scope_id();
	Nothing.content({ v: open });
	_for_of([1], (item) => {
		const $scope3_id = _scope_id();
		_html(`<li>${_text_resume($scope3_id, "a", item)}</li>`);
		_scope($scope3_id, {});
	}, 0, $scope0_id, "d", 1, 1, 1, "</ul>", 1);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		g: open,
		b: _existing_scope($childScope),
		c: _existing_scope($childScope2),
		e: _existing_scope($childScope3)
	});
}, 1);
