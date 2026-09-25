// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	});
});

// tags/heading.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_nested = _serialize_guard($scope0_reason, 2), $sg__input_type = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.type, {}, _content_resume("__tests__/tags/heading.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("self body");
	}, $scope0_id), 0, $sg__input_type);
	_if(() => {
		if (input.nested) {
			const $scope2_id = _scope_id();
			$content({ type: card_default });
			_serialize_if($scope0_reason, 2) && _scope($scope2_id, {}, "__tests__/tags/heading.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $sg__input_nested, $sg__input_nested, $sg__input_nested);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/heading.marko", 0);
};
var heading_default = _template("__tests__/tags/heading.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	heading_default({
		type: "h1",
		nested: true
	});
}, 1);
