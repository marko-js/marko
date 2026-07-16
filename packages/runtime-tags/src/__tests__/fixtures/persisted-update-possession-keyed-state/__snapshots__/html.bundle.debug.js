// data.js
const getItems = typeof window === "undefined" ? (filter) => Array.from({ length: filter === "Toys & Games" ? 10 : 50 }, (_, i) => ({
	id: i + 1,
	name: i ? `item ${i + 1}` : "Elite Tool 1"
})) : undefined;

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(getItems?.($global().filter), (item) => {
		const $scope1_id = _scope_id();
		let watched = false;
		_html(`<li><span>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", item.name, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</span><button${_attr("data-id", _hole_value($scope1_id, "PatchAttr:data-id:#button/1", item.id, _persisted_reason()))}>${watched ? "watching" : "watch"}${_el_resume($scope1_id, "#text/2")}</button>${_el_resume($scope1_id, "#button/1")}</li>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { watched: _state_reason() && watched }, "__tests__/template.marko", "4:4", { watched: "5:10" });
	}, function(item) {
		return item.id;
	}, $scope0_id, "#ul/0", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 1, "__tests__/template.marko_0/update_for_#ul/0");
	_persisted_reason() && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
