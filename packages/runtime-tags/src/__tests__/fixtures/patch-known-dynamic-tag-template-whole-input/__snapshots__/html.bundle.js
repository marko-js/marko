// tags/item.marko
_shells({ d: "d;D ;<em> </em>" });
var item_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/frame-label.marko
const $template = "<pre> </pre>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<pre> </pre>" });
var frame_label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<pre>${_text_mark($scope0_id, "a", input.data.label, 1, $scope0_reason, 0)}</pre>`);
	_scope($scope0_id, {});
});

// tags/frame.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ c: `c${_shell_marker($setup)};${((_w0) => `D%l/${_w0}&`)("D l")};${((_w0) => `<section><!></section>${_w0}`)($template)}` });
var frame_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.item, { label: "item" }, 1, 0, 0, $wg__input_item, $scope0_reason, 1);
	_html("</section>");
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 1);
	frame_label_default({ data: input });
	_patch_child_end();
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_framed__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_framed__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_framed = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.framed ? frame_default : null, {
		item: item_default,
		label: input.label
	}, 1, 0, 0, $wg__input_framed__OR__input_label, $scope0_reason, 0);
	_patch_render($scope0_id, "a0", (($fg__input_framed ? " d" : "") + ($fg__input_label ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_framed__OR__input_label && input.framed,
		e: _write_if($scope0_reason, 1) && $ui__input_framed__OR__input_label && input.label
	}) || ($fg__input_framed && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.framed, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
