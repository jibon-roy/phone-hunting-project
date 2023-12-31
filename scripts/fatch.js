const phoneLoader = document.getElementById('phoneLoader');

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = (phones) => {

    phoneLoader.textContent = '';

    // Check if phones.length > 12 and show the show all button
    const showAll = document.getElementById('show-all');
    if (phones.length > 12) {
        showAll.classList.remove('hidden');
        // // Show all button
        // const showButton = document.getElementById('show-all-button');
        // showButton.addEventListener('click', () => {
            
        // })
    } else {
        showAll.classList.add('hidden');
    }

    phones = phones.slice(0, 12);

    for (let phone of phones) {
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card bg-base-100 shadow-md">
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>${phone.slug}</p>
        <div class="card-actions justify-left">
        <button
        class="mx-auto block normal-case text-white py-2 px-7 rounded-md cursor-pointer bg-[#0D6EFD]">Buy
        Now</button>
        </div>
        </div>
        </div>
    `
        phoneLoader.appendChild(card);
    }

}

const formSubmit = () => {
    const search = document.getElementById('search');
    const searchText = search.value;

    loadPhone(searchText);
    search.value = '';
}
