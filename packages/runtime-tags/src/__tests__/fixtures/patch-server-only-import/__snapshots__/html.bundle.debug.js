// server-only.js
if (typeof window !== "undefined") throw new Error("server-only module loaded in the browser");
const config = { hosts: "a,b" };

// template.marko
const $template = "<html><head><meta name=hosts></head><body><p> </p></body></html>";
const $walks = "E lE n";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;E lE ;<html><head><meta name=hosts></head><body><p> </p></body></html>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<html><head><meta name=hosts${_attr("content", `${config.hosts};${input.msg}`, $scope0_id, "PatchAttr:#meta/0 content", $scope0_reason, 0)}>${_el_resume($scope0_id, "#meta/0", _mask_group($scope0_reason, 0))}${_flush_head()}</head><body><p>${_text_resume($scope0_id, "#text/1", input.msg, void 0, $scope0_reason, 0)}</p>`), _trailers("</body></html>");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
