/*
1) Утворити масив розміром 30. Заповнити його випадковими  числами від 1 до 30.
   Вивести елементи масиву на екран у прямому і оберненому порядку
 */

 arr = [];
 
for (var i = 0; i < 30; i++){
    arr[i] = Math.floor(Math.random() * (30 - 1)) + 1;
    console.log(arr[i]); 
}

console.log("array length = ", arr.length);
console.log("back array = ", arr.reverse());


/*2) 
 Дано масив розміром 20. Заповнити його випадковими  числами від -10 до 20. Замінити всі від’ємні елементи нулями. */

 var arr1 = [];

 for (var i = 0; i < 20; i++){
    arr1[i] = Math.floor(Math.random() * (20 + 10)) - 10; 
}
    for (var i = 0; i < 20; i++){
    if(arr1[i] < 0){
        arr1[i] = 0;
    }
    }
    console.log(arr1);

 
