// template.marko
function buildGraph() {
	const a = { id: 1 };
	const b = { id: 2 };
	a.next = b;
	b.prev = a;
	return {
		current: a,
		byId: new Map([[1, a], [2, b]]),
		all: new Set([a, b])
	};
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let graph = buildGraph();
	let result = "pending";
	_html(`<button id=go>go</button>${_el_resume($scope0_id, "#button/0")}<div id=out>${_text_resume($scope0_id, "#text/1", result)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_graph_byId#3_graph_current#4_graph_all#5");
	writeScope($scope0_id, {
		graph_byId: graph?.byId,
		graph_current: graph?.current,
		graph_all: graph?.all
	}, "__tests__/template.marko", 0, {
		graph_byId: ["graph.byId", "9:6"],
		graph_current: ["graph.current", "9:6"],
		graph_all: ["graph.all", "9:6"]
	});
	_resume_branch($scope0_id);
}, 1);
