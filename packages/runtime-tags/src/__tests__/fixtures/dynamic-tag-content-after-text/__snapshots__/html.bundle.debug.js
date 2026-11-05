// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "#text/0", input.label, $wg__input_label)}`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
	_html("</span>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	child_default({
		label: "Count: ",
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_mark($scope1_id, "#text/0", n, 2));
			_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_n#0:2/subscribe");
		}, $scope0_id)
	});
	_html(`<button>inc</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/3": $n__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
