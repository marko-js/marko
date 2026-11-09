// tags/log-count.marko
var log_count_default = _template("__tests__/tags/log-count.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const count = input.count;
	_html(`<button>log</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/log-count.marko_0");
	_scope($scope0_id, { count }, "__tests__/tags/log-count.marko", 0, { count: "2:8" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const on = input.items.filter((item) => item.on).length;
	const $childScope = _peek_scope_id();
	log_count_default({ count: _resume(() => `${on} of ${input.items.length}`, "__tests__/template.marko_0/count", $scope0_id) });
	_scope($scope0_id, {
		input_items_length: input.items?.length,
		on,
		"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_items_length: ["input.items.length"],
		on: "1:8"
	});
}, 1);
