function Meal() {

    const link = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    let inputData = document.getElementById('input').value;
    let link2 = link + inputData
    fetch(link2)
        .then(response => response.json())
        .then(Data => displayFood(Data));


    const displayFood = foods => {
        
        const food = foods.meals;
     


        if (food == null) {
            document.getElementById("food-view").style.display = "none";
            const dataNull = `
         <h3> Meal Not Available</h3>
             `
            document.getElementById("not-found").style.display = "block";
            document.getElementById("not-found").innerHTML = dataNull;
            document.getElementById("item-view").style.display = "none";


        }
        else {


            document.getElementById("food-view").style.display = "block";
            document.getElementById("not-found").style.display = "none";
            document.getElementById("item-view").style.display = "none";



            const foodDiv = document.getElementById("food-Item");

            food.forEach(element => {
                let foodItem = element;

                const itemDiv = document.createElement('div');
                const mealData = `
                        <div  id="push"  class="card  ">
                         <img class="card-img-top" src="${element.strMealThumb}" alt="Card image cap">
                         <div class="card-body">
                         <h6>${element.strMeal}</h6>
                        </div>
                     </div>
                             `;
                itemDiv.innerHTML = mealData;

                foodDiv.appendChild(itemDiv);
                console.log(foodItem.strMeal);

                const mealID =element.idMeal;
                console.log(mealID);
                function getMealById(mealID) {
                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
                      .then((res) => res.json())
                      .then((data) => {
                          
                        const img = data.meals[0].strMealThumb;
                        
                        document.getElementById('Image').src = img;
                        const Name = data.meals[0].strMeal;
                        document.getElementById('H2').innerText = Name;
                        const place = data.meals[0].strInstructions;
                        console.log(place);
                        document.getElementById('Paragraph').innerText = place;
                        
                      });
            
        
        
                }
    
                const pushbtn =document.getElementById("push");
                pushbtn.addEventListener("click", function(){
                    getMealById();
                    document.getElementById("item-view").style.display = "block";
                    document.getElementById("food-view").style.display = "none";
                });

            });


        }

    }
    document.getElementById("food-Item").innerHTML = " ";


}

