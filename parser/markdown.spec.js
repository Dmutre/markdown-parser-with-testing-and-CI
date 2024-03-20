const { describe, expect, test } = require('@jest/globals');
const Markdown = require('./markdown');


describe('Html testing', () => {
  const markdown = new Markdown('html');
  test('Invalid input with unpaired', () => {
    const text = '**lalal** incorrect **closure';
    expect(() => {markdown.parse(text)}).toThrow();
  });

  test('Invalid input with nesting', () => {
    const text = '**_lalla_**';
    expect(() => {markdown.parse(text)}).toThrow();
  });

  test('Valid input', () => {
    const text = `Я йшов по доріжці у **лісі**, звернув на право, _звернув на ліво_
    Нічого не знайшов, пішов **додому** з повними _штанами_ штанів
    _Snake_case_`
    expect(markdown.parse(text)).toEqual(`<p>Я йшов по доріжці у <b>лісі</b>, звернув на право, <i>звернув на ліво</i>
    Нічого не знайшов, пішов <b>додому</b> з повними <i>штанами</i> штанів
    <i>Snake_case</i></p>`)
  })
});

describe('Escape testing', () => {
  const markdown = new Markdown('escape');
  test('Invalid input with unpaired', () => {
    const text = '**lalal** incorrect **closure';
    expect(() => {markdown.parse(text)}).toThrow();
  });

  test('Invalid input with nesting', () => {
    const text = '**_lalla_**';
    expect(() => {markdown.parse(text)}).toThrow();
  });

  test('Valid input', () => {
    const text = `Я йшов по доріжці у **лісі**, звернув на право, _звернув на ліво_

    Нічого не знайшов, пішов **додому** з повними _штанами_ штанів
    _Snake_case_`

    expect(markdown.parse(text)).toEqual(`Я йшов по доріжці у [1mлісі[22m, звернув на право, [3mзвернув на ліво[23m

    Нічого не знайшов, пішов [1mдодому[22m з повними [3mштанами[23m штанів
    [3mSnake_case[23m`)
  })
});