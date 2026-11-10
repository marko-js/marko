// tags/item.marko
const $template$3 = "<em> </em>";
const $walks$3 = "D l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/item.marko": "__tests__/tags/item.marko;D ;<em> </em>" });
var item_default = _template("__tests__/tags/item.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/item.marko", 0);
});

// tags/frame-label.marko
const $template$2 = "<pre> </pre>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/frame-label.marko": "__tests__/tags/frame-label.marko;D ;<pre> </pre>" });
var frame_label_default = _template("__tests__/tags/frame-label.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<pre>${_text_mark($scope0_id, "#text/0", input.data.label, 1, $scope0_reason, 0)}</pre>`);
	_scope($scope0_id, {}, "__tests__/tags/frame-label.marko", 0);
});

// tags/frame.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section><!></section>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D%l/${_w0}&`)("D l");
const $setup$1 = _shell_setup([[], []], ["#childScope/1>", $setup$2]);
_shells({ "__tests__/tags/frame.marko": `__tests__/tags/frame.marko${_shell_marker($setup$1)};${((_w0) => `D%l/${_w0}&`)("D l")};${((_w0) => `<section><!></section>${_w0}`)($template$2)}` });
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.item, { label: "item" }, 1, 0, 0, $wg__input_item, $scope0_reason, 1);
	_html("</section>");
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 1);
	frame_label_default({ data: input });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/frame.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_framed__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_framed__OR__input_label = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 2), $ui__input_framed = _unfilled_if($scope0_reason, 1), $fg__input_framed = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.framed ? frame_default : null, {
		item: item_default,
		label: input.label
	}, 1, 0, 0, $wg__input_framed__OR__input_label, $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_framed#3_input_label#4/setup", (($fg__input_framed ? " input_framed" : "") + ($fg__input_label ? " input_label" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_framed: ($ui__input_label || $ui__input_framed__OR__input_label) && input.framed,
		input_label: ($ui__input_framed || $ui__input_framed__OR__input_label) && input.label
	}, "__tests__/template.marko", 0, {
		input_framed: ["input.framed"],
		input_label: ["input.label"]
	}) || ($fg__input_framed && $ui__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_framed", input.framed, !_server_guard($scope0_reason, 1)), $fg__input_label && $ui__input_framed && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
