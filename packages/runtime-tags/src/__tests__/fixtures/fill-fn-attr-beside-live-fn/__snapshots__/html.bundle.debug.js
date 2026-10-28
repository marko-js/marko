// tags/card/index.marko
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.fn("x"), $wg__input)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const tag = _resume((s) => s + "#" + input.title, "__tests__/template.marko_0/tag", $scope0_id);
	let show = true;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_title << 1);
			const $childScope = _peek_scope_id();
			card_default({ fn: (s) => s + ":" + input.title });
			_set_scope_reason($wg__input_title << 1);
			const $childScope2 = _peek_scope_id();
			card_default({ fn: tag });
			_scope($scope1_id, {
				"#childScope/0": $wi__input_title && _existing_scope($childScope),
				"#childScope/1": $wi__input_title && _existing_scope($childScope2)
			}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		tag,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		tag: "1:8",
		show: "2:6"
	});
}, 1);
