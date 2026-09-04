// card-plain.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
_shells({ "__tests__/card-plain.marko": "__tests__/card-plain.marko;D ;<span> </span>" });
var card_plain_default = _template_persisted("__tests__/card-plain.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_owned, 0)}</span>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/card-plain.marko", 0);
}, 0, 0);

// card-live.marko
const $template$1 = "<button><!> <!></button>";
const $walks$1 = " D%c%l";
_shells({ "__tests__/card-live.marko": "__tests__/card-live.marko !__tests__/card-live.marko_0; D%c%;<button><!> <!></button>" });
var card_live_default = _template_persisted("__tests__/card-live.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_owned, 0)} ${_text_resume($scope0_id, "#text/2", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/card-live.marko_0");
	_patch_value($scope0_id, "__tests__/card-live.marko0", n, 1);
	$scope0_reason && _scope($scope0_id, { n }, "__tests__/card-live.marko", 0, { n: "1:6" });
}, 0, 0);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({ "__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_mode__OR__input_label = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.mode === "plain" ? card_plain_default : card_live_default;
	const $input2 = { label: input.label };
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $sg__input_mode__OR__input_label, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		input_mode: input.mode,
		input_label: input.label
	}, "__tests__/template.marko", 0, {
		input_mode: ["input.mode"],
		input_label: ["input.label"]
	});
}, 1, 1);
