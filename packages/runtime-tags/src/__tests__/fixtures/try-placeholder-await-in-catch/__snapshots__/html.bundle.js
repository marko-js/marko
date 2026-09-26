// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_try($scope1_id, "a", _content_resume("a2", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), (v) => {
				_scope_id();
				_html(`<p>${_escape(v)}</p>`);
			}, 0);
		}, $scope1_id), { catch: attrTag({ content: _content_resume("a1", (err) => {
			const $scope4_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope4_reason, 0), $si__err_message = _serialize_if($scope4_reason, 0);
			const $scope4_id = _scope_id();
			const $catch_content__err_message__closures = /* @__PURE__ */ new Set();
			_await($scope4_id, "a", resolveAfter("retried", 2), (retry) => {
				const $scope5_id = _scope_id();
				_html(`<p>caught ${_text_resume($scope5_id, "a", err.message, $sg__err_message * 2)}, ${_escape(retry)}</p>`);
				$si__err_message && _subscribe($catch_content__err_message__closures, _scope($scope5_id, { _: _scope_with_id($scope4_id) }), "a0", $sg__err_message);
				$sg__err_message || $si__err_message && _resume_branch($scope5_id);
			}, $sg__err_message);
			$si__err_message && _scope($scope4_id, { e: $catch_content__err_message__closures });
		}, $scope1_id) }) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
}, 1);
