// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", rejectAfter(new Error("ERROR!"), 1), (v) => {
				const $scope6_id = _scope_id();
				_html(`<p>${_escape(v)}</p>`);
			}, 0);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope4_reason, 0), $si__err_message = _serialize_if($scope4_reason, 0);
			const $scope4_id = _scope_id();
			const $catch_content__err_message__closures = new Set();
			_await($scope4_id, "#text/0", resolveAfter("retried", 2), (retry) => {
				const $scope5_id = _scope_id();
				_html(`<p>caught ${_text_resume($scope5_id, "#text/0", err.message, $sg__err_message * 2)}, ${_escape(retry)}</p>`);
				$si__err_message && _subscribe($catch_content__err_message__closures, _scope($scope5_id, { _: _scope_with_id($scope4_id) }, "__tests__/template.marko", "7:8"), "__tests__/template.marko_5_err_message#4:3/subscribe", $sg__err_message);
				$sg__err_message || $si__err_message && _resume_branch($scope5_id);
			}, $sg__err_message);
			$si__err_message && _scope($scope4_id, { "ClosureScopes:err_message/4": $catch_content__err_message__closures }, "__tests__/template.marko", "6:6");
		}, void 0, "__tests__/template.marko_4*content");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading...");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
