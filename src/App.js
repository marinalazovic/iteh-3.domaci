import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import AddRecipe from './components/Recipes/AddRecipe/AddRecipe';
import RecipeDetail from './components/Recipes/RecipeDetail/RecipeDetail';
import Recipe from './Models/Recipe';
import AddIngredient from './components/Ingredients/AddIngredient/AddIngredient';
import { BrowserRouter } from 'react-router-dom';
import Ingredient from './Models/Ingredient';

class App extends Component {

  state={
    shouldIDisplay:false,
    shouldIDisplayIngredients:false,
    displayRecipeDetail:false,
    addRecipes: ()=>{},
    ingredientName:"",
    ingredientAmount:0,
    counter:0,
    recipeOneIngredients:[],
    recipeTwoIngredients:[],
    recipeThreeIngredients:[],
    recipeFourIngredients:[],
    recipeFiveIngredients:[],
    recipeSixIngredients:[],
    recipeSevenIngredients:[],
    recipeIngredients:[],
    recipes:[],
    selectedItem:-1,
    displayIngredientForm:false
  }


  addIngredient = ()=>{
    let newIngredient=new Ingredient(this.state.ingredientName,this.state.ingredientAmount);
    let ingredientsArray;
    switch(this.state.selectedItem){
      case 0:{
        ingredientsArray = this.state.recipeOneIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeOneIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeOneIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 1:{
        ingredientsArray = this.state.recipeTwoIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeTwoIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeTwoIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 2:{
        ingredientsArray = this.state.recipeThreeIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeThreeIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeThreeIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 3:{
        ingredientsArray = this.state.recipeFourIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeFourIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeFourIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 4:{
        ingredientsArray = this.state.recipeFiveIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeFiveIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeFiveIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 5:{
        ingredientsArray = this.state.recipeSixIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeSixIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeSixIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 6:{
        ingredientsArray = this.state.recipeSevenIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeSevenIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeSevenIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      default:{}
    }
  }

  addRecipe= ()=>{
    this.setState({
      shouldIDisplay:true,
      counter:this.state.counter<7?++this.state.counter:-1,
      shouldIDeleteRecipe:false});
      let recipesTemp;
      let recept;
      let ingredientsArray;
      switch(this.state.counter){
          case 1:{
            ingredientsArray = [new Ingredient("Ella sir",1)]
            this.setState({
              recipeOneIngredients:ingredientsArray
            })
            recept =  new Recipe("Čiz kejk","Bez šećera!","https://www.recepti.com/img/recipe/29510-cizkejk-sa-malinama.jpg",this.state.recipeOneIngredients)
            break;
          }
          case 2:{
            ingredientsArray = [new Ingredient("Tikvica",3)]
            this.setState({
              recipeTwoIngredients:ingredientsArray
            });
            recept = new Recipe("Pasta sa tikvicama","Špagete od tikvica!","https://coolinarika.azureedge.net/images/_variations/0/c/0c1d37d62298c8bf304994fc2465f61a_header.jpg?v=10")
            break;
          } 
          case 3:{
            ingredientsArray = [new Ingredient("Crna čokolada",200)]
            this.setState({
              recipeThreeIngredients:ingredientsArray
            });
            recept = new Recipe("Mafini","By dana","https://www.medias.rs/images/15/1548/mafin_feat1.jpg")
            break;
          }
          case 4:{
            ingredientsArray = [new Ingredient("Tortilja",7)]
            this.setState({
              recipeFourIngredients:ingredientsArray
            });
            recept = new Recipe("Giros","By mirjanci","https://coolinarika.azureedge.net/images/_variations/b/a/ba40f11749d8aea411bc53250d8fc24f_view_l.jpg?v=34")
            break;
          }
          case 5:{
            ingredientsArray = [new Ingredient("Pile",1)]
            this.setState({
              recipeFiveIngredients:ingredientsArray
            });
            recept = new Recipe("Piletina i povrće","Iz rerne","https://lepaisrecna.rs/Picture/38297/jpeg/Saveti_iskusnih_domacica_6_saveta_za_najukusnije_peceno_pile_843874349")
            break;
          }
          case 6:{
            ingredientsArray = [new Ingredient("Špagete",400)]
            this.setState({
              recipeSixIngredients:ingredientsArray
            });
            recept = new Recipe("Lazanje","By mmarinci","https://coolinarika.azureedge.net/images/_variations/9/4/94717ea3d6076022fee2861b51685fa9_view_l.jpg?v=3")
            break;
          }
          case 7:{
            ingredientsArray = [new Ingredient("Boranija",300)]
            this.setState({
              recipeSevenIngredients:ingredientsArray
            });
            recept = new Recipe("Boranija","Sa junetinom","https://coolinarika.azureedge.net/images/_variations/7/7/7786dd81755c5b5e267be39f3ead0e62_view_l.jpg?v=1")
            break;
          }
          default:{}
        }
        recipesTemp=this.state.recipes;
        recipesTemp.push(recept);
        this.setState({recipes:recipesTemp});

        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp.push(ingredientsArray);
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
      }

  displayIngredient=()=>{
    this.setState({
      shouldIDisplayIngredient:true
    })
  }

  addIngredientName=(event)=>{
    this.setState({
      ingredientName:event.target.value
    })
  }

  addIngredientAmount=(event)=>{
    this.setState({
      ingredientAmount:event.target.value
    })
  }

  displayDetail=(recipeId)=>{
    this.setState({
      displayRecipeDetail:true,
      selectedItem:recipeId,
      shouldIDisplayIngredients:true
    },()=>{
      if(this.state.selectedItem===-1){
        this.setState({
          displayRecipeDetail:false
        })
      }
    })

  }

  removeRecipe=()=>{
    let recipesTemp=this.state.recipes;
    recipesTemp.splice(this.state.selectedItem,1);
    this.setState({
      recipes: recipesTemp
    });

    let selectedItemTemp=this.state.selectedItem;
    this.setState({
      counter:this.state.counter>0?--this.state.counter:-1,
      selectedItem:selectedItemTemp>0?--selectedItemTemp:0
    });
  }

  alterSelectedRecipe=(newRecipeName,newRecipeDescription,newImagePath)=>{
    let recipesTemp=this.state.recipes;
    recipesTemp[this.state.selectedItem]=new Recipe(newRecipeName,newRecipeDescription,newImagePath);

    this.setState({
      recipes:recipesTemp
    })
  }

  RecipeNameChangedHandler = (event)=>{
    let recipesTemp=this.state.recipes;
    recipesTemp[this.state.selectedItem].name=event.target.value;
    this.setState({
      recipes:recipesTemp
    })
  }

  RecipeDescriptionChangedHandler =(event)=>{
    let recipesTemp=this.state.recipes;
    recipesTemp[this.state.selectedItem].description=event.target.value;
    this.setState({
      recipes:recipesTemp
    })
  }

  RecipeImageChangedHandler =(event)=>{
    let recipesTemp=this.state.recipes;
    recipesTemp[this.state.selectedItem].imagePath=event.target.value;
    this.setState({
      recipes:recipesTemp
    })
  }

  displayIngredientFormHandler = () =>{
    this.setState({
      displayIngredientForm:true
    })
  }

  closeFormHandler = () =>{
    this.setState({
      displayIngredientForm:false
    })
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <AppHeader/>
        <div className="container">
          <div className="recipe">
            <AddRecipe
            recipeIngredients={this.state.recipeIngredients}
            ingredientName={this.state.ingredientName}
            ingredientAmount={this.state.ingredientAmount}
            selectedItem={this.state.selectedItem}
            shouldIDeleteRecipe={this.state.shouldIDeleteRecipe}
            recipes={this.state.recipes}
            addRecipe={this.addRecipe}
            selectedItem={this.state.selectedItem}
            shouldIDisplay={this.state.shouldIDisplay}
            displayDetail={this.displayDetail}
            recipes={this.state.recipes}
            shouldIDisplayIngredients={this.state.shouldIDisplayIngredients}
            />
          </div>
          <div className="recipe">
            <RecipeDetail
            displayIngredientFormHandler={this.displayIngredientFormHandler}
            descChanged={this.RecipeDescriptionChangedHandler}
            imgChanged={this.RecipeImageChangedHandler}
            nameChanged={this.RecipeNameChangedHandler}
            alterSelectedRecipe={this.alterSelectedRecipe}
            displayEditForm={this.state.displayEditForm}
            removeRecipe={this.removeRecipe}
            deleteRecipe={this.deleteRecipe}
            recipes={this.state.recipes}
            displayRecipeDetail={this.state.displayRecipeDetail}
            selectedItem={this.state.selectedItem}/>
          </div>
          {this.state.displayIngredientForm?
          <div className="ingredient">
            <AddIngredient
            closeForm={this.closeFormHandler}
            addIngredient={this.addIngredient}
            displayIngredientForm={this.state.displayIngredientForm}
            displayIngredient={this.displayIngredient}
            addIngredientName={this.addIngredientName}
            addIngredientAmount={this.addIngredientAmount}
            />
          </div>:console.log()}
          
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
