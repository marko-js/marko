// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a1: "a1,<em>static</em>",
	a: "a; ;<main></main>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				_scope_id();
				_html("<em>static</em>");
			}, void 0, (err) => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "a", err.message, 1, 4, 0)}</b>`);
				_scope($scope3_id, {});
			}, void 0, "a0", "a1", void 0, 1, 1);
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {});
}, 1);
