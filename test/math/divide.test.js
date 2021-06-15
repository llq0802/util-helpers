import { divide } from '../../src';

describe('divide', () => {
  it('should be defined', () => {
    expect(divide).toBeDefined();
  });

  it(`1.21 / 1.1 = 1.1`, () => {
    expect(divide(1.21, 1.1)).toBe(1.1);
  });
  it(`字符串 '1' / '1'`, () => {
    expect(divide('1', '1')).toBe(1);
  });
  it(`4750.49269435 / 4 = 1187.6231735875`, () => {
    expect(divide(4750.49269435, 4)).toBe(1187.6231735875);
  });
  it(`0.9 / 3 = 0.3`, () => {
    expect(divide(0.9, 3)).toBe(0.3);
  });
  it(`36.2 / 0.362 = 100`, () => {
    expect(divide(36.2, 0.362)).toBe(100);
  });
  it(`-20 / 5.2 = -3.8461538461538462`, () => {
    expect(divide(-20, 5.2)).toBe(-3.8461538461538462);
  });
  it(`-2 / 1.22 = -1.639344262295082`, () => {
    expect(divide(-2, 1.22)).toBe(-1.639344262295082);
  });
  it(`-2.3 / 2.5 = -0.92`, () => {
    expect(divide(-2.3, 2.5)).toBe(-0.92);
  });
  it(`-1.4 / -2.2 = 0.6363636363636364`, () => {
    expect(divide(-1.4, -2.2)).toBe(0.6363636363636364);
  });
  it(`7 / -3 = -2.3333333333333335`, () => {
    expect(divide(7, -3)).toBe(-2.3333333333333335);
  });
  it(`7 / -0.076 = -92.10526315789471`, () => {
    expect(divide(7, -0.076)).toBe(-92.10526315789471);
  });
  it(`-2.9 / 8.0 = -0.3625`, () => {
    expect(divide(-2.9, 8.0)).toBe(-0.3625);
  });
  it(`2 / 6.6 = 0.30303030303030304`, () => {
    expect(divide(2, 6.6)).toBe(0.30303030303030304);
  });
  it(`-8 / 10.0 = -0.8`, () => {
    expect(divide(-8, 10.0)).toBe(-0.8);
  });
  it(`8 / -1.1 = -7.272727272727273`, () => {
    expect(divide(8, -1.1)).toBe(-7.272727272727273);
  });
  it(`-1.23e4 / 20 = -615`, () => {
    expect(divide(-1.23e4, 20)).toBe(-615);
  });
  it(`2.55e-10 / 1.7e-30 = 1.5e20`, () => {
    expect(divide(2.55e-10, 1.7e-30)).toBe(1.5e20);
  });
  it(`12 / 3 / 2 = 2`, () => {
    expect(divide(12, 3, 2)).toBe(2);
  });
  it(`33.3333 / 100 = 0.333333`, () => {
    expect(divide(33.3333, 100)).toBe(0.333333);
  });
  it(`83.42894732749 / 100 = 0.8342894732749`, () => {
    expect(divide(83.42894732749, 100)).toBe(0.8342894732749);
  });
  it(`1 / 3 = 0.3333333333333333`, () => {
    expect(divide(1, 3)).toBe(0.3333333333333333);
  });
});
