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
	const $scope0_reason = _scope_reason(), $wg__input_open__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_open = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Panel = { content: _content("b1", ({ isOpen, fmt, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__fmt__OR__label = _write_guard($scope1_reason, 2), $wg__isOpen = _write_guard($scope1_reason, 4), $wi__isOpen__OR__fmt__OR__label = _write_if($scope1_reason, 3);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", fmt(label), $wg__fmt__OR__label)}</em>`);
				$wi__isOpen__OR__fmt__OR__label && _scope($scope2_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", _write_guard($scope1_reason, 3), $wg__isOpen, 0, 0, 1);
		$wi__isOpen__OR__fmt__OR__label && _scope($scope1_id, {
			e: _write_if($scope1_reason, 1) && fmt,
			f: _write_if($scope1_reason, 0) && label
		});
	}, $scope0_id) };
	_set_scope_reason($wg__input_open << 1 | $wg__input_open__OR__input_label << 3 | _write_guard($scope0_reason, 2) << 5 | $wg__input_open__OR__input_label << 7 | $wg__input_open << 9);
	const $childScope = _peek_scope_id();
	Panel.content({
		isOpen: input.open,
		fmt: _resume((v) => lib.format(v), "b0"),
		label: input.label + "1"
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let l = "a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(34 | _write_guard($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id();
			rowsx_default({
				label: l,
				open: input.open
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
		f: _write_if($scope0_reason, 0) && input.open,
		g: l
	});
}, 1);
