// card-plain.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/card-plain.marko": "__tests__/card-plain.marko;D ;<span> </span>" });
var card_plain_default = _template("__tests__/card-plain.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {}, "__tests__/card-plain.marko", 0);
});

// card-live.marko
const $template$1 = "<button><!> <!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["__tests__/card-live.marko_0"]];
_shells({ "__tests__/card-live.marko": "__tests__/card-live.marko !__tests__/card-live.marko_0; D%c%;<button><!> <!></button>" });
var card_live_default = _template("__tests__/card-live.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", input.label, 1, $scope0_reason, 0)} ${_text_mark($scope0_id, "#text/2", n, 2)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/card-live.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/card-live.marko_0_n#6/fill", n, 1);
	_scope($scope0_id, { n }, "__tests__/card-live.marko", 0, { n: "1:6" });
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_mode__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_mode = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.mode === "plain" ? card_plain_default : card_live_default, { label: input.label }, 1, 0, 0, $wg__input_mode__OR__input_label, $scope0_reason, 0);
	_html("</main>");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_mode#3_input_label#4/setup", (($fg__input_mode ? " input_mode" : "") + ($fg__input_label ? " input_label" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_mode: $ui__input_mode__OR__input_label && input.mode,
		input_label: $ui__input_mode__OR__input_label && input.label
	}, "__tests__/template.marko", 0, {
		input_mode: ["input.mode"],
		input_label: ["input.label"]
	}) || ($fg__input_mode && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_mode", input.mode, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
