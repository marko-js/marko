// server-only.js
if (typeof window !== "undefined") throw new Error("server-only module loaded in the browser");
const config = { hosts: "a,b" };

// template.marko
const $template = "<html><head><meta name=hosts></head><body><p> </p></body></html>";
const $walks = "E lE n";
_shells({ "__tests__/template.marko": "__tests__/template.marko;E lE ;<html><head><meta name=hosts></head><body><p> </p></body></html>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<html><head><meta name=hosts${_patch_attr($scope0_id, "#meta/0", "content", config.hosts)}>${_el_resume($scope0_id, "#meta/0")}${_flush_head()}</head><body><p>${_patch_text($scope0_id, "#text/1", input.msg, void 0, $scope0_owned, 0)}</p>`), _trailers("</body></html>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
