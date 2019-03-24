/*1. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.*/

var arr = ['a ', 'b ', 'c '];

var arr1 = [1, 2, 3];
 
    var joined = arr.concat(arr1);
    
console.log("after CONCAT", joined);
console.log("==================================================>");

/*2. Задача. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.*/

var arr2 = ['a', 'b', 'c'];

for(var i = 0; i <arr2.length; i++){
    console.log("before PUSH", arr2[i]);
}

arr2.push(1);
arr2.push(2);
arr2.push(3);

for(var i = 0; i <arr2.length; i++){
    console.log("after PUSH", arr2[i]);
}
console.log("==================================================>");

/*3. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]*/

var arr3 = [1, 2, 3];
   console.log("before REVERSE", arr3);

arr3 = arr3.reverse();

  console.log("after REVERSE", arr3);
  console.log("==================================================>");

/*4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. */

var arr4 = [1, 2, 3];

for(var i = 0; i <arr4.length; i++){
    console.log("before SHIFT", arr4[i]);
}

arr4.unshift(6);
arr4.unshift(5);
arr4.unshift(4);

for(var i = 0; i <arr4.length; i++){
    console.log("after SHIFT", arr4[i]);
}
console.log("==================================================>");


/*5. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].*/

var arr5 = [1, 2, 3, 4, 5];
   console.log("before SPLICE", arr5);

arr5.splice(1, 2);

   console.log("after SPLICE", arr5);
   console.log("==================================================>");

