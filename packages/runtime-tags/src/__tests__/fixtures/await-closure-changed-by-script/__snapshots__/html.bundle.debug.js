// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const $return = count;
	_script($scope0_id, "__tests__/tags/counter.marko_0", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	const $m__closures = new Set();
	const $known__closures = new Set();
	const $dynamic__closures = new Set();
	let n = 1;
	let m = 2;
	const $childScope = _peek_scope_id();
	let known = counter_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_known#11/var");
	const $inputshowCounter_scope = _peek_scope_id();
	let dynamic = _dynamic_tag($scope0_id, "#text/2", input.show && counter_default, {}, 0, 0, 1, 1);
	_var($scope0_id, "#scopeOffset/3", $inputshowCounter_scope, "__tests__/template.marko_0_dynamic#12/var");
	_html(`<button></button>${_el_mark($scope0_id, "#button/4")}`);
	_try($scope0_id, "#text/5", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter(0, 1), (v) => {
			const $scope2_id = _scope_id();
			let local = n;
			_html(`<p>${_text_mark($scope2_id, "#text/0", n + m)}</p><span>${_escape(local)}</span><b>${_text_mark($scope2_id, "#text/2", known)} ${_text_mark($scope2_id, "#text/3", dynamic, 2)}</b>`);
			_script($scope2_id, "__tests__/template.marko_2_n#0:9");
			const $scope2_write = _scope($scope2_id, {}, "__tests__/template.marko", "10:4");
			_subscribe($n__closures, $scope2_write, "__tests__/template.marko_2_n#0:9/subscribe");
			_subscribe($m__closures, $scope2_write, "__tests__/template.marko_2_m#0:10/subscribe");
			_subscribe($known__closures, $scope2_write, "__tests__/template.marko_2_known#0:11/subscribe");
			_subscribe($dynamic__closures, $scope2_write, "__tests__/template.marko_2_dynamic#0:12/subscribe");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:2");
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_3*content");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		m,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:n/13": $n__closures,
		"ClosureScopes:m/14": $m__closures,
		"ClosureScopes:known/15": $known__closures,
		"ClosureScopes:dynamic/16": $dynamic__closures
	}, "__tests__/template.marko", 0, {
		n: "3:6",
		m: "4:6"
	});
}, 1);
