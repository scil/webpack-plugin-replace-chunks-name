export declare class WebpackReplaceChunksNamePlugin {
    private replaceChunks;
    private enable;
    constructor(options: OptionsProps);
    apply(compiler: any): void;
}
export default WebpackReplaceChunksNamePlugin;

export interface OptionsProps {
    replaces: replaceProps[];
    enable: enableProps;
}
export declare type replaceProps = {
    origin: string;
    replace: string;
};
export declare type enableProps = boolean;
