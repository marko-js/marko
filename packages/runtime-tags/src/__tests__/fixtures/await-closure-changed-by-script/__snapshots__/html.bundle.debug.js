// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	const $m__closures = new Set();
	let n = 1;
	let m = 2;
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(0, 1), (v) => {
			const $scope2_id = _scope_id();
			let local = n;
			_html(`<p>${_text_resume($scope2_id, "#text/0", n + m)}</p><span>${_escape(local)}</span>`);
			_script($scope2_id, "__tests__/template.marko_2_n#2");
			_subscribe($m__closures, _subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4"), "__tests__/template.marko_2_n#2/subscribe"), "__tests__/template.marko_2_m#3/subscribe");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		m,
		"ClosureScopes:n": $n__closures,
		"ClosureScopes:m": $m__closures
	}, "__tests__/template.marko", 0, {
		n: "2:6",
		m: "3:6"
	});
}, 1);
