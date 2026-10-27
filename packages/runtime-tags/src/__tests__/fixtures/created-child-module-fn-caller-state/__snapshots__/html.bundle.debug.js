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
	const $scope0_reason = _scope_reason(), $wg__input_open__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_open = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Panel = { content: _content("__tests__/tags/rowsx.marko_1*content", ({ isOpen, fmt, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__fmt__OR__label = _write_guard($scope1_reason, 2), $wg__isOpen = _write_guard($scope1_reason, 4), $wi__isOpen__OR__fmt__OR__label = _write_if($scope1_reason, 3);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", fmt(label), $wg__fmt__OR__label)}</em>`);
				$wi__isOpen__OR__fmt__OR__label && _scope($scope2_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/tags/rowsx.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", _write_guard($scope1_reason, 3), $wg__isOpen, 0, 0, 1);
		$wi__isOpen__OR__fmt__OR__label && _scope($scope1_id, {
			fmt: _write_if($scope1_reason, 1) && fmt,
			label: _write_if($scope1_reason, 0) && label
		}, "__tests__/tags/rowsx.marko", "2:2", {
			fmt: "2:25",
			label: "2:30"
		});
	}, $scope0_id) };
	_set_scope_reason($wg__input_open << 1 | $wg__input_open__OR__input_label << 3 | _write_guard($scope0_reason, 2) << 5 | $wg__input_open__OR__input_label << 7 | $wg__input_open << 9);
	const $childScope = _peek_scope_id();
	Panel.content({
		isOpen: input.open,
		fmt: lib.format,
		label: input.label + "1"
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/rowsx.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0));
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_open: _write_if($scope0_reason, 0) && input.open,
		l
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		l: "1:6"
	});
}, 1);
