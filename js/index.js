
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
  if (phones.length > 5) {
    // show Show All btn
    showAllContainer.classList.remove('hidden')
    phones = phones.slice(0, 5)
  }
  else {
    // hide Show All button
    showAllContainer.classList.add('hidden')
  }

  // display only 5 phones



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

  loadingSpinner(false)
}




// Search Button
const handleSearch = () => {
  loadingSpinner(true)   // logical thinking
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value
  console.log(searchText);
  loadPhone(searchText); // calling loadPhone func
  document.getElementById('search-field').value = ''
}


// loading Spinner
const loadingSpinner = (isLoading)=>{
  const loadingSpinner = document.getElementById('loading-spinner')
  
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
} 

loadPhone('iphone');