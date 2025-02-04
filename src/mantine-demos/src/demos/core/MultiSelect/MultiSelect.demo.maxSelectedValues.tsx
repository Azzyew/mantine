import React from 'react';
import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return <MultiSelect maxSelectedValues={3} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Pick 3 values or less"
        placeholder="Pick 3 values or less"
        searchable
        maxSelectedValues={3}
      />
    </div>
  );
}

export const maxSelectedValues: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
