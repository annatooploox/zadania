import { ComponentProps, ReactNode } from 'react';

import { button_variant, columns, rows, Space, space_variant } from './app.css';

export default function IndexPage() {
  return (
    <Column space={20}>
      <Row space={8}>
        <ColorButton buttonColor="yellow" backgroundColor="blue" />
        <ColorButton buttonColor="grey" backgroundColor="black" />
      </Row>
      <ColorButton buttonColor="pink" backgroundColor="green" />
    </Column>
  );
}

function Column({ space = 0, children }: { space?: Space; children: ReactNode }) {
  return <div className={`${space_variant[space]} ${columns}`}>{children}</div>;
}

function Row({ space = 0, children }: { space?: Space; children: ReactNode }) {
  return <div className={`${space_variant[space]} ${rows}`}>{children}</div>;
}

function ColorButton({
  backgroundColor,
  buttonColor,
}: {
  backgroundColor: string;
  buttonColor: keyof typeof button_variant;
}) {
  return (
    <button
      className={button_variant[buttonColor]}
      onClick={() => changeBackgroundColor(backgroundColor)}
    >
      Turn on {backgroundColor}
    </button>
  );
}

function changeBackgroundColor(color: string) {
  document.body.style.backgroundColor = color;
}
