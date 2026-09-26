// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	const $m__closures = new Set();
	let n = 0;
	let m = 0;
	_html(`<button id=load>load</button>${_el_resume($scope0_id, "#button/0")}<button id=inc>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div>n ${_text_resume($scope1_id, "#text/1", n, 2)}</div>${_el_resume($scope1_id, "#div/0")}`);
		_await($scope1_id, "#text/2", m ? resolveAfter(m) : 0, (v) => {
			const $scope3_id = _scope_id();
			_html(`value ${_text_resume($scope3_id, "#text/0", v, 2)}`);
			_scope($scope3_id, {}, "__tests__/template.marko", "13:4");
		});
		_script($scope1_id, "__tests__/template.marko_1_n#3");
		_subscribe($m__closures, _subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2"), "__tests__/template.marko_1_n#3/subscribe"), "__tests__/template.marko_1_m#4/subscribe");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("LOADING");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		m,
		"ClosureScopes:n": $n__closures,
		"ClosureScopes:m": $m__closures
	}, "__tests__/template.marko", 0, {
		n: "3:6",
		m: "4:6"
	});
}, 1);
