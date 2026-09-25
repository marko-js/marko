// tags/card.marko
var card_default = _template("b", (input) => {
	_serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// tags/heading.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_nested = _serialize_guard($scope0_reason, 2), $sg__input_type = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.type, {}, _content_resume("c0", () => {
		_scope_id();
		_scope_reason();
		_html("self body");
	}, $scope0_id), 0, $sg__input_type);
	_if(() => {
		if (input.nested) {
			const $scope2_id = _scope_id();
			$content({ type: card_default });
			_serialize_if($scope0_reason, 2) && _scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", $sg__input_nested, $sg__input_nested, $sg__input_nested);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
};
var heading_default = _template("c", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	heading_default({
		type: "h1",
		nested: true
	});
}, 1);
