// card-a.marko
const $template$2 = "<section class=a> </section>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/card-a.marko": "__tests__/card-a.marko;D ;<section class=a> </section>" });
var card_a_default = _template("__tests__/card-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section class=a>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</section>`);
	_scope($scope0_id, {}, "__tests__/card-a.marko", 0);
});

// card-b.marko
const $template$1 = "<article class=b><!>!</article>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/card-b.marko": "__tests__/card-b.marko;D%;<article class=b><!>!</article>" });
var card_b_default = _template("__tests__/card-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<article class=b>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}!</article>`);
	_scope($scope0_id, {}, "__tests__/card-b.marko", 0);
});

// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_mode = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.mode === "a" ? card_a_default : card_b_default, { label: input.label }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<button>${_text_mark($scope0_id, "#text/2", n)}</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_mode#5_input_label#6/setup", [$fg__input_mode && "input_mode", $fg__input_label && "input_label"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_mode: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.mode,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_mode: ["input.mode"],
		input_label: ["input.label"],
		n: "3:6"
	}) || ($fg__input_mode && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_mode", input.mode, !_server_guard($scope0_reason, 1)), $fg__input_label && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
