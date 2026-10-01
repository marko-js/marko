// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
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
var heading_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_type__OR__input_depth = _write_if($scope0_reason, 1), $wg__input_type = _write_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_depth = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_depth__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.type, {}, _content_resume("c0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`depth ${_text_resume($scope2_id, "a", input.depth, $wg__input_depth * 2)}`);
				$wi__input_show__OR__input_type__OR__input_depth && _subscribe($wi__input_depth && $input_depth__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "c1", $wg__input_depth);
				$wg__input_depth || $wi__input_show__OR__input_type__OR__input_depth && _resume_branch($scope2_id);
			}, $scope1_id, ($scope) => [{ f: input.depth }, { _: $scope($scope0_id) }]), 0, $wg__input_type);
			$wi__input_show__OR__input_type__OR__input_depth && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, $wg__input_show);
	$wi__input_show__OR__input_type__OR__input_depth && _scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.type,
		f: _write_if($scope0_reason, 0) && input.depth,
		h: $wi__input_depth && $input_depth__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	heading_default({
		type: card_default,
		depth: 0,
		show: true
	});
}, 1);
