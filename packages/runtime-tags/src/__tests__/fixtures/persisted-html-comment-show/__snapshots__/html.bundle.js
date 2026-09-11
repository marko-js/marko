// template.marko
_shells({ a: "a !a0; b%bD l%b ;<!----><!><p> </p><!><button>+</button>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_on = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<!--${_escape_comment(input.label)} ${_escape_comment(count)}-->${_el_resume($scope0_id, "a")}`);
	const $show = input.on;
	_show_start($show);
	_html(`<p>${_patch_text($scope0_id, "c", input.label, void 0, $scope0_owned, 0)}</p>`);
	_show_end($scope0_id, "d", $show, $sg__input_on, $sg__input_on, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		h: input.label,
		j: count
	}) : _filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.label);
}, 1, 0);
