// template.marko
let n = 0;
_shells({
	a: "a; ;<main></main>",
	a0: "a0;D ;<b> </b>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "a", ++n, void 0, 0, 0)}</b>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {});
}, 1);
