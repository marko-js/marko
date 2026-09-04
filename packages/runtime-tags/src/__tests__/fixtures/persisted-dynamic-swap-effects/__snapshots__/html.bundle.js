// card-plain.marko
_shells({ b: "b;D ;<span> </span>" });
var card_plain_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_owned, 0)}</span>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// card-live.marko
_shells({ a: "a !a0; D%c%;<button><!> <!></button>" });
var card_live_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_owned, 0)} ${_text_resume($scope0_id, "c", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a0", n, 1);
	$scope0_reason && _scope($scope0_id, { g: n });
}, 0, 0);

// template.marko
_shells({ c: "c;D%;<main><!></main>" });
var template_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_mode__OR__input_label = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.mode === "plain" ? card_plain_default : card_live_default;
	const $input2 = { label: input.label };
	_patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $sg__input_mode__OR__input_label, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		d: input.mode,
		e: input.label
	});
}, 1, 1);
