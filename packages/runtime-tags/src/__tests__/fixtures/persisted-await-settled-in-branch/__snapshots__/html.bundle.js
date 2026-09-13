// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a: "a;b%bD ;<!><!><p> </p>",
	a1: "a1;D ;<b> </b>",
	a2: "a2;D%;<section><!></section>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_await($scope1_id, "a", input.value, (v) => {
				const $scope2_id = _scope_id();
				_html(`<b>${_patch_text($scope2_id, "a", v, void 0, $scope0_owned, 2)}</b>`);
				_scope($scope2_id, {});
			}, 1, "a1");
			_html("</section>");
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a2"], $scope0_owned, 1);
	_html(`<p>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_owned, 3)}</p>`);
	$scope0_reason && _scope($scope0_id, { f: _source_if($scope0_reason, 1) && input.value });
}, 1, 0);
