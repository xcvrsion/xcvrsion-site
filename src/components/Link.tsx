import React, { CSSProperties, Component } from 'react';
import { ITextProps, Text } from './Text';
import { Colors } from '../resources';

export interface ILinkProps extends ITextProps {
  href: string;
}

export interface ILinkState {
  focusing: boolean;
}

export class Link extends Component<ILinkProps, ILinkState> {

  constructor(props: ILinkProps) {
    super(props);

    this.state = {
      focusing: false,
    };
  }

  private _handleFocusing = () => {
    this.setState({ focusing: true });
  }

  private _handleStopFocusing = () => {
    this.setState({ focusing: false });
  }

  render = () => {
    const linkStyle = Object.assign({},
      styles.link,
      this.props.style,
      this.state.focusing && styles.hovering,
    );

    return (
      <a
        style={styles.anchor}
        href={this.props.href}
        onMouseOver={this._handleFocusing}
        onMouseOut={this._handleStopFocusing}
        onTouchStart={this._handleFocusing}
        onTouchEnd={this._handleStopFocusing}>
        <Text userSelect style={linkStyle} {...this.props}>
          {this.props.children}
        </Text>
      </a>
    );
  }
};

const styles = {
  anchor: {
    textDecoration: 'none',
  } as CSSProperties,
  hovering: {
    color: Colors.primary,
    textDecoration: 'underline',
  } as CSSProperties,
  link: {
    color: Colors.black,
  } as CSSProperties,
};