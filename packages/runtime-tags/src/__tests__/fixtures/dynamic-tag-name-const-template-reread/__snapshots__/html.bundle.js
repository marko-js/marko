// tags/a.marko
var a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>A ${_text_mark($scope0_id, "a", input.label, _write_guard($scope0_reason, 1) * 2)} `);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 2));
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/b.marko
var b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>B ${_text_mark($scope0_id, "a", input.label, _write_guard($scope0_reason, 0) * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Tag = a_default;
	let x = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	a_default({ label: "first" });
	_dynamic_tag($scope0_id, "c", b_default, { label: "second" }, _content("a0", () => {
		_scope_id();
		_scope_reason();
		_html("Hello");
	}, $scope0_id));
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: Tag,
		e: x
	});
}, 1);
