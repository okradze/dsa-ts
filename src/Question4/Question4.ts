// const getFinalString = (str: string): string => {
//   let result = ''
//   let hashCounter = 0;
  
//   for(let i = str.length -1; i >= 0 ; i--) {
//     if(str[i] === '#') {
//       hashCounter++
//     } else if(hashCounter === 0) {
//       result += str[i]
//     } else if(hashCounter > 0) {
//       hashCounter--
//     }
//   }
  
//   return result
// }

// export const areTypedOutStringsEqual = (str1: string, str2: string): boolean => {
//   const finalStr1 = getFinalString(str1)
//   const finalStr2 = getFinalString(str2)

//   if(finalStr1.length !== finalStr2.length) return false
//   return finalStr1 === finalStr2
// }

export const areTypedOutStringsEqual = (s: string, t: string): boolean => {
  let p1 = s.length - 1
  let p2 = t.length - 1

  // We define counter to count hashes. We increment counter after encountering hash. We decrease counter after skipping character
  let hashToRemove1 = 0
  let hashToRemove2 = 0

  while(p1 >= 0 ||  p2 >= 0) {
    let char1 = s[p1]
    let char2 = t[p2]

    // If character is # we increase counter and move pointer to another character
    if(char1 === '#' && char2 === '#') {
      p1--
      p2--
      hashToRemove1++
      hashToRemove2++
      continue
    } else if (char1 === '#') {
      hashToRemove1++
      p1--
      continue
    } else if (char2 === '#') {
      hashToRemove2++
      p2--
      continue
    }


    // Skip character if hash count is greater that 0
    if(hashToRemove1 > 0 && hashToRemove2 > 0) {
      p1--
      p2--
      hashToRemove1--
      hashToRemove2--
      continue
    } else if(hashToRemove1 > 0) {
      p1--
      hashToRemove1--
      continue
    } else if(hashToRemove2 > 0) {
      p2--
      hashToRemove2--
      continue
    }

    // Compare real characters
    if(char1 !== char2) return false
    p1--
    p2--
  }

  return true
}