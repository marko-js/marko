// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({ "__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<main>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.mode === "a" ? card_a_default : card_b_default, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.mode === "a" ? card_a_default : card_b_default, { label: input.label }, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html$1("</main>");
	$scope0_reason && writeScope($scope0_id, {
		input_mode: input.mode,
		input_label: input.label
	}, "__tests__/template.marko", 0, {
		input_mode: ["input.mode"],
		input_label: ["input.label"]
	});
}, 1, 1);
