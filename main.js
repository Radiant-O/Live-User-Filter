const searchInput = document.querySelector('#search_filter')
const userInfo = document.querySelector('.user')
const userList = document.querySelector('.users')

const users = []

loadUp()

async function loadUp(){
    const res = await fetch('random.me/api?/')
    const rep = await res.json()

    console.log(rep)

    userList.innerHTML =`<li class="user">
                            <img src="${img}" alt="" class="user-img"/>
                            <div class="user-info">
                                <h3 class="user-name">
                                    ${name}
                                </h3>
                                <p class="user-city">
                                    ${city},
                                    <span>${country}</span>
                                </p>
                            </div>
                        </li>`
}


loadUsers()
function loadUsers(){
    const input = users.forEach(user => {
        if(user.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            user.classList.remove('hidden')
        }else(
            user.classList.add('hidden')
        )
    })
}