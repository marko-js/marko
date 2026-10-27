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
	const $scope0_reason = _scope_reason(), $wg__input_open = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let suffix = "s";
	const Panel = { content: _content("b0", ({ isOpen, fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__fmt__OR__label = _write_guard($scope2_reason, 2), $wg__isOpen = _write_guard($scope2_reason, 4), $wi__isOpen__OR__fmt__OR__label = _write_if($scope2_reason, 3);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "a", fmt(label), $wg__fmt__OR__label)}</em>`);
				$wi__isOpen__OR__fmt__OR__label && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", _write_guard($scope2_reason, 3), $wg__isOpen, 0, 0, 1);
		$wi__isOpen__OR__fmt__OR__label && _scope($scope2_id, {
			e: _write_if($scope2_reason, 1) && fmt,
			f: _write_if($scope2_reason, 0) && label
		});
	}, $scope0_id) };
	_for_of(input.items, (x) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(168 | ($wg__input_open << 1 | $wg__input_open << 9));
		const $childScope = _peek_scope_id();
		Panel.content({
			isOpen: input.open,
			fmt: lib.format,
			label: suffix + x
		});
		_scope($scope1_id, {
			c: x,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, _write_guard($scope0_reason, 0));
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.open,
		g: suffix
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_open__OR__input_items = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_write_guard($scope0_reason, 4) << 1 | _write_guard($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id();
			rowsx_default({
				open: input.open,
				items: input.items
			});
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				_: $wi__input_open__OR__input_items && _scope_with_id($scope0_id),
				a: $wi__input_open__OR__input_items && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_show);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		e: input.open,
		f: input.items
	});
}, 1);
