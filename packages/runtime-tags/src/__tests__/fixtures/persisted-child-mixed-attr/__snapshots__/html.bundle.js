// tags/price-card/index.marko
const $template = "<p><!> x<!></p>";
const $walks = "D%c%l";
_shells({ b: "b;D%c%;<p><!> x<!></p>" });
var price_card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.label, $scope0_owned, 0)}${_el_resume($scope0_id, "a")} x<!>${_patch_text($scope0_id, "b", input.qty, $scope0_owned, 1)}${_el_resume($scope0_id, "b")}</p>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)($walks), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: 1
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	price_card_default({
		label: input.label,
		qty: count
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [price_card_default]);
