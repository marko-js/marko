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
var rowsx_default = _template("__tests__/tags/rowsx.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_open__OR__input_label = _write_guard($scope0_reason, 1), $wg__input_open = _write_guard($scope0_reason, 3), $wg__input_label = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/tags/rowsx.marko_3*content", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__fmt__OR__label = _write_guard($scope3_reason, 2), $wg__isOpen = _write_guard($scope3_reason, 4), $wi__isOpen__OR__fmt__OR__label = _write_if($scope3_reason, 3);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "#text/0", fmt(label), $wg__fmt__OR__label)}</em>`);
				$wi__isOpen__OR__fmt__OR__label && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/tags/rowsx.marko", "4:4");
				return 0;
			}
		}, $scope3_id, "#text/0", _write_guard($scope3_reason, 3), $wg__isOpen, 0, 0, 1);
		$wi__isOpen__OR__fmt__OR__label && _scope($scope3_id, {
			fmt: _write_if($scope3_reason, 1) && fmt,
			label: _write_if($scope3_reason, 0) && label
		}, "__tests__/tags/rowsx.marko", "3:2", {
			fmt: "3:25",
			label: "3:30"
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
			x: _write_if($scope0_reason, 4) && x,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/tags/rowsx.marko", "8:2", { x: "8:6" });
	}, 0, $scope0_id, "#text/0", $wg__input_items__OR__input_open__OR__input_label, _write_guard($scope0_reason, 2));
	_if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label)}</b>`);
			_scope($scope2_id, {}, "__tests__/tags/rowsx.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/rowsx.marko_0");
	_scope($scope0_id, {
		input_open: _write_if($scope0_reason, 2) && input.open,
		input_label: input.label,
		open
	}, "__tests__/tags/rowsx.marko", 0, {
		input_open: ["input.open"],
		input_label: ["input.label"],
		open: "2:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let l = "a";
	let o = true;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(650 | _write_guard($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id();
			rowsx_default({
				label: l,
				open: o,
				items: input.items
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0));
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}<button class=o>o</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_items: _write_if($scope0_reason, 0) && input.items,
		l,
		o
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		l: "1:6",
		o: "2:6"
	});
}, 1);
