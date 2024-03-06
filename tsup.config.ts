import { defineConfig } from 'tsup';
// import { esbuildPluginVersionInjector } from 'esbuild-plugin-version-injector';

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.ts'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    // esbuildPlugins: [esbuildPluginVersionInjector()],
});
