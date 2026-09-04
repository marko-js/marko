// card-a.marko
const $template$2 = "<section class=a> </section>";
const $walks$2 = "D l";
_shells({ "__tests__/card-a.marko": "__tests__/card-a.marko;D ;<section class=a> </section>" });
var card_a_default = _template_persisted("__tests__/card-a.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section class=a>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_owned, 0)}</section>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/card-a.marko", 0);
}, 0, 0);

// card-b.marko
const $template$1 = "<article class=b><!>!</article>";
const $walks$1 = "D%l";
_shells({ "__tests__/card-b.marko": "__tests__/card-b.marko;D%;<article class=b><!>!</article>" });
var card_b_default = _template_persisted("__tests__/card-b.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<article class=b>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_owned, 0)}!</article>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/card-b.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<main>");
	const $tag = input.mode === "a" ? card_a_default : card_b_default;
	const $input2 = { label: input.label };
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		input_mode: input.mode,
		input_label: input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_mode: ["input.mode"],
		input_label: ["input.label"],
		n: "3:6"
	});
}, 1, 1);
