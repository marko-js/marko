// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_obj_list = _write_guard($scope0_reason, 2), $wg__input_obj_show = _write_guard($scope0_reason, 3), $wg__input_obj_list__OR__input_obj_show = _write_guard($scope0_reason, 0), $wi__input_obj = _write_if($scope0_reason, 1), $wi__input_count = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_obj__closures = /* @__PURE__ */ new Set();
	const $input_count__closures = /* @__PURE__ */ new Set();
	_for_of(input.obj.list, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.obj.show) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "a", item, $wg__input_obj_list)}</span>`);
				_script($scope2_id, "b0", $wg__input_obj_list);
				_subscribe($wi__input_count && $input_count__closures, _subscribe($wi__input_obj && $input_obj__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1", $wg__input_obj_list), "b2", $wg__input_obj_list);
				$wg__input_obj_list || (_write_guard($scope0_reason, 1) || _write_guard($scope0_reason, 4)) && _resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "a", $wg__input_obj_list__OR__input_obj_show, $wg__input_obj_show, 0, 0, 1);
		_scope($scope1_id, {
			c: item,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", $wg__input_obj_list__OR__input_obj_show, $wg__input_obj_list);
	_scope($scope0_id, {
		d: input.obj,
		f: _write_if($scope0_reason, 2) && input.obj?.show,
		g: input.count,
		h: $wi__input_obj && $input_obj__closures,
		j: $wi__input_count && $input_count__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = {
		list: ["a", "b"],
		show: true,
		name: "first"
	};
	let count = 1;
	_html(`<button>update</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(682);
	const $childScope = _peek_scope_id();
	child_default({
		obj,
		count
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: count,
		b: _existing_scope($childScope)
	});
}, 1);
