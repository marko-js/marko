// template.marko
function buildGraph() {
	const a = { id: 1 };
	const b = { id: 2 };
	a.next = b;
	b.prev = a;
	return {
		current: a,
		byId: /* @__PURE__ */ new Map([[1, a], [2, b]]),
		all: /* @__PURE__ */ new Set([a, b])
	};
}
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let graph = buildGraph();
	_html(`<button id=go>go</button>${_el_resume($scope0_id, "a")}<div id=out>${_text_resume($scope0_id, "b", "pending")}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: graph?.byId,
		e: graph?.current,
		f: graph?.all
	});
}, 1);
