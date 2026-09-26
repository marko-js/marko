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
var heading_default = _template("__tests__/tags/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 2), $si__input_type__OR__input_depth = _serialize_if($scope0_reason, 0), $sg__input_type = _serialize_guard($scope0_reason, 1), $si__input_depth = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_depth__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.type, {}, _content_resume("__tests__/tags/heading.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`depth ${_text_resume($scope1_id, "#text/0", input.depth, $sg__input_depth * 2)}`);
		$si__input_type__OR__input_depth && _subscribe($si__input_depth && $input_depth__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/heading.marko", "1:4"), "__tests__/tags/heading.marko_1_input_depth#4/subscribe", $sg__input_depth);
		$sg__input_depth || $si__input_type__OR__input_depth && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_depth: input.depth }]), 0, $sg__input_type);
	$si__input_type__OR__input_depth && _scope($scope0_id, {
		input_depth: _serialize_if($scope0_reason, 1) && input.depth,
		"ClosureScopes:input_depth/5": $si__input_depth && $input_depth__closures
	}, "__tests__/tags/heading.marko", 0, { input_depth: ["input.depth"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	heading_default({
		type: card_default,
		depth: 0
	});
}, 1);
