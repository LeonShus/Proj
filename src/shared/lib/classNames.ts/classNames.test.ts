import { classNames } from "./classNames"

describe('classNames', () => {
    test('test', () => {
        console.log('classNames',classNames)
        expect(classNames('asdasd', {}, [])).toBe('asdasd ')
    })
})