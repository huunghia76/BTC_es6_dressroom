import API from '../utils/callData.js'

const getElement = (selector) => {
    return document.querySelector(selector)
}
const renderNavPills = () => {
    let tab = ''
    let content = ''
    API.API().then((data) => {
        // sử dụng destructuring
        const { navPills, tabPanes } = data;

        navPills.map((resNav, key) => {

            const { tabName, showName, type } = resNav;
            if (key == 0) {
                tab += `
                <li class="nav-item" role="presentation">
                    <button class="nav-link active " id="${type}" data-idtab="${type}" data-bs-toggle="tab" data-bs-target="#${type}-pane"
                        type="button" role="tab" aria-controls="${type}-pane" aria-selected="true">${showName}</button>
                </li>
                    `

                content += `
                        <div class="tab-pane fade show active" id="${type}-pane" role="tabpanel" aria-labelledby="${type}"
                        tabindex="0">`
            } else {
                tab += `
                <li class="nav-item" role="presentation">
                    <button class="nav-link " id="${type}" data-idtab="${type}" data-bs-toggle="tab" data-bs-target="#${type}-pane"
                        type="button" role="tab" aria-controls="${type}-pane" aria-selected="true">${showName}</button>
                </li>
                    `
                content += `
                        <div class="tab-pane fade " id="${type}-pane" role="tabpanel" aria-labelledby="${type}"
                        tabindex="0">`
            }

            tabPanes.map((res) => {
                // debugger
                // sử dụng destructuring
                const { id, type, name, desc, imgSrc_jpg, imgSrc_png } = res;
                if (resNav.type == type) {
                    content += `<div class="product-item">
                                    <img class="product-img" width="120px" src="${imgSrc_jpg}" alt="" />
                                    <p> ${name}</p>
                                    <button onclick="handleSetClothes('${type}','${imgSrc_png}' )">Thử đồ</button>
                                </div>
                                        `
                }
            })
            content += `</div>`
        })

        getElement('#myTab').innerHTML = tab
        getElement('#myTabContent').innerHTML = content

    })

}
renderNavPills()

window.handleSetClothes = (type, src) => {

    getElement(`.${type}`).style.background = `url(${src}) 0% 0% / 100%`
    
}