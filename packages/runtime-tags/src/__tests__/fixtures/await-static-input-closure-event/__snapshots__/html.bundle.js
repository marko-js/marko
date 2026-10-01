// template.marko
const data = Promise.resolve({ items: ["a", "b"] });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_foo = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_foo__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", data, (d) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", input.foo, _write_guard($scope0_reason, 0))}</p><button>${_text_resume($scope2_id, "c", count)}</button>${_el_resume($scope2_id, "b")}`);
			_script($scope2_id, "a0");
			_subscribe($count__closures, _subscribe($wi__input_foo && $input_foo__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1"), "a2");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("Loading");
	}, void 0, "a3");
	_scope($scope0_id, {
		e: count,
		f: $wi__input_foo && $input_foo__closures,
		g: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
