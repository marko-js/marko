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
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("__tests__/template.marko_2*content", ({ fmt, sep, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $cg__fmt__OR__sep = _client_guard($scope2_reason, 0);
		_html(`<em>${_text_resume($scope2_id, "#text/0", fmt(label, sep), 1, $scope2_reason, 3)}</em>`);
		_filled_guard($scope2_reason, 4) && _client_guard($scope2_reason, 2) && _patch_write($scope2_id, "PatchMarkedWrite:fmt", fmt);
		_filled_guard($scope2_reason, 5) && _client_guard($scope2_reason, 1) && _patch_write($scope2_id, "PatchMarkedWrite:sep", sep);
		$cg__fmt__OR__sep && _patch_write($scope2_id, "PatchMarkedWrite:label", label, !(_filled_guard($scope2_reason, 6) && $cg__fmt__OR__sep));
		_patch_init_entry($scope2_id, "__tests__/template.marko_2_fmt#3_sep#4_label#5/init", [
			_filled_guard($scope2_reason, 4) && "fmt",
			_filled_guard($scope2_reason, 5) && "sep",
			_filled_guard($scope2_reason, 6) && "label"
		], $scope2_reason, 3);
		_scope($scope2_id, {
			fmt: (_unfilled_if($scope2_reason, 2, 4) || _unfilled_if($scope2_reason, 3, 4)) && fmt,
			sep: (_unfilled_if($scope2_reason, 1, 5) || _unfilled_if($scope2_reason, 3, 5)) && sep,
			label: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 3)) && label
		}, "__tests__/template.marko", "3:2", {
			fmt: "3:17",
			sep: "3:22",
			label: "3:27"
		});
	}, $scope0_id) };
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 0) << 13);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				fmt: lib.format,
				sep: lib.sep,
				label: input.label
			});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		open
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "2:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
