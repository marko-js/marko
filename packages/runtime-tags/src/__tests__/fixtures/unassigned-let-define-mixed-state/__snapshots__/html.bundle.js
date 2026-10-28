// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let k = input.v;
	let c = 0;
	_html(`<button>${_text_resume($scope0_id, "b", c)}</button>${_el_resume($scope0_id, "a")}`);
	const Body = { content: _content("a0", ({ a }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__a = _write_guard($scope1_reason, 0), $wi__a = _write_if($scope1_reason, 0);
		_if(() => {
			if (a) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", a, $wg__a)}</p>`);
				$wi__a && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", $wg__a, $wg__a, 0, 0, 1);
		$wi__a && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	Body.content({ a: "" });
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: k,
		h: c,
		c: _existing_scope($childScope)
	});
}, 1);
