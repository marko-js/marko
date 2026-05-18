// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $a__closures = /* @__PURE__ */ new Set();
	const $b__closures = /* @__PURE__ */ new Set();
	let a = 0;
	let b = 0;
	_html(`<button></button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		{
			const $scope2_id = _scope_id();
			_html(`<div>${_escape(a)}${_el_resume($scope2_id, "a")}</div><div>${_escape(b)}${_el_resume($scope2_id, "b")}</div>`);
			_subscribe($b__closures, _subscribe($a__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) })));
		}
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), {});
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		c: a,
		d: b,
		Bc: $a__closures,
		Bd: $b__closures
	});
	_resume_branch($scope0_id);
}, 1);
