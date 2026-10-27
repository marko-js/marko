// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			card_default({ content: _content("a0", () => {
				_scope_reason();
				_scope_id();
				_html("<em>static</em>");
			}, $scope1_id) });
			$wi__input_show && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show, 0, 0, 1);
	$wi__input_show && _scope($scope0_id, {});
}, 1);
