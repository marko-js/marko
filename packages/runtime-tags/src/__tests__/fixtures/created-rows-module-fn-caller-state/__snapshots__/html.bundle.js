// tags/lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/rowsx.marko
var rowsx_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_open__OR__input_label = _write_guard($scope0_reason, 1), $wg__input_open = _write_guard($scope0_reason, 3), $wg__input_label = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("b0", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__fmt__OR__label = _write_guard($scope3_reason, 2), $wg__isOpen = _write_guard($scope3_reason, 4), $wi__isOpen__OR__fmt__OR__label = _write_if($scope3_reason, 3);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", fmt(label), $wg__fmt__OR__label)}</em>`);
				$wi__isOpen__OR__fmt__OR__label && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", _write_guard($scope3_reason, 3), $wg__isOpen, 0, 0, 1);
		$wi__isOpen__OR__fmt__OR__label && _scope($scope3_id, {
			e: _write_if($scope3_reason, 1) && fmt,
			f: _write_if($scope3_reason, 0) && label
		});
	}, $scope0_id) };
	_for_of(input.items, (x) => {
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_open << 1 | $wg__input_items__OR__input_open__OR__input_label << 3 | _write_guard($scope0_reason, 0) << 5 | $wg__input_items__OR__input_open__OR__input_label << 7 | $wg__input_open << 9);
		const $childScope = _peek_scope_id();
		Panel.content({
			isOpen: input.open,
			fmt: lib.format,
			label: input.label + x
		});
		_write_if($scope0_reason, 1) && _scope($scope1_id, {
			c: _write_if($scope0_reason, 4) && x,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", $wg__input_items__OR__input_open__OR__input_label, _write_guard($scope0_reason, 2));
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "a", input.label, $wg__input_label)}</b>`);
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 2) && input.open,
		h: input.label,
		i: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let l = "a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(522 | (_write_guard($scope0_reason, 2) << 5 | _write_guard($scope0_reason, 1) << 7));
			const $childScope = _peek_scope_id();
			rowsx_default({
				label: l,
				open: input.open,
				items: input.items
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0));
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: $wi__input_show && input.open,
		g: $wi__input_show && input.items,
		h: l
	});
}, 1);
