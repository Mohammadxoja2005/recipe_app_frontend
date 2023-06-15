export interface Recipe {
    id: number,
    img: string,
    name: string,
    description: string,
    ingredients: Array<string>,
    cook_time: string
}

export interface createRecipeType {
    img: string,
    name: string,
    description: string,
    ingredients: string,
    cook_time: string
}

export interface editRecipeType {
    id: number,
    img: string,
    name: string,
    description: string,
    ingredients: string,
    cook_time: string
} 