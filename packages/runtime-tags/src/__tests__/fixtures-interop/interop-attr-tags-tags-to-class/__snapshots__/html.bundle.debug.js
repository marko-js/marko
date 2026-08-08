// components/class-list.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_of_fallback = /* @__PURE__ */ __toESM(require_of_fallback());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-list.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { active: 0 };
	},
	handleClick(i) {
		this.state.active = i;
		this.emit("select");
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<ul id=list>");
	{
		let _i = 0;
		for (const item of (0, import_of_fallback.default)(input.item || [])) {
			let i = _i++;
			const _keyScope = `[${i}]`;
			out.w("<li>");
			out.w("<button>");
			out.w((0, import_escape_xml.x)(item.title));
			out.w((0, import_escape_xml.x)(i === state.active ? "*" : ""));
			out.w("</button>");
			(0, import_dynamic_tag.default)(out, item.renderBody, null, null, null, null, _componentDef, "3" + _keyScope);
			out.w("</li>");
		}
	}
	out.w("</ul>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-list.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", _marko_template, {
		onSelect: _resume(function() {
			count++;
		}, "__tests__/template.marko_0/onSelect", $scope0_id),
		item: attrTags(attrTag({
			title: "one",
			renderBody: _content_resume("__tests__/template.marko_1_content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html("<em>first</em>");
			}, $scope0_id)
		}), {
			title: "two",
			renderBody: _content_resume("__tests__/template.marko_2_content", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("<em>second</em>");
			}, $scope0_id)
		})
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
