// tags/label.marko
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_onHide = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", typeof input.onHide, $wg__input_onHide)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/label.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let y = input.v;
			label_default({ onHide: function() {
				y = "z";
			} });
			_html(`<p>${_text_resume($scope1_id, "#text/1", y + input.w)}</p>`);
			_scope($scope1_id, {
				y: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { y: "2:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, {
		input_v: _write_if($scope0_reason, 1) && input.v,
		input_w: input.w
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_w: ["input.w"]
	});
}, 1);
