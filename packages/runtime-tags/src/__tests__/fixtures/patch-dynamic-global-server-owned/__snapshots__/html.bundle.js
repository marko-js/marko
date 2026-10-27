// card.marko
_shells({ a: "a;D ;<em> </em>" });
var card_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_patch_text($scope0_id, "a", $global$1.brand)}</em>`);
	_fill_global_subscribe("a0", $scope0_id);
	_scope($scope0_id, {});
});

// template.marko
_shells({ b: "b;D%;<main><!></main>" });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : null, {}, 2, 0, 0, $wg__input_on, $scope0_reason, 0);
	_html("</main>");
	_scope($scope0_id, {});
}, 1);
