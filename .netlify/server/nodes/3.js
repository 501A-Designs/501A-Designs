

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.0e09f556.js","_app/immutable/chunks/index.a438317f.js","_app/immutable/chunks/store.306f526b.js","_app/immutable/chunks/index.be9b8f3d.js","_app/immutable/chunks/setThisRoute.9563f7b8.js"];
export const stylesheets = [];
export const fonts = [];
