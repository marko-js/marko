// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), (v) => {
				_scope_id();
				_html(`<p>${_escape(v)}</p>`);
			}, 0);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0), $wi__err_message = _write_if($scope4_reason, 0);
			const $scope4_id = _scope_id();
			const $catch_content__err_message__closures = /* @__PURE__ */ new Set();
			_await($scope4_id, "a", resolveAfter("retried", 2), (retry) => {
				const $scope5_id = _scope_id();
				_html(`<p>caught ${_text_resume($scope5_id, "a", err.message, $wg__err_message * 2)}, ${_escape(retry)}</p>`);
				$wi__err_message && _subscribe($catch_content__err_message__closures, _scope($scope5_id, { _: _scope_with_id($scope4_id) }), "a0", $wg__err_message);
				$wg__err_message || $wi__err_message && _resume_branch($scope5_id);
			}, $wg__err_message);
			$wi__err_message && _scope($scope4_id, { e: $catch_content__err_message__closures });
		}, void 0, "a1");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, void 0, "a2");
}, 1);
