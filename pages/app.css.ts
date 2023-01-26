import { SpawnSyncReturns } from 'child_process';

import { createVar, globalStyle, style, styleVariants } from '@vanilla-extract/css';

globalStyle('body', {
  margin: 50,
  background: 'orange',
  opacity: 10,
});

const backgroundColor = createVar();
const backgroundColorHover = createVar();

/*


|----------------------------|----|
 Anna Jabłońskaaaaaaaaaaaa... edit
 Rafał Ruciński               edit


*/

export const columns = style({
  display: 'flex',
  flexDirection: 'column',
});

export const rows = style({
  display: 'flex',
  flexDirection: 'row',
});

const var_button = style({
  width: 380,
  height: 86,
  display: 'inline-block',
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

export type Space = typeof spaces[number];
const spaces = [0, 1, 2, 4, 8, 12, 16, 20, 24] as const;

export const space_variant = styleVariants(
  Object.fromEntries(
    // [[Key1, Value1], [Key2, Value2]]
    // Gdzie Key1 = 1, Key2 = 2, Key3 = 4
    // Gdzie Value1 = { gap: 1 }, Value2 = { gap: 2 }, Value3 = { gap: 4 }
    spaces.map((space) => [space, { gap: space }]),
  ) as Record<Space, { gap: Space }>,
);
