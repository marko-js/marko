// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let k = input.v;
	let c = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", c)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Body = { content: _content("__tests__/template.marko_1*content", ({ a }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__a = _write_guard($scope1_reason, 0), $wi__a = _write_if($scope1_reason, 0);
		_if(() => {
			if (a) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", a, $wg__a)}</p>`);
				$wi__a && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__a, $wg__a, 0, 0, 1);
		$wi__a && _scope($scope1_id, {}, "__tests__/template.marko", "4:2");
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	Body.content({ a: c ? k + c : "" });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		k,
		c,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		k: "1:6",
		c: "2:6"
	});
}, 1);
