
console.log('js');

const loadPhone = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  const data = await res.json()
  const phones = data.data
  displayPhones(phones)
}




// Displays phone-container div
const displayPhones = (phones) => {
  console.log(phones);
  
  //** important 2 lines */
  const phoneContainer = document.getElementById('phone-container')
  phoneContainer.textContent = `` // or, phoneContainer.innerHTML = ``

  phones.forEach((phone) => {
    console.log(phone);
    const phoneCardDiv = document.createElement('div')

    phoneCardDiv.innerHTML = `
      <div class="card w-full bg-base-100 shadow-xl">
      <figure><img src="${phone.image}" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    `

    phoneContainer.appendChild(phoneCardDiv)
  })
}




// Search Button
const handleSearch = () => {
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value
  console.log(searchText);
  loadPhone(searchText);
}

loadPhone('iphone');