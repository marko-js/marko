// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", Promise.resolve(n), (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope1_id, "b", x, 2)}</p>`);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
	});
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.label,
		f: n,
		g: $wi__input_label && $input_label__closures
	});
}, 1);
