const phoneLoader = document.getElementById('phoneLoader');

const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = (phones) => {
    console.log(phones);

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


loadPhone();