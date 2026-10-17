// components/class-list.marko
var import_html = require_html();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_of_fallback = /* @__PURE__ */ __toESM(require_of_fallback());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-list.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<ul id=list>");
	{
		let _keyValue = 0;
		for (const item of (0, import_of_fallback.default)(input.item || [])) {
			const _keyScope = `[${_keyValue++}]`;
			out.w("<li>");
			(0, import_dynamic_tag.default)(out, item.renderBody, null, null, null, null, _componentDef, "2" + _keyScope);
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
	let labels = ["one", "two"];
	_html(`<button>translate</button>${_el_resume($scope0_id, "#button/0")}`);
	let $item;
	forOf(labels, (label) => {
		$item = attrTags($item, { renderBody: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "#text/0", label, $wg__label)}</em>`);
			_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "5:6");
		}, $scope0_id, () => [{ label }]) });
	});
	_dynamic_tag($scope0_id, "#text/1", _marko_template, { item: $item });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
