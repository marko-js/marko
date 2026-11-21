// tags/a.marko
var a_default = _template("__tests__/tags/a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>A ${_text_mark($scope0_id, "#text/0", input.label, _write_guard($scope0_reason, 1) * 2)} `);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 2));
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/a.marko", 0);
});

// tags/b.marko
var b_default = _template("__tests__/tags/b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>B ${_text_mark($scope0_id, "#text/0", input.label, _write_guard($scope0_reason, 0) * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/b.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Tag = a_default;
	let x = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	a_default({ label: "first" });
	_dynamic_tag($scope0_id, "#text/2", x ? b_default : Tag, { label: "second" }, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Hello");
	}, $scope0_id));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		Tag,
		x
	}, "__tests__/template.marko", 0, {
		Tag: "3:8",
		x: "4:6"
	});
}, 1);
