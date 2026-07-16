// tags/order-form.marko
var order_form_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const itemId = input.id;
	let qty = 1;
	_html(`<form class=order><input${_attr_input_value($scope0_id, "b", qty, _resume((_new_qty) => {
		qty = Number(_new_qty);
	}, "b0", $scope0_id))} type=number class=qty>${_el_resume($scope0_id, "b")}<input type=hidden name=itemId${_attr("value", itemId)} class=item>${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 0))}<button class=buy>buy</button></form>${_el_resume($scope0_id, "a")}<p class=mirror>adding <!>${_escape(qty)}${_el_resume($scope0_id, "d")} to cart</p><output class=last>${_escape("none")}${_el_resume($scope0_id, "e")}</output>`);
	_script($scope0_id, "b2");
	writeScope($scope0_id, {
		i: itemId,
		j: _state_reason() && qty
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_id = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<h1 class=name>${_escape(_hole_value($scope0_id, "Qa", input.name, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}</h1>`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason($sg__input_id);
	order_form_default({ id: input.id });
	_serialize_guard($scope0_reason, 0) | _persisted_reason() && writeScope($scope0_id, { b: $sg__input_id | _persisted_reason() && _existing_scope($childScope) });
}, 1);
