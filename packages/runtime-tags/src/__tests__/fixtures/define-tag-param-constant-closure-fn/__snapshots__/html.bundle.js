// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: n });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const f = _resume(function() {
		return "A";
	}, "a0");
	({ content: _content("a1", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0), $wi__on = _write_if($scope1_reason, 0);
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_escape(f())}</span>`);
				$wi__on && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", $wg__on, $wg__on, 0, 0, 1);
		$wi__on && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) }).content({ on: true });
	counter_default({});
	_scope($scope0_id, { c: f });
}, 1);
