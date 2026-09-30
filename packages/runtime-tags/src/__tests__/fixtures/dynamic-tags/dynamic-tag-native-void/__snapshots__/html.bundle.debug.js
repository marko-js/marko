// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<br><p>${_text_resume($scope0_id, "#text/0", count)}</p><img src=x.png><input name=a><meta content=description><textarea>${_textarea_value(`count & ${count}`)}</textarea>${_el_resume($scope0_id, "#textarea/1")}<title>count ${_escape(count)}</title>${_el_resume($scope0_id, "#title/2")}<if>core tag name</if><custom>custom tag name</custom><div>before`);
	_dynamic_tag($scope0_id, "#text/3", input.show && "span", {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`${_text_resume($scope0_id, "#text/4", count, 2)}<button>inc</button>${_el_resume($scope0_id, "#button/5")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
