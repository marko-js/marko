// lib.ts
const lib = {
	sep: "!",
	format(value, sep) {
		return value.toUpperCase() + sep;
	}
};

// template.marko
const $template = "<!><!><button class=toggle>toggle</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button class=toggle>toggle</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/template.marko_2*content", ({ fmt, sep, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $ui__fmt__OR__sep = _unfilled_if($scope2_reason, 0), $fg__fmt = _filled_guard($scope2_reason, 4), $fg__sep = _filled_guard($scope2_reason, 5), $fg__label = _filled_guard($scope2_reason, 6);
		_html(`<em>${_text_mark($scope2_id, "#text/0", fmt(label, sep), 1, $scope2_reason, 3)}</em>`);
		_patch_render($scope2_id, "__tests__/template.marko_2_fmt#3_sep#4_label#5/setup", [
			$fg__fmt && "fmt",
			$fg__sep && "sep",
			$fg__label && "label"
		], $scope2_reason, 3);
		_scope($scope2_id, {
			fmt: (_unfilled_if($scope2_reason, 2, 4) || _unfilled_if($scope2_reason, 3, 4)) && fmt,
			sep: (_unfilled_if($scope2_reason, 1, 5) || _unfilled_if($scope2_reason, 3, 5)) && sep,
			label: ($ui__fmt__OR__sep || _unfilled_if($scope2_reason, 3)) && label
		}, "__tests__/template.marko", "3:2", {
			fmt: "3:17",
			sep: "3:22",
			label: "3:27"
		}) || ($fg__fmt && _unfilled_if($scope2_reason, 2) && _patch_write($scope2_id, "PatchMarkedWrite:fmt", fmt, !_server_guard($scope2_reason, 4)), $fg__sep && _unfilled_if($scope2_reason, 1) && _patch_write($scope2_id, "PatchMarkedWrite:sep", sep, !_server_guard($scope2_reason, 5)), $fg__label && $ui__fmt__OR__sep && _patch_write($scope2_id, "PatchMarkedWrite:label", label, !_server_guard($scope2_reason, 6)));
	}, $scope0_id) };
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_label << 3 | $uf__input_label << 5 | $uf__input_label << 7 | $uf__input_label << 13);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				fmt: lib.format,
				sep: lib.sep,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		open
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "2:6"
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);
