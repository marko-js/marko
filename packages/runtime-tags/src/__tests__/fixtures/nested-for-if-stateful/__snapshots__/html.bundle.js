// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $counts__closures = /* @__PURE__ */ new Set();
	let counts = [
		0,
		0,
		0
	];
	_for_of(counts, (count, i) => {
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope3_id = _scope_id();
				_html(`<button>Increment <!>${_escape(count)}${_el_resume($scope3_id, "b")}</button>${_el_resume($scope3_id, "a")}`);
				_script($scope3_id, "a1");
				writeScope($scope3_id, { _: _scope_with_id($scope1_id) });
				return 1;
			}
		}, $scope1_id, "a", 1, 1, 1, 0, 1);
		writeScope($scope1_id, {
			c: count,
			M: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a");
	writeScope($scope0_id, {
		b: counts,
		Bb: $counts__closures
	});
	_resume_branch($scope0_id);
}, 1);
