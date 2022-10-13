export interface OptionsProps {
    replaces: replaceProps[],
    enable: enableProps
}
export type replaceProps = {
    origin: string,
    replace: string
}
export type enableProps = boolean