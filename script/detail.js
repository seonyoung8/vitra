document.addEventListener("DOMContentLoaded",()=>{

    let productId = getParam("pid")
    let result = listArray.find(item=>item.pid == productId)
    // find함수는 앞의 listArray 라는 배열의 여러 원소들을 전부 조사하여 원소 중 pid키 값이 현재 productId변수에 저장된 수와 일치되는 원소를 리턴하여 result라는 변수에 저장한다.


    const product1 = document.querySelector(".product1")
    product1.innerHTML = `<div class="common-frame">
                <figure class="class="img-pro-thumb>
                    <img src="./img/${result.pThumnail}" alt="${result.pName} 이미지">
                </figure>
                <div class="txt-pro">
                    <h1>${result.pName}</h1>
                    <p class="fwm">${result.pDesc}</p>
                    <dl class="price-table">
                        <dt>판매가</dt>
                        <dd>${toWon(result.pPrice)}원</dd>
                        <dt>배달비</dt>
                        <dd>
                            3,000원
                            <span>(20,000원 이상 구매시 무료)</span>
                        </dd>
                    </dl>
                    <div class="sell-info">
                        <div class="fwb">${result.pName}</div>
                        <div>
                            <div class="box-number">
                                <span class="btn-minus">
                                    <img src="./img/baseline-minus.svg" alt="감소버튼">
                                </span>
                                <span class="current-count">1</span>
                                <span class="btn-plus">
                                    <img src="./img/baseline-plus.svg" alt="증가 버튼">
                                </span>
                            </div>
                        </div>
                        <div class="fwb">${toWon(result.pPrice)}원</div>
                    </div>
                    <dl class="price-result">
                        <dt>전체금액</dt>
                        <dd>${toWon(result.pPrice)}원</dd>
                    </dl>
                    <ul class="btns-buy">
                        <li>
                            <a href="#">
                                <img src="./img/icn-heart.svg" alt="관심상품 등록 버튼">
                            </a>
                        </li>
                         <li><a href="#">장바구니</a></li>
                         <li><a href="#">구매하기</a></li>
                    </ul>
                </div>
            </div>`

})

document.addEventListener("DOMContentLoaded", () => {
    let productId = getParam("pid");
    let result = listArray.find(item => item.pid == productId);

    // 1. 9종 샐러드 영양 성분 데이터 (불포화 지방 포함)
    const nutritionData = {
        0: { cal: "315kcal", sodium: "185mg", carb: "24g", fat: "11g", unfat: "8g", protein: "29g" },
        1: { cal: "395kcal", sodium: "260mg", carb: "32g", fat: "22g", unfat: "14g", protein: "21g" },
        2: { cal: "420kcal", sodium: "145mg", carb: "14g", fat: "34g", unfat: "28g", protein: "25g" },
        3: { cal: "285kcal", sodium: "160mg", carb: "38g", fat: "9g", unfat: "6g", protein: "15g" },
        4: { cal: "340kcal", sodium: "410mg", carb: "29g", fat: "16g", unfat: "9g", protein: "18g" },
        5: { cal: "275kcal", sodium: "320mg", carb: "19g", fat: "13g", unfat: "7g", protein: "19g" },
        6: { cal: "465kcal", sodium: "395mg", carb: "11g", fat: "36g", unfat: "12g", protein: "27g" },
        7: { cal: "310kcal", sodium: "210mg", carb: "21g", fat: "18g", unfat: "10g", protein: "16g" },
        8: { cal: "435kcal", sodium: "460mg", carb: "26g", fat: "24g", unfat: "11g", protein: "29g" }
    };

    let nutri = nutritionData[productId];

    if (result && nutri) {
        // 2. 제목과 설명 업데이트 (HTML의 h3, p 태그 선택)
        const nutriTitle = document.querySelector(".nutri1 h3");
        const nutriDesc = document.querySelector(".nutri1 p");
        
        if(nutriTitle) nutriTitle.innerText = result.pName;
        if(nutriDesc) nutriDesc.innerText = result.pDesc;

        // 3. 표 데이터 업데이트 (작성하신 클래스명 기준)
        document.querySelector('.nutri-cal').innerText = nutri.cal;
        document.querySelector('.nutri-sodium').innerText = nutri.sodium;
        document.querySelector('.nutri-carb').innerText = nutri.carb;
        document.querySelector('.nutri-fat').innerText = nutri.fat;
        document.querySelector('.nutri-unfat').innerText = nutri.unfat;
        document.querySelector('.nutri-protein').innerText = nutri.protein;

        // 4. 우측 이미지 업데이트 (파일명 규칙에 맞게 설정)
        const nutriImg = document.querySelector(".nutri2 img");
        if(nutriImg) {
            // 예: nutri_list_thumb_sweetNutsChicken.jpg
            nutriImg.src = `./img/${result.pThumnail}`; 
            nutriImg.alt = `${result.pName} 영양 성분 이미지`;
        }
    }
});