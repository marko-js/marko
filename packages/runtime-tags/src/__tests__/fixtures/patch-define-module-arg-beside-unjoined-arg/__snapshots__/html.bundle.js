// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// template.marko
_shells({ a: "a !a1;b%b ;<!><!><button class=toggle>toggle</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a0", ({ fmt, label, title }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<em>${_patch_text($scope2_id, "a", fmt(label), void 0, $scope2_reason, 0)}</em><b>${_patch_text($scope2_id, "b", title, void 0, $scope2_reason, 3)}</b>`);
		_patch_write($scope2_id, "wf", label, 1);
		_scope($scope2_id, {
			e: (_unfilled_if($scope2_reason, 2, 1) || _unfilled_if($scope2_reason, 0, 1)) && fmt,
			f: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0)) && label
		});
	}, $scope0_id) };
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7);
			const $childScope = _peek_scope_id();
			Panel.content({
				fmt: lib.format,
				label: input.label,
				title: input.title
			});
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "va4", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.label,
		f: input.title,
		g: open
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va3", input.title, !_server_guard($scope0_reason, 2)));
}, 1);
