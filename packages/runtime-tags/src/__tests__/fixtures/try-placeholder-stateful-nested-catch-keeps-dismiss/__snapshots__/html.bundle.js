// tags/note.marko
var note_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</span>`);
	_script($scope0_id, "b0", $wg__input_label);
	_scope($scope0_id, { d: input.label });
	$wg__input_label || _resume_branch($scope0_id);
});

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
			_await($scope3_id, "a", resolveAfter("a", 1), (v) => {
				_scope_id();
				_html(`<p>${_escape(v)}</p>`);
			}, 0);
			_await($scope3_id, "b", rejectAfter(/* @__PURE__ */ new Error("nope"), 2), (v) => {
				_scope_id();
				_html(_escape(v));
			}, 0);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`<b>${_text_resume($scope4_id, "a", err.message, $wg__err_message)}</b>`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {});
		}, void 0, "a0");
	}, () => {
		_scope_reason();
		_scope_id();
		note_default({ label: "placeholder" });
	}, void 0, "a1");
	_await($scope0_id, "b", resolveAfter("after", 3), (v) => {
		_scope_id();
		_html(`<p>${_escape(v)}</p>`);
	}, 0);
}, 1);
