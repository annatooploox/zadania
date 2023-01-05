import { createVar, globalStyle, style, styleVariants } from '@vanilla-extract/css';

globalStyle('body', {
  margin: 50,
  background: 'orange',
  opacity: 10,
});

const backgroundColor = createVar();
const backgroundColorHover = createVar();

const var_button = style({
  width: 380,
  height: 86,
  display: 'inline-block',
  marginLeft: 50,
  border: 0,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor,
  padding: 30,
  ':hover': {
    color: 'var(--background-color-hover)',
  },
});

export const button_variant = styleVariants({
  yellow: [var_button, { vars: { [backgroundColor]: 'yellow', [backgroundColorHover]: 'grey' } }],
  pink: [var_button, { vars: { [backgroundColor]: 'pink', [backgroundColorHover]: 'white' } }],
  grey: [var_button, { vars: { [backgroundColor]: 'grey', [backgroundColorHover]: 'white' } }],
});
