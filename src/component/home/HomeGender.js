import React,{useState} from 'react';
import male from '../../img/Home/HomeGender/Male.jpg';
import famale from '../../img/Home/HomeGender/Famale.jpg';
import foot from '../../img/Home/HomeGender/Foot.jpg';

function HomeGender() {
    const [Gender, setGender] = useState(
        [
            {
                img : male,
                buttonText : 'Shop for mane'
            },
            {
                img : famale,
                buttonText : 'Shop for famane'
            },
            {
                img : foot,
                buttonText : 'Shop for Sneakers'
            }
        ]
    )
    return (
        <section id = 'home-gender'>
            <div className = 'row'>
                {
                    Gender.map(element => {
                      return(
                          <div className = 'col-4 gender-item'>
                              <div className = 'gender-item-content'>
                                  <img src = {element.img}></img>
                                  <button className = 'btn'>{element.buttonText}</button>
                              </div>
                          </div>
                      )
                    })
                }
            </div>
        </section>
    )
}

export default HomeGender
