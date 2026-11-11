// tags/item.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/item.marko": "__tests__/tags/item.marko;D ;<em> </em>" });
var item_default = _template("__tests__/tags/item.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/item.marko", 0);
});

// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko;D%;<section><!></section>" });
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_item__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_item = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.item, { label: input.label }, 1, 0, 0, $wg__input_item__OR__input_label, $scope0_reason, 0, 0, 1);
	_html("</section>");
	_patch_render($scope0_id, "__tests__/tags/frame.marko_0_input_item#3_input_label#4/setup", (($fg__input_item ? " input_item" : "") + ($fg__input_label ? " input_label" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_item: $ui__input_item__OR__input_label && input.item,
		input_label: $ui__input_item__OR__input_label && input.label
	}, "__tests__/tags/frame.marko", 0, {
		input_item: ["input.item"],
		input_label: ["input.label"]
	}) || ($fg__input_item && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_item", input.item, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_framed__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_framed = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", input.framed ? frame_default : null, {
		item: item_default,
		label: input.label
	}, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_framed#5_input_label#6/setup", (($fg__input_framed ? " input_framed" : "") + ($fg__input_label ? " input_label" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_framed: $ui__input_framed__OR__input_label && input.framed,
		input_label: $ui__input_framed__OR__input_label && input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_framed: ["input.framed"],
		input_label: ["input.label"],
		n: "3:6"
	}) || ($fg__input_framed && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_framed", input.framed, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
