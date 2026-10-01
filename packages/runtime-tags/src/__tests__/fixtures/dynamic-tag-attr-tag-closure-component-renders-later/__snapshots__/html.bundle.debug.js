// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.item.content, {}, 0, 0, $wg__input_item_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_item_content: input.item?.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_item_content: ["input.item.content"],
		open: "1:6"
	});
});

// tags/heading.marko
var heading_default = _template("__tests__/tags/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_text = _write_guard($scope0_reason, 2), $wi__input_type__OR__input_text = _write_if($scope0_reason, 0), $wg__input_type = _write_guard($scope0_reason, 1), $wi__input_text = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.type, { item: attrTag({ content: _content_resume("__tests__/tags/heading.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`text ${_text_resume($scope1_id, "#text/0", input.text, $wg__input_text * 2)}`);
		$wi__input_type__OR__input_text && _subscribe($wi__input_text && $input_text__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/heading.marko", "2:4"), "__tests__/tags/heading.marko_1_input_text#0:4/subscribe", $wg__input_text);
		$wg__input_text || $wi__input_type__OR__input_text && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_text: input.text }]) }) }, 0, 0, $wg__input_type);
	$wi__input_type__OR__input_text && _scope($scope0_id, {
		input_text: _write_if($scope0_reason, 1) && input.text,
		"ClosureScopes:input_text/5": $wi__input_text && $input_text__closures
	}, "__tests__/tags/heading.marko", 0, { input_text: ["input.text"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	heading_default({
		type: card_default,
		text: "Hello"
	});
}, 1);
