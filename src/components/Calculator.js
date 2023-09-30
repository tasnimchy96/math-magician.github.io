import React from 'react';

const keys = [
  {
    AC: {
      type: 'Clear',
    },
  },
  {
    '+/-': {
      type: 'Negative',
    },
  },
  {
    '%': {
      type: 'Math',
    },
  },
  {
    '/': {
      type: 'Math',
      colorType: 'Orange',
    },
  },
  {
    7: {
      type: Number,
    },
  },
  {
    8: {
      type: Number,
    },
  },
  {
    9: {
      type: Number,
    },
  },
  {
    '*': {
      type: 'Math',
      colorType: 'Orange',
    },
  },
  {
    4: {
      type: Number,
    },
  },
  {
    5: {
      type: Number,
    },
  },
  {
    6: {
      type: Number,
    },
  },
  {
    '-': {
      type: 'Math',
      colorType: 'Orange',
    },
  },
  {
    1: {
      type: Number,
    },
  },
  {
    2: {
      type: Number,
    },
  },
  {
    3: {
      type: Number,
    },
  },
  {
    '+': {
      type: 'Math',
      colorType: 'Orange',
    },
  },
  {
    '': {
      type: 'none',
    },
  },
  {
    0: {
      type: Number,
    },
  },
  {
    '.': {
      type: Number,
    },
  },
  {
    '=': {
      type: 'Result',
      colorType: 'Orange',
    },
  },
];

const mappedKey = keys.map((key) => Object.entries(key)[0]);

const getButtonClassName = ({ value }) => {
  let className = '';
  if (value) className += 'border border-solid border-gray-400';
  if (value.colorType === 'Orange') className += 'border-2 border-solid border-gray-400 bg-amber-600';
  return className;
};

const Header = () => (
  <header className="text-right text-white text-3xl p-8 bg-gray-500 font-bold">
    <div>0</div>
  </header>
);

const Body = () => (
  <div className="flex-grow grid grid-cols-4 text-black font-bold text-3xl">
    {mappedKey.map(([key, value]) => (
      <button
        type="button"
        key={key}
        className={getButtonClassName({ value })}
      >
        {key}
      </button>
    ))}
  </div>
);

export default function Calculator() {
  return (
    <div>
      <main className="h-screen bg-gray-300 flex flex-col">
        <Header />
        <Body />
      </main>
    </div>
  );
}
