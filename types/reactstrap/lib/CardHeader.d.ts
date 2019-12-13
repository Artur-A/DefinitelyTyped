import * as React from 'react';
import { CSSModule } from '../index';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    className?: string;
    cssModule?: CSSModule;
}

declare class CardHeader<T = {[key: string]: any}> extends React.Component<CardHeaderProps> {}
export default CardHeader;
