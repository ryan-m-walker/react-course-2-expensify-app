const book = {
  title: 'Ego and its Own',
  author: 'Max Stirner',
  publisher: {
    // name: 'GTK Press'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName)


// Array Destructuring

const address = [
  '1299 S Juniper Street',
  'Cleveland',
  'Ohio',
  44102
]

const [ , city, state ] = address

console.log(`You are in ${city} ${state}`)


const item = [
  'Coffee (hot)',
  '$2.00',
  '$2.50',
  '$2.75'
]

const [ coffee, , med ] = item

console.log(`A medium ${coffee} costs ${med}`)