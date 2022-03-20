import { padZero } from '../../src';

describe('padZero', () => {
  it('should be defined', () => {
    expect(padZero).toBeDefined();
  });

  it('correct', () => {
    expect(padZero(0)).toBe('00');
    expect(padZero(0.2)).toBe('0.2');
    expect(padZero(1)).toBe('01');
    expect(padZero(9)).toBe('09');
    expect(padZero(10)).toBe('10');
    expect(padZero(28)).toBe('28');
    expect(padZero(688)).toBe('688');

    expect(padZero(0, 3)).toBe('000');
    expect(padZero(0.2, 3)).toBe('0.2');
    expect(padZero(1, 3)).toBe('001');
    expect(padZero(9, 3)).toBe('009');
    expect(padZero(10, 3)).toBe('010');
    expect(padZero(28, 3)).toBe('028');
    expect(padZero(688, 3)).toBe('688');

    expect(padZero(0, 5)).toBe('00000');
    expect(padZero(0.2, 5)).toBe('000.2');
    expect(padZero(1, 5)).toBe('00001');
    expect(padZero(9, 5)).toBe('00009');
    expect(padZero(10, 5)).toBe('00010');
    expect(padZero(28, 5)).toBe('00028');
    expect(padZero(688, 5)).toBe('00688');
  });

  it('incorrect', () => {
    expect(padZero()).toBe('00');
    expect(padZero(undefined)).toBe('00');
    expect(padZero(void 0)).toBe('00');
    expect(padZero(null)).toBe('00');

    expect(padZero(undefined, 0)).toBe('');
    expect(padZero(undefined, 5)).toBe('00000');
    expect(padZero(null, 0)).toBe('');
    expect(padZero(null, 5)).toBe('00000');

    expect(padZero(undefined, '')).toBe('');
    expect(padZero(undefined, '12')).toBe('');
    expect(padZero(undefined, null)).toBe('');
    expect(padZero(undefined)).toBe('00');

    expect(padZero(false, '')).toBe('false');
    expect(padZero(false, '12')).toBe('false');
    expect(padZero(false, null)).toBe('false');
    expect(padZero(false, void 0)).toBe('false');

    expect(padZero(true, '')).toBe('true');
    expect(padZero(true, '12')).toBe('true');
    expect(padZero(true, null)).toBe('true');
    expect(padZero(true, void 0)).toBe('true');

    expect(padZero(true, 5)).toBe('0true');
    expect(padZero(true, true)).toBe('true');
  });
});
