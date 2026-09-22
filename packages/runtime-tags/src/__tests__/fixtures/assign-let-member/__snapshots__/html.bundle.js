// template.marko
var template_default = _template("a", (input) => {
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
	_html(`<ul><li>${_text_resume($scope0_id, "a", settings.theme)}</li><li>${_text_resume($scope0_id, "b", settings.count)}</li><li>${_text_resume($scope0_id, "c", settings.removed ?? "deleted")}</li><li>${_text_resume($scope0_id, "d", settings.kind)}</li><li>${_text_resume($scope0_id, "e", settings.first)}</li><li>${_text_resume($scope0_id, "f", settings.width)}</li><li>${_text_resume($scope0_id, "g", settings.picked)}</li><li>${_text_resume($scope0_id, "h", settings.rest)}</li><li>${_text_resume($scope0_id, "i", settings.fallback)}</li><li>${_text_resume($scope0_id, "j", settings.lastKey)}</li><li>${_text_resume($scope0_id, "k", settings.lastTag)}</li><li>${_text_resume($scope0_id, "l", settings.copy?.w)}</li></ul><button class=mutate>mutate</button>${_el_resume($scope0_id, "m")}<button class=apply>apply</button>${_el_resume($scope0_id, "n")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { o: settings });
}, 1);
