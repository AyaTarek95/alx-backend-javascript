/* eslint-disable */
export default function hasValuesFromArray(set, array){
    const s = new Set(set)
    for (let a of array){
      if (!s.has(a)){
        return false
      }
    }
    return true
}
