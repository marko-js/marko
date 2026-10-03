// tags/note.marko
var note_default = _template("__tests__/tags/note.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</span>`);
	_script($scope0_id, "__tests__/tags/note.marko_0_input_label#3", $wg__input_label);
	_scope($scope0_id, { input_label: input.label }, "__tests__/tags/note.marko", 0, { input_label: ["input.label"] });
	$wg__input_label || _resume_branch($scope0_id);
});

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
			_await($scope3_id, "#text/0", resolveAfter("a", 1), (v) => {
				const $scope5_id = _scope_id();
				_html(`<p>${_escape(v)}</p>`);
			}, 0);
			_await($scope3_id, "#text/1", rejectAfter(new Error("nope"), 2), (v) => {
				const $scope6_id = _scope_id();
				_html(_escape(v));
			}, 0);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`<b>${_text_resume($scope4_id, "#text/0", err.message, $wg__err_message)}</b>`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "10:6");
		}, void 0, "__tests__/template.marko_4*content");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		note_default({ label: "placeholder" });
	}, void 0, "__tests__/template.marko_2*content");
	_await($scope0_id, "#text/1", resolveAfter("after", 3), (v) => {
		const $scope7_id = _scope_id();
		_html(`<p>${_escape(v)}</p>`);
	}, 0);
}, 1);
