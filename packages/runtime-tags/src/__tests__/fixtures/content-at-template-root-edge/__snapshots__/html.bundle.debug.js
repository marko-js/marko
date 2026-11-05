// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html("<div>");
	child_default({ content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "#text/0", n));
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:7"), "__tests__/template.marko_1_n#0:3/subscribe");
	}, $scope0_id) });
	_html("</div><div>x");
	child_default({ content: _content("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(_text_mark($scope2_id, "#text/0", n, 2));
		_subscribe($n__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:n/4": 1
		}, "__tests__/template.marko", "3:8"), "__tests__/template.marko_2_n#0:3/subscribe");
	}, $scope0_id) });
	_html(`</div><button>inc</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/4": $n__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
