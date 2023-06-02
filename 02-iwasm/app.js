import {
  add,
  minusOne
} from './build/release.js'

function addingNumbers() {
  const $addNumbers = document.querySelector('.add-numbers')
  $addNumbers.innerHTML = `Adding 1 and 2 equals ${add(1, 2)}` 
}

function subbingByOne() {
  const $minusOne = document.querySelector('.minus-one')
  $minusOne.innerHTML = `Substracting a 4 by 1 equals ${minusOne(4)}`
}

function main() {
  addingNumbers()
  subbingByOne()
}

export default main

