// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	const $m__closures = /* @__PURE__ */ new Set();
	let n = 0;
	let m = 0;
	_html(`<button id=load>load</button>${_el_resume($scope0_id, "a")}<button id=inc>inc</button>${_el_resume($scope0_id, "b")}`);
	_try($scope0_id, "c", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div>n ${_text_resume($scope1_id, "b", n, 2)}</div>${_el_resume($scope1_id, "a")}`);
		_await($scope1_id, "c", 0, (v) => {
			const $scope3_id = _scope_id();
			_html(`value ${_text_resume($scope3_id, "a", v, 2)}`);
			_scope($scope3_id, {});
		});
		_script($scope1_id, "a2");
		_subscribe($m__closures, _subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3"), "a4");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("LOADING");
	}, $scope0_id) }) });
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		d: n,
		e: m,
		f: $n__closures,
		g: $m__closures
	});
}, 1);
