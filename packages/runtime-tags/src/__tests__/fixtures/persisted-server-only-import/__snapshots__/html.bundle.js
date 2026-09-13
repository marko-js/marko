// server-only.js
if (typeof window !== "undefined") throw new Error("server-only module loaded in the browser");
const config = { hosts: "a,b" };

// template.marko
_shells({ a: "a;E lE ;<html><head><meta name=hosts></head><body><p> </p></body></html>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<html><head><meta name=hosts${_patch_attr($scope0_id, "a", "content", config.hosts)}>${_el_resume($scope0_id, "a")}${_flush_head()}</head><body><p>${_patch_text($scope0_id, "b", input.msg, void 0, $scope0_owned, 0)}</p>`), _trailers("</body></html>");
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
