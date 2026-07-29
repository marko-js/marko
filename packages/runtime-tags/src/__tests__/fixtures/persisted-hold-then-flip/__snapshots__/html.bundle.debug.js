// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const PanelA = { content: _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<span class=a>A</span>");
	}, $scope0_id) };
	const PanelB = { content: _content_resume("__tests__/template.marko_3_content", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("<section class=b>B</section>");
	}, $scope0_id) };
	_html("<ul>");
	_for_of($global().items, (item) => {
		const $scope2_id = _scope_id();
		_html("<em>ROW_MARKUP</em>");
		_dynamic_tag($scope2_id, "#text/0", item.view === "b" ? PanelB : PanelA, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_2/update_dynamic_#text/0");
		_persisted_reason() && writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "12:4");
	}, function(item) {
		return item.id;
	}, $scope0_id, "#ul/2", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 0, "__tests__/template.marko_2_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, {
		count: "1:6",
		PanelA: "4:9",
		PanelB: "7:9"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<em>ROW_MARKUP</em><!><!>", "b%c"],
	"__tests__/template.marko_2_content": ["<em>ROW_MARKUP</em><!><!>", "b%c"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><ul></ul>", " Db%l b"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><ul></ul>", " Db%l b"]
});
