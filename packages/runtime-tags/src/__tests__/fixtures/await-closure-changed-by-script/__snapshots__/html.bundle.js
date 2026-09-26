// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	const $m__closures = /* @__PURE__ */ new Set();
	let n = 1;
	let m = 2;
	_html(`<button></button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(0, 1), (v) => {
			const $scope2_id = _scope_id();
			let local = n;
			_html(`<p>${_text_resume($scope2_id, "a", 3)}</p><span>${_escape(local)}</span>`);
			_script($scope2_id, "a0");
			_subscribe($m__closures, _subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1"), "a2");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		c: n,
		d: m,
		e: $n__closures,
		f: $m__closures
	});
}, 1);
