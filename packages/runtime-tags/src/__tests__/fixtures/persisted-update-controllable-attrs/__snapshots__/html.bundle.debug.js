// data.js
function getItem(id) {
	if (typeof window !== "undefined") {
		throw new Error("getItem is server-only");
	}
	return {
		id,
		title: `Item ${id}`,
		category: id % 2 ? "odd" : "even"
	};
}

// tags/item-form.marko
var item_form_default = _template("__tests__/tags/item-form.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const itemId = input.id;
	let qty = 1;
	_html(`<form><input${_attr_input_value($scope0_id, "#input/0", qty, _resume((_new_qty) => {
		qty = Number(_new_qty);
	}, "__tests__/tags/item-form.marko_0/valueChange", $scope0_id))} type=number class=qty>${_el_resume($scope0_id, "#input/0")}<input type=hidden name=itemId${_attr("value", _hole_value($scope0_id, "PatchAttr:value:#input/1", itemId, _persisted_reason()))}>${_el_resume($scope0_id, "#input/1", _serialize_guard($scope0_reason, 0))}<button class=add>add</button>${_el_resume($scope0_id, "#button/2")}</form>`);
	_script($scope0_id, "__tests__/tags/item-form.marko_0");
	writeScope($scope0_id, { qty: _state_reason() && qty }, "__tests__/tags/item-form.marko", 0, { qty: "2:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/item-form.marko_0_update": ["<form><input type=number class=qty><input type=hidden name=itemId><button class=add>add</button></form>", "D b b l"],
	"__tests__/tags/item-form.marko": ["<form><input type=number class=qty><input type=hidden name=itemId><button class=add>add</button></form>", "D b b l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const [id] = $global().item;
	const item = getItem(id);
	_attr_select_value($scope0_id, "#select/1", _hole_value($scope0_id, "PatchAttr:value:#select/1", item.category, _persisted_reason()), void 0, () => {
		_html(`<input${_attr_input_value($scope0_id, "#input/0", _hole_value($scope0_id, "PatchAttr:value:#input/0", item.title, _persisted_reason()))} class=title>${_el_resume($scope0_id, "#input/0", _persisted_reason())}<select class=category><option${_attr_option_value("odd")}>odd</option><option${_attr_option_value("even")}>even</option></select>`);
	});
	_html(_el_resume($scope0_id, "#select/1", _persisted_reason()));
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	item_form_default({ id: item.id });
	_persisted_reason() && writeScope($scope0_id, { "#childScope/2": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": [["<input class=title><select class=category><option value=odd>odd</option><option value=even>even</option></select>", ["__tests__/tags/item-form.marko"]], [
		" b b/",
		["__tests__/tags/item-form.marko"],
		"&"
	]],
	"__tests__/template.marko": [["<input class=title><select class=category><option value=odd>odd</option><option value=even>even</option></select>", ["__tests__/tags/item-form.marko"]], [
		" b b/",
		["__tests__/tags/item-form.marko"],
		"&"
	]]
});
