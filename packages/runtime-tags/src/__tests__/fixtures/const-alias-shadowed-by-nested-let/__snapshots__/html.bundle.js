// tags/wrap.marko
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x_n__closures = /* @__PURE__ */ new Set();
	let x = { n: 1 };
	const { n } = x;
	wrap_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let x = 10;
		_html(`<span>${_text_resume($scope1_id, "a", n)}-${_text_resume($scope1_id, "b", x, 2)}</span><button></button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a0");
		_subscribe($x_n__closures, _scope($scope1_id, {
			d: x,
			_: _scope_with_id($scope0_id)
		}), "a1");
	}, $scope0_id) });
	_html(`<button class=outer></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: x.n,
		e: $x_n__closures
	});
}, 1);
