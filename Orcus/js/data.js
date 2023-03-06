/*
pattern:
data = [{ref: reference, img: image_path}, ...]
*/
function createData(n_slides = 5) {
    let data = [];
    let images = [
        "images/portfolio01.jpg",
        "images/portfolio02.jpg",
        "images/portfolio03.jpg",
        "images/portfolio04.jpg",
        "images/portfolio05.jpg",
        "images/portfolio06.jpg",
        "images/portfolio06.jpg",
    ];
    let ref = "#";

    for (let i = 0; i < n_slides; i++) {
        for (let j = 0; j < images.length; j++) {
            data.push({
                ref: ref,
                img: images[j],
            });
        }
    }

    return data;
}

let data = createData();
