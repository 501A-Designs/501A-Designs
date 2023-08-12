

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.a4ec3f32.js","_app/immutable/chunks/index.a438317f.js","_app/immutable/chunks/store.306f526b.js","_app/immutable/chunks/index.be9b8f3d.js","_app/immutable/chunks/setThisRoute.9563f7b8.js"];
export const stylesheets = ["_app/immutable/assets/2.585c193a.css"];
export const fonts = [];
