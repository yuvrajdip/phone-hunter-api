
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
  // clear phoneContainer cards before adding new Cards
  phoneContainer.textContent = `` // or, phoneContainer.innerHTML = ``


  // ShowAll btn container
  const showAllContainer = document.getElementById('show-all-btn')
  if(phones.length>5 ){
    showAllContainer.classList.remove('hidden')
  }
  else{
    showAllContainer.classList.add('hidden')
  }
  
  // display only 5 phones
  phones = phones.slice(0,5)
  


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
  loadPhone(searchText); // calling loadPhone func
  document.getElementById('search-field').value = ''
}

loadPhone('iphone');