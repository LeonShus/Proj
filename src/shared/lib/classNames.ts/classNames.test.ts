import { classNames } from "./classNames"

describe('classNames', () => {
    test('test', () => {
        expect(classNames('asdasd', {}, [])).toBe('asdasd ')
    })
})