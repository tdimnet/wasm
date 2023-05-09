function hexToDecimal(hex) {
  return (hex).toString(10)
}

const hexExample = 0x2E7
const firstResult = hexToDecimal(hexExample)

console.log("The first result is", firstResult)


function decimalToBinary(dec) {
  return (dec).toString(2)
}

const decExample = 743
const secondResult = decimalToBinary(decExample)

console.log("The second result is", secondResult)

