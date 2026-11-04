// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/badge.marko
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 0), $wi__input_tag = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "#text/0", input.tag, $wg__input_tag)}</span>`);
	_if(() => {
		if (input.tag === "t3") {
			const $scope1_id = _scope_id();
			_html("<em>three</em>");
			$wi__input_tag && _scope($scope1_id, {}, "__tests__/tags/badge.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_tag, $wg__input_tag, 0, 0, 1);
	$wi__input_tag && _scope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wg__input_tag = _write_guard($scope0_reason, 1), $wi__input_tag = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let show = true;
	let items = [1, 2];
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_label#0:6/subscribe", $wg__input_label);
	}, $scope0_id) });
	_if(() => {
		if (show) {
			const $scope2_id = _scope_id();
			_set_scope_reason($wg__input_tag << 1);
			const $childScope = _peek_scope_id();
			badge_default({ tag: input.tag });
			_scope($scope2_id, { "#childScope/0": $wi__input_tag && _existing_scope($childScope) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_for_of(items, (item) => {
		const $scope3_id = _scope_id();
		_set_scope_reason($wg__input_tag << 1);
		const $childScope2 = _peek_scope_id();
		badge_default({ tag: input.tag });
		_scope($scope3_id, { "#childScope/0": $wi__input_tag && _existing_scope($childScope2) }, "__tests__/template.marko", "5:2");
	}, 0, $scope0_id, "#text/2");
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_tag: input.tag,
		show,
		"ClosureScopes:input_label/10": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		show: "1:6"
	});
}, 1);
