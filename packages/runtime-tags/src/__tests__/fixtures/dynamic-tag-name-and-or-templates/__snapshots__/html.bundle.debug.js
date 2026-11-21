// tags/compact.marko
var compact_default = _template("__tests__/tags/compact.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>compact ${_text_mark($scope0_id, "#text/0", input.label, _write_guard($scope0_reason, 1) * 2)} `);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 2));
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/compact.marko", 0);
});

// tags/full.marko
var full_default = _template("__tests__/tags/full.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>full ${_text_mark($scope0_id, "#text/0", input.label, _write_guard($scope0_reason, 0) * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/full.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let compact = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", compact && compact_default || full_default, { label: "row" }, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Hello");
	}, $scope0_id));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { compact }, "__tests__/template.marko", 0, { compact: "3:6" });
}, 1);
