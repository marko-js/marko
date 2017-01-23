var path = require('path');
var resolveFrom = require('resolve-from');
var Template = require('../html/Template');

exports.getDeps = getDeps;
exports.resolveDep = resolveDep;

function getDeps(template) {
    if (!template.meta && template.template) {
        template = template.template;
    }

    if (!(template instanceof Template)) {
        return [];
    }

    if (false && template.deps) {
        return template.deps;
    }

    if (!template.meta) {
        console.error('Metadata not set for template at ', template.path);
        return [];
    }

    var meta = template.meta;
    var root = path.dirname(template.path);
    var deps = [];

    if (meta.tags) {
        meta.tags.forEach(tagPath => {
            var tag = resolveFrom(root, tagPath);
            var tagDeps = getDeps(require(tag));
            deps.push.apply(deps, tagDeps);
        });
    }

    if (meta.deps) {
        deps.push.apply(deps, meta.deps.map(d => resolveDep(d, root)));
    }

    deps = dedupeDeps(deps);

    template.deps = deps;

    return deps;
}

function resolveDep(dep, root) {
    if (typeof dep === 'string') {
        dep = parseDependencyString(dep);
    }

    if (dep.path) {
        dep.path = resolveFrom(root, dep.path);

        if(dep.path && !dep.type) {
            dep.type = dep.path.slice(dep.path.lastIndexOf('.')+1);
        }
    }

    if (dep.virtualPath) {
        dep.virtualPath = path.resolve(root, dep.virtualPath);
    }

    return dep;
}

function parseDependencyString(string) {
    var match = /^(?:([\w-]+)(?:\:\s*|\s+))?(.*?(?:\.(\w+))?)$/.exec(string);
    return {
        type: match[1] || match[3],
        path: match[2]
    };
}

function dedupeDeps(deps) {
    return deps;
}

Template.prototype.getDependencies = function() {
    return getDeps(this);
};