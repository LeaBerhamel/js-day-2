let hamSandwich = 0
let tunaSandwich = 0
let vegetarianSandwich = 0
 
while (breadCount >= 2 && hamCount >= 1) {
hamSandwich += 1
breadCount -= 2
hamCount -= 1
}
 
while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) {
tunaSandwich += 1
breadCount -= 2
tunaCount -= 1
saladCount -= 2
}
 
while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) {
vegetarianSandwich += 1
breadCount -= 2
saladCount -= 1
tomatoCount -= 2
}

displayThisText("Number of ham sandwich(es) :" + hamSandwich)
displayThisText("Number of tuna sandwich(es) :" + tunaSandwich)
displayThisText("Number of vegetarian sandwich(es) :" + vegetarianSandwich)
displayIngredients()
