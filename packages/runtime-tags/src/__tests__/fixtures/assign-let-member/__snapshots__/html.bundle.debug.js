// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let settings = {
		theme: "dark",
		count: 1,
		step: 2,
		removed: "kept",
		tags: [
			"x",
			"y",
			"z"
		],
		size: {
			w: 3,
			h: 4
		},
		key: "h"
	};
	_html(`<ul><li>${_text_resume($scope0_id, "#text/0", settings.theme)}</li><li>${_text_resume($scope0_id, "#text/1", settings.count)}</li><li>${_text_resume($scope0_id, "#text/2", settings.removed ?? "deleted")}</li><li>${_text_resume($scope0_id, "#text/3", settings.kind)}</li><li>${_text_resume($scope0_id, "#text/4", settings.first)}</li><li>${_text_resume($scope0_id, "#text/5", settings.width)}</li><li>${_text_resume($scope0_id, "#text/6", settings.picked)}</li><li>${_text_resume($scope0_id, "#text/7", settings.rest)}</li><li>${_text_resume($scope0_id, "#text/8", settings.fallback)}</li><li>${_text_resume($scope0_id, "#text/9", settings.lastKey)}</li><li>${_text_resume($scope0_id, "#text/10", settings.lastTag)}</li><li>${_text_resume($scope0_id, "#text/11", settings.copy?.w)}</li></ul><button class=mutate>mutate</button>${_el_resume($scope0_id, "#button/12")}<button class=apply>apply</button>${_el_resume($scope0_id, "#button/13")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { settings }, "__tests__/template.marko", 0, { settings: "1:6" });
}, 1);
