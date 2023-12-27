import React, {useState} from 'react';
import '../../../components-style/Image.css';
import zhitomur from '../../../pictures/zhitomur.jpg';

function Image() {

    const [images, setImages] = useState([
        'https://iftravel.com.ua//assets/gallery/6/ivano-frankivska-oblast1_small.jpg'
    ]);
    
    const addImg = () => { 
        const newImage = zhitomur;
        setImages((prevImages) => [...prevImages, zhitomur]);  
    };

    const increaseImg = () => {
        const imagesElements = document.querySelectorAll('#img_container img');
        imagesElements.forEach(image => {
            image.width += 10;
            image.height += 10;
        });
    }
    

    const decreaseImg = () => {
        const imagesElements = document.querySelectorAll('#img_container img');
        imagesElements.forEach(image => {
            image.width -= 10;
            image.height -= 10;
        });  
    };

    

    const deleteImg = () => {
    
        if (images.length > 1) {
          const updatedImages = [...images];
          updatedImages.pop();
          setImages(updatedImages);
        }
    };

    return(
        <div>
            <div id="img_container">
                {images.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Житомир ${index + 1}`} />
                ))}
            </div>

            <div class="img_buttons">
                <button onClick={addImg}>Додати зображення</button>
                <button onClick={increaseImg}>Збільшити</button>
                <button onClick={decreaseImg}>Зменшити</button>
                <button onClick={deleteImg}>Видалити зображення</button>
            </div>
        </div>
    );
}

export default Image;