// tags/order-form.marko
var order_form_default = _template("__tests__/tags/order-form.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const itemId = input.id;
	let qty = 1;
	let lastSubmit = "none";
	_html(`<form class=order><input${_attr_input_value($scope0_id, "#input/1", qty, _resume((_new_qty) => {
		qty = Number(_new_qty);
	}, "__tests__/tags/order-form.marko_0/valueChange", $scope0_id))} type=number class=qty>${_el_resume($scope0_id, "#input/1")}<input type=hidden name=itemId${_attr("value", itemId)} class=item>${_el_resume($scope0_id, "#input/2", _serialize_guard($scope0_reason, 0))}<button class=buy>buy</button></form>${_el_resume($scope0_id, "#form/0")}<p class=mirror>adding <!>${_escape(qty)}${_el_resume($scope0_id, "#text/3")} to cart</p><output class=last>${_escape(lastSubmit)}${_el_resume($scope0_id, "#text/4")}</output>`);
	_script($scope0_id, "__tests__/tags/order-form.marko_0");
	writeScope($scope0_id, {
		itemId,
		qty: _seed_fill(_state_reason() && qty),
		lastSubmit: _seed_fill(_state_reason() && lastSubmit)
	}, "__tests__/tags/order-form.marko", 0, {
		itemId: "1:8",
		qty: "2:6",
		lastSubmit: "3:6"
	});
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/order-form.marko_0_update": ["<form class=order><input type=number class=qty><input type=hidden name=itemId class=item><button class=buy>buy</button></form><p class=mirror>adding <!> to cart</p><output class=last> </output>", " D b lDb%lD l"],
	"__tests__/tags/order-form.marko": ["<form class=order><input type=number class=qty><input type=hidden name=itemId class=item><button class=buy>buy</button></form><p class=mirror>adding <!> to cart</p><output class=last> </output>", " D b lDb%lD l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_id = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<h1 class=name>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.name, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 1))}</h1>`);
	_set_serialize_reason($sg__input_id);
	const $childScope = _peek_scope_id();
	order_form_default({ id: input.id });
	_serialize_guard($scope0_reason, 0) | _persisted_reason() && writeScope($scope0_id, { "#childScope/1": $sg__input_id | _persisted_reason() && _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": [[
		"<h1 class=name> </h1>",
		["__tests__/tags/order-form.marko"],
		"<!>"
	], [
		"D l/",
		["__tests__/tags/order-form.marko"],
		"&%b"
	]],
	"__tests__/template.marko": [[
		"<h1 class=name> </h1>",
		["__tests__/tags/order-form.marko"],
		"<!>"
	], [
		"D l/",
		["__tests__/tags/order-form.marko"],
		"&%b"
	]]
});
