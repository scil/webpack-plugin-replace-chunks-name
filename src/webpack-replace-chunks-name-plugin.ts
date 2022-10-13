import { OptionsProps, replaceProps, enableProps } from '../types';
class WebpackReplaceChunksNamePlugin {
    private replaceChunks: replaceProps[] = [];
    private enable: enableProps = true;
    constructor(options: OptionsProps) {
        if (options.replaces && !Array.isArray(options.replaces)) {
            throw new Error('options.replaces must be an array');
        }
        if (
            options.replaces &&
            !options.replaces.every((item) => item.origin && item.replace)
        ) {
            throw new Error('members must contain {orgin: string, replace: string}');
        }
        this.replaceChunks = options.replaces;
        this.enable = options.enable;
    }


    apply(compiler) {
        compiler.hooks.compilation.tap('replaceChunksName', (compilation) => {
            compilation.hooks.shouldGenerateChunkAssets.tap(
                'replaceChunksName',
                () => {
                    if (this.enable) {
                        compilation.chunks.forEach((item) => {
                            const _findIndex = this.replaceChunks.findIndex(
                                (replaceChunk) => replaceChunk.origin === item.name,
                            );
                            if (_findIndex !== -1) {
                                item.name = this.replaceChunks[_findIndex].replace;
                            }
                        });
                    }
                },
            );
        });
    }
}
export default WebpackReplaceChunksNamePlugin;
