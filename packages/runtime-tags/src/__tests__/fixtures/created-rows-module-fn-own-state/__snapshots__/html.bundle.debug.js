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
	const $scope0_reason = _scope_reason(), $wg__input_open = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let suffix = "s";
	const Panel = { content: _content("__tests__/tags/rowsx.marko_2*content", ({ isOpen, fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__fmt__OR__label = _write_guard($scope2_reason, 2), $wg__isOpen = _write_guard($scope2_reason, 4), $wi__isOpen__OR__fmt__OR__label = _write_if($scope2_reason, 3);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "#text/0", fmt(label), $wg__fmt__OR__label)}</em>`);
				$wi__isOpen__OR__fmt__OR__label && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) }, "__tests__/tags/rowsx.marko", "4:4");
				return 0;
			}
		}, $scope2_id, "#text/0", _write_guard($scope2_reason, 3), $wg__isOpen, 0, 0, 1);
		$wi__isOpen__OR__fmt__OR__label && _scope($scope2_id, {
			fmt: _write_if($scope2_reason, 1) && fmt,
			label: _write_if($scope2_reason, 0) && label
		}, "__tests__/tags/rowsx.marko", "3:2", {
			fmt: "3:25",
			label: "3:30"
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
			x,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/tags/rowsx.marko", "8:2", { x: "8:6" });
	}, 0, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0));
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/rowsx.marko_0");
	_scope($scope0_id, {
		input_open: _write_if($scope0_reason, 0) && input.open,
		suffix
	}, "__tests__/tags/rowsx.marko", 0, {
		input_open: ["input.open"],
		suffix: "2:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
				"#childScope/0": $wi__input_open__OR__input_items && _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 1), $wg__input_show);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		input_open: input.open,
		input_items: input.items
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_items: ["input.items"]
	});
}, 1);
