/*eslint no-unused-vars: 1*/
import markty from 'markty'

export default function marktycsv (CSV) {

    const blocks = '(?:([^,\\r\\n]+),|([^,\\r\\n]+)$)'
    const tokenizer = new RegExp(`${blocks}`, 'gm')
    let finalArr = [], tmpArr = []

    markty(CSV, tokenizer, (s, m) => {
        let [token, val, endval] = m        
        if (val) { tmpArr.push(val.trim()) }
        if (endval) { tmpArr.push(endval.trim()); finalArr.push(tmpArr); tmpArr = [] }
    })
    
    return finalArr
}