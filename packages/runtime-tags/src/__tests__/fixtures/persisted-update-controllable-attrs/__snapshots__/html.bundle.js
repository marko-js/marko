// data.js
function getItem(id) {
	if (typeof window !== "undefined") throw new Error("getItem is server-only");
	return {
		id,
		title: `Item ${id}`,
		category: id % 2 ? "odd" : "even"
	};
}

// tags/item-form.marko
var item_form_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const itemId = input.id;
	let qty = 1;
	_html(`<form><input${_attr_input_value($scope0_id, "a", qty, _resume((_new_qty) => {
		qty = Number(_new_qty);
	}, "b0", $scope0_id))} type=number class=qty>${_el_resume($scope0_id, "a")}<input type=hidden name=itemId${_attr("value", _hole_value($scope0_id, "Nvalue:b", itemId, _persisted_reason()))}>${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))}<button class=add>add</button>${_el_resume($scope0_id, "c")}</form>`);
	_script($scope0_id, "b2");
	writeScope($scope0_id, { h: _state_reason() && qty });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"b1": ["<form><input type=number class=qty><input type=hidden name=itemId><button class=add>add</button></form>", "D b b l"],
	"b": ["<form><input type=number class=qty><input type=hidden name=itemId><button class=add>add</button></form>", "D b b l"]
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const [id] = $global().item;
	const item = getItem(id);
	_attr_select_value($scope0_id, "b", _hole_value($scope0_id, "Nvalue:b", item.category, _persisted_reason()), void 0, () => {
		_html(`<input${_attr_input_value($scope0_id, "a", _hole_value($scope0_id, "Nvalue:a", item.title, _persisted_reason()))} class=title>${_el_resume($scope0_id, "a", _persisted_reason())}<select class=category><option${_attr_option_value("odd")}>odd</option><option${_attr_option_value("even")}>even</option></select>`);
	});
	_html(_el_resume($scope0_id, "b", _persisted_reason()));
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	item_form_default({ id: item.id });
	_persisted_reason() && writeScope($scope0_id, { c: _existing_scope($childScope) });
}, 1);
_renderer_shells({
	"a0": [[
		"<input class=title><select class=category><option value=odd>odd</option><option value=even>even</option></select>",
		["b"],
		"<!>"
	], [
		" b b/",
		["b"],
		"&%b"
	]],
	"a": [[
		"<input class=title><select class=category><option value=odd>odd</option><option value=even>even</option></select>",
		["b"],
		"<!>"
	], [
		" b b/",
		["b"],
		"&%b"
	]]
});
