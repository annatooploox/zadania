import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('body', {
  margin: 0,
  background: 'hotpink',
});

export const button = style({
  width: 380,
  height: 86,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'yellow',
});
