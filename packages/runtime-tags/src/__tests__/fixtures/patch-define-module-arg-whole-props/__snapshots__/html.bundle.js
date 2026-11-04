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
_shells({ a: "a !a2;b%b ;<!><!><button class=toggle>toggle</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a0", (props) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<em>${_text_mark($scope2_id, "a", props.fmt(props.label), 1, $scope2_reason, 0)}</em>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	$fg__input_label && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, {
		e: input.label,
		f: open
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
}, 1);
