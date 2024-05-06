

window.hideLoader = function() {
    document.getElementById('loader').style.display = 'none';
}

window.showLoader = function() {
    document.getElementById('loader').style.display = 'block';
}

itemTemplate = function(item) {
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
