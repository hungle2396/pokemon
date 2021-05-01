import React, {useEffect} from "react";
import axios from "axios";

const App = () => {

    let cat_images = [];

    const renderedCat = (cat_data) => {
        let images = cat_data.map((cat) => {
            return (
                <img src={`${cat.url}`}></img>
            )
        });

        return images;
    };

    useEffect(() => {

        console.log(`In the useEffect`);
        const Cat = async (term) => {
            let response = await axios.get(`https://api.thecatapi.com/v1/images/search`, {
                params: {
                    breed_id: term,
                    limit: 10,
                    page: 3,
                    apiKey: "7f9309c1-e09c-4544-823e-d698d0c9379a"
                }
            });
    
            return response.data;
        }
    
        Cat("Abys").then((cat_data) => {
            cat_images = renderedCat(cat_data);
            console.log(cat_images);
        });

    });
    

    console.log("In the regular");
    return (
        <div>
            Hello World
            {cat_images}
        </div>
    );
}

export default App;