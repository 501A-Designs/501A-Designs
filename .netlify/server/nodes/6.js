

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.a298bdca.js","_app/immutable/chunks/index.a438317f.js","_app/immutable/chunks/store.306f526b.js","_app/immutable/chunks/index.be9b8f3d.js","_app/immutable/chunks/setThisRoute.9563f7b8.js"];
export const stylesheets = [];
export const fonts = [];
