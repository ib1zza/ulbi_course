import { classNames } from './classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('stringClass')).toBe('stringClass');
    });
});
