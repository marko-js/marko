// card-a.marko
_shells({ a: "a;D ;<section class=a> </section>" });
var card_a_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section class=a>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_owned, 0)}</section>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// card-b.marko
_shells({ b: "b;D%;<article class=b><!>!</article>" });
var card_b_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<article class=b>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_owned, 0)}!</article>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ c: "c !c0;D%b D ;<main><!><button> </button></main>" });
var template_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<main>");
	_patch_dynamic_tag($scope0_id, "a", input.mode === "a" ? card_a_default : card_b_default, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", input.mode === "a" ? card_a_default : card_b_default, { label: input.label }, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "c0");
	$scope0_reason && _scope($scope0_id, {
		f: input.mode,
		g: input.label,
		i: n
	});
	_resume_branch($scope0_id);
}, 1, 1);
