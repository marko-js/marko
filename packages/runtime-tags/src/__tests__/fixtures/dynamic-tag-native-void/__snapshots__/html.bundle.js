// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<br><p>${_text_resume($scope0_id, "a", count)}</p><img src=x.png><input name=a><meta content=description><textarea>${_textarea_value(`count & ${count}`)}</textarea>${_el_resume($scope0_id, "b")}<title>count ${_escape(count)}</title>${_el_resume($scope0_id, "c")}<if>core tag name</if><custom>custom tag name</custom><div>before`);
	_dynamic_tag($scope0_id, "d", input.show && "span", {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`${_text_resume($scope0_id, "e", count, 2)}<button>inc</button>${_el_resume($scope0_id, "f")}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { j: count });
}, 1);
