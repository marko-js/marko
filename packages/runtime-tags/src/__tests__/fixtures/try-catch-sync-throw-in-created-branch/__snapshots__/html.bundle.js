// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	_html(`<button>show</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {}, $scope1_id, "a");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
	}, void 0, (err) => {
		const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(`caught ${_text_resume($scope5_id, "a", err.message, $wg__err_message * 2)}`);
		_write_if($scope5_reason, 0) && _scope($scope5_id, {});
	}, void 0, "a1");
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_if(() => {}, $scope2_id, "a");
		_subscribe($show__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cg: 1
		}), "a3");
	}, void 0, (err) => {
		const $scope7_reason = _scope_reason(), $wg__err_message2 = _write_guard($scope7_reason, 0);
		const $scope7_id = _scope_id();
		_html(`outer caught ${_text_resume($scope7_id, "a", err.message, $wg__err_message2 * 2)}`);
		_write_if($scope7_reason, 0) && _scope($scope7_id, {});
	}, void 0, "a4");
	_try($scope0_id, "d", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_if(() => {}, $scope3_id, "a");
		_subscribe($show__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			Cg: 2
		}), "a6");
	}, void 0, (err) => {
		const $scope11_reason = _scope_reason(), $wg__err_message4 = _write_guard($scope11_reason, 0);
		const $scope11_id = _scope_id();
		_html(`outer caught ${_text_resume($scope11_id, "a", err.message, $wg__err_message4 * 2)}`);
		_write_if($scope11_reason, 0) && _scope($scope11_id, {});
	}, void 0, "a7");
	_try($scope0_id, "e", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_if(() => {}, $scope4_id, "a");
		_subscribe($show__closures, _scope($scope4_id, {
			_: _scope_with_id($scope0_id),
			Cg: 3
		}), "a9");
	}, void 0, (err) => {
		const $scope15_reason = _scope_reason(), $wg__err_message5 = _write_guard($scope15_reason, 0);
		const $scope15_id = _scope_id();
		_html(`outer caught ${_text_resume($scope15_id, "a", err.message, $wg__err_message5 * 2)}`);
		_write_if($scope15_reason, 0) && _scope($scope15_id, {});
	}, void 0, "a10");
	_script($scope0_id, "a11");
	_scope($scope0_id, { g: $show__closures });
}, 1);
