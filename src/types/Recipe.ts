export interface Recipe {
    id: number,
    img: string,
    name: string,
    description: string,
    ingredients: Array<string>,
    cook_time: string
}