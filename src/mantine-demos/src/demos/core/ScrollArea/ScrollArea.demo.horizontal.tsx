import React from 'react';
import { Group, ScrollArea } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { Content } from './_content';

const code = `
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea style={{ width: 300, height: 200 }}>
      <div style={{ width: 600 }}>
        {/* ... content */}
      </div>
    </ScrollArea>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <ScrollArea style={{ width: 300, height: 200 }}>
        <div style={{ width: 600 }}>
          <Content />
        </div>
      </ScrollArea>
    </Group>
  );
}

export const horizontal: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
