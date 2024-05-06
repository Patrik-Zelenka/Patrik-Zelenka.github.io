

window.hideLoader = function() {
    document.getElementById('loader').style.display = 'none';
}

window.showLoader = function() {
    document.getElementById('loader').style.display = 'block';
}

itemTemplate = function(item) {
    //  {
    //     "id": 45669,
    //     "type": "RAM",
    //     "image": "images/ram.jpg",
    //     "name": "RAM 16GB DDR4",
    //     "description": "16GB DDR4 RAM, 3200MHz, CL16, 1.35V, XMP 2.0",
    //     "longDescription": "Amazing fast RAM for your PC. 16GB DDR4 RAM, 3200MHz, CL16, 1.35V, XMP 2.0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda aut consectetur corporis culpa earum eos explicabo illo impedit itaque iusto maiores minus necessitatibus nobis odio officia pariatur possimus praesentium quod quos reiciendis repellendus sapiente sequi similique suscipit, totam veniam voluptas? Cum dignissimos doloremque doloribus libero, nam non quae reprehenderit!",
    //     "tags": [
    //       "RAM",
    //       "DDR4",
    //       "16GB"
    //     ],
    //     "price": "1500"
    //   },
    return `<div class="item">
                <div class="item-image" style="background-image: url('${item.image}')">
                </div>
                <div class="item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>${item.price} Kč</p>
                    <a href="detail.html?id=${item.id}">Detail</a>
                </div>
            </div>`;
}


fetchData = function() {
    // showLoader();
    fetch('databaze_response.json')
        .then(response => response.json())
        .then(data => {
            hideLoader();
            let html = '';
            data.forEach(item => {
                html += itemTemplate(item);
            });
            document.getElementById('list').innerHTML = html;
        });
}

fetchData();
