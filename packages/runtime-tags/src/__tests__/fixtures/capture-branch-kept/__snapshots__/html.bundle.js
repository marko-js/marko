// tags/list.marko
var list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $wg__input_item);
		$wi__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_item, $wg__input_item);
	$wi__input_item && _scope($scope0_id, {});
});

// tags/probe.marko
var probe_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_scope($scope0_id, { d: input.get });
});

// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let items = [1, 2];
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			const $if_content__s__closures = /* @__PURE__ */ new Set();
			const s = input.show;
			_set_scope_reason(2);
			let $item;
			forOf(items, (item) => {
				$item = attrTags($item, { content: _content("b2", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (s) {
							const $scope3_id = _scope_id();
							_html("<span>shown</span>");
							$wi__input_show && _scope($scope3_id, {});
							return 0;
						}
					}, $scope2_id, "a", $wg__input_show, $wg__input_show, 0, 0, 1);
					_subscribe($wi__input_show && $if_content__s__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1", $wg__input_show);
					$wg__input_show || _resume_branch($scope2_id);
				}, $scope1_id) });
			});
			const $childScope = _peek_scope_id();
			list_default({ item: $item });
			const $childScope2 = _peek_scope_id();
			probe_default({ get: _resume(function() {
				return "s:" + s;
			}, "b0", $scope1_id) });
			_scope($scope1_id, {
				c: s,
				_: _scope_with_id($scope0_id),
				j: $wi__input_show && $if_content__s__closures,
				a: _existing_scope($childScope),
				b: $wi__input_show && _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "b3");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.show,
		g: items
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1 | _write_guard($scope0_reason, 2) << 3);
	const $childScope = _peek_scope_id();
	child_default({
		on: input.on,
		show: input.show
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
