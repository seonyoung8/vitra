document.addEventListener("DOMContentLoaded",()=>{

    const list = document.querySelector(".list-grid")
    let result =""
    listArray.forEach(item=>{
        result += `<li>
                        <a href="./detail.html?pid=${item.pid}">
                         <figure>
                            <img src="./img/${item.pThumnail}" alt="${item.pName}">
                         </figure>   
                         <div class="list-option">
                            <span class="btn-heart">
                                <img src="./img/icn-heart.svg" alt="좋아요 아이콘">
                            </span>
                         </div>
                         <h4>${item.pName}</h4>
                         <p class="fwm">${item.pDesc}</p>
                         <div class="fwm price">${toWon(item.pPrice)}</div>
                        </a>
                    </li>`
    })
    list.innerHTML =result

   

})