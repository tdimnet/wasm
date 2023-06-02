import {
  add
} from './build/release.js'

function addingNumbers() {
  const $addNumbers = document.querySelector('.add-numbers')
  $addNumbers.innerHTML = `Adding 1 and 2 equals ${add(1, 2)}` 
}

function main() {
  addingNumbers()
}

export default main

