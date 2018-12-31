import { expect } from 'chai'
import marktyCSV from '../src'

describe('marktyCSV()', () => {
	describe('Simple:', () => {
        it('parses simple csv', () => {
            var input = 'A,B,C\n1,2,3\n4,5,6\n'
            var output = [["A","B","C"],["1","2","3"],["4","5","6"]]
            expect(marktyCSV(input)).to.deep.equal(output)
        })
        it('allows \\n at the end', () => {
            var input = 'A,B,C\n1,2,3\n4,5,6\n'
            var output = [["A","B","C"],["1","2","3"],["4","5","6"]]
            expect(marktyCSV(input)).to.deep.equal(output)
        })
        it('trims unused spaces', () => {
            var input = ' A ,   B ,   C\n  1,  2,  3 \n 4, 5, 6'
            var output = [["A","B","C"],["1","2","3"],["4","5","6"]]
            expect(marktyCSV(input)).to.deep.equal(output)
        })
        it('eliminates empty rows', () => {
            var input = '\n\n\nA,B,C\n1,2,3\n\n\n\n\n4,5,6\n'
            var output = [["A","B","C"],["1","2","3"],["4","5","6"]]
            expect(marktyCSV(input)).to.deep.equal(output)
        })
    })
})
