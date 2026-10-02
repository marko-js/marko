// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x_n__closures = new Set();
	let x = { n: 1 };
	const { n } = x;
	wrap_default({ content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let x = 10;
		_html(`<span>${_text_resume($scope1_id, "#text/0", n)}-${_text_resume($scope1_id, "#text/1", x, 2)}</span><button></button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($x_n__closures, _scope($scope1_id, {
			x,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { x: "3:12" }), "__tests__/template.marko_1_x_n#0:3/subscribe");
	}, $scope0_id) });
	_html(`<button class=outer></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_x_n#3");
	_scope($scope0_id, {
		x_n: x.n,
		"ClosureScopes:x_n/4": $x_n__closures
	}, "__tests__/template.marko", 0, { x_n: ["x.n", "1:6"] });
}, 1);
