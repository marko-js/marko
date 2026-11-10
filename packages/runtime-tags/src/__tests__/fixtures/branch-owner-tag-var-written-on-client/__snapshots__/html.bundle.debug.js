// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button>inc</button>${_el_mark($scope0_id, "#button/0")}`);
	const $return = count;
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { count }, "__tests__/tags/counter.marko", 0, { count: "1:6" });
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let count = counter_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count#3/var");
	_if(() => {
		if (count) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "#text/0", count)}</p>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
