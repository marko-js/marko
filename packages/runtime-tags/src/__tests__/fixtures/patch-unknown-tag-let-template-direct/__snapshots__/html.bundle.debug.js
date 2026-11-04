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
const $template$1 = "<button>clear</button><section><!></section>";
const $walks$1 = " bD%l";
const $setup$1 = [[], ["__tests__/tags/frame.marko_0"]];
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko !__tests__/tags/frame.marko_0; bD%;<button>clear</button><section><!></section>" });
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let T = input.item;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}<section>`);
	_dynamic_tag($scope0_id, "#text/1", T, { label: input.label });
	_html("</section>");
	_script($scope0_id, "__tests__/tags/frame.marko_0");
	_patch_render($scope0_id, "__tests__/tags/frame.marko_0_input_label#5_T#6/setup", $fg__input_label && "input_label");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/frame.marko_0_T#6/fill", T, 1);
	_scope($scope0_id, {
		input_label: input.label,
		T: _write_if($scope0_reason, 1) && T
	}, "__tests__/tags/frame.marko", 0, {
		input_label: ["input.label"],
		T: "1:6"
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function pick(framed) {
	return framed ? frame_default : null;
}
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_framed__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_framed__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_framed = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", pick(input.framed), {
		item: item_default,
		label: input.label
	}, 1, 0, 0, $wg__input_framed__OR__input_label, $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_framed#3_input_label#4/setup", (($fg__input_framed ? " input_framed" : "") + ($fg__input_label ? " input_label" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_framed: _write_if($scope0_reason, 2) && $ui__input_framed__OR__input_label && input.framed,
		input_label: _write_if($scope0_reason, 1) && $ui__input_framed__OR__input_label && input.label
	}, "__tests__/template.marko", 0, {
		input_framed: ["input.framed"],
		input_label: ["input.label"]
	}) || ($fg__input_framed && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_framed", input.framed, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
