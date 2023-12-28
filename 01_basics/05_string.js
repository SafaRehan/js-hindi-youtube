// STRING
// const name = "Safa"
// const repoCount = 50

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

//const newName = new String('safaRehan') //Also a method to declare string typeof "object"
// console.log(typeof name) // string
// console.log(typeof newName)
// console.log(newName[0])
// console.log(newName.__proto__)
// console.log(newName.length)
// console.log(newName.toUpperCase())
// console.log(newName.charAt(2))
// console.log(newName.indexOf("f"))

// the diff between slice and substring is in how they treat the negative number
// const newString = newName.substring(0,4)
// console.log(newString)
// const anotherString = newName.slice(-9,4)
// console.log(anotherString)

// const friendName = "    DEVIL    " 
// console.log(friendName )
// console.log(friendName.trim())

// const url = "https://safa.com/safa%20rehan"
// console.log(url.replace("%20", "-"))
// console.log(url.includes("safa"))
// console.log(url.includes("kaif"))

// const fname = 'kaif-raj-ehtesham-sahil-adnan-warish'
// console.log(fname.split("-"))

// concat() method of string object
// const name1 = new String('safa') 
// const name2 = new String('rehan') 
// const name3 = name1.concat(name2);

// console.log(name3);


//concat() method of string 
// const name1 =  ('safar') 
// const name2 =  ('rehana') 
// const name3 = name1.concat(name2);

// console.log(name3);

//matchAll() 
// const text = "Hello, how are you? Hello, nice to meet you. Hello, safa";
// const regex = /Hello/g;
// const matchesIterator = text.matchAll(regex);

// for (const match of matchesIterator) {
//   console.log("Found match:", match[0]); // Output the matched substring
// }

// valueOf method()

// Create an object
const myObject = {
    value: 42,
    // Define the valueOf method
    valueOf: function() {
      return this.value; // Returns the primitive value of the object
    }
  };
  // Use the valueOf method implicitly by adding the object to a number
  const result = myObject + 8;
  console.log(typeof result); // Output: 50
  console.log(result); // Output: number
  