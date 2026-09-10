// template.marko
const data = Promise.resolve({ items: ["a", "b"] });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_foo = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_foo__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_try($scope0_id, "a", _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", data, (d) => {
			const $scope2_id = _scope_id();
			$si__input_foo && _script($scope2_id, "a0");
			_script($scope2_id, "a1");
			_html(`<p>${_text_resume($scope2_id, "a", input.foo, _serialize_guard($scope0_reason, 0))}</p><button>${_text_resume($scope2_id, "c", count)}</button>${_el_resume($scope2_id, "b")}`);
			_script($scope2_id, "a2");
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
		_scope_reason();
		_scope_id();
		_html("Loading");
	}, $scope0_id) }) });
	_scope($scope0_id, {
		d: $si__input_foo && input.foo,
		e: count,
		f: $si__input_foo && $input_foo__closures,
		g: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
