// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clickCount__closures = /* @__PURE__ */ new Set();
	let clickCount = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}<div></div>${_el_resume($scope0_id, "b")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter(clickCount), (value) => {
			const $scope4_id = _scope_id();
			_html(`Async: ${_text_resume($scope4_id, "a", value > 1 ? (() => {
				throw new Error("ERROR!");
			})() : value, 2)}`);
			_scope($scope4_id, {});
		});
		_script($scope1_id, "a0", 0);
		_subscribe($clickCount__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("LOADING...");
	}, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(_text_resume($scope3_id, "a", err, $wg__err));
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, "a2", "a3");
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		d: clickCount,
		e: $clickCount__closures
	});
}, 1);
