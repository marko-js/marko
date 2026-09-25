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
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 4), $si__input_show__OR__input_type__OR__input_depth = _serialize_if($scope0_reason, 1), $sg__input_type = _serialize_guard($scope0_reason, 3), $sg__input_show = _serialize_guard($scope0_reason, 2), $si__input_depth = _serialize_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_depth__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.type, {}, _content_resume("__tests__/tags/heading.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`depth ${_text_resume($scope2_id, "#text/0", input.depth, $sg__input_depth * 2)}`);
				$si__input_show__OR__input_type__OR__input_depth && _subscribe($si__input_depth && $input_depth__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/heading.marko", "2:6"), "__tests__/tags/heading.marko_2_input_depth#5/subscribe", $sg__input_depth);
				$sg__input_depth || $si__input_show__OR__input_type__OR__input_depth && _resume_branch($scope2_id);
			}, $scope1_id, ($scope) => [{ input_depth: input.depth }, { _: $scope($scope0_id) }]), 0, $sg__input_type);
			$si__input_show__OR__input_type__OR__input_depth && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/heading.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _serialize_guard($scope0_reason, 0), $sg__input_show, $sg__input_show);
	$si__input_show__OR__input_type__OR__input_depth && _scope($scope0_id, {
		input_type: _serialize_if($scope0_reason, 2) && input.type,
		input_depth: _serialize_if($scope0_reason, 0) && input.depth,
		"ClosureScopes:input_depth": $si__input_depth && $input_depth__closures
	}, "__tests__/tags/heading.marko", 0, {
		input_type: ["input.type"],
		input_depth: ["input.depth"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	heading_default({
		type: card_default,
		depth: 0,
		show: true
	});
}, 1);
