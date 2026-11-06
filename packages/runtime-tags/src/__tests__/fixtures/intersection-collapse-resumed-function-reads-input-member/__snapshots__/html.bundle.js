// tags/log-count.marko
var log_count_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const count = input.count;
	_html(`<button>log</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: count });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const on = input.items.filter((item) => item.on).length;
	const $childScope = _peek_scope_id();
	log_count_default({ count: _resume(() => `${on} of ${input.items.length}`, "a0", $scope0_id) });
	_scope($scope0_id, {
		e: input.items?.length,
		f: on,
		a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
}, 1);
