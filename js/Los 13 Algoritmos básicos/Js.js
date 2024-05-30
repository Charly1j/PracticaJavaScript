//Actividades//

//Obtener del 1 al 255//
function ejercicio1 (){
    let num=[];
    for(var i=1; i<126; i++){
        num.push(i);
    }
    console.log(num)
}

//Consguir num.pares hasta 1000//
function ejercicio2 (){
    var sum=0;
    for(var i=1; i<1001; i++){
        if(i%2==0){
            sum= sum+i
        }
    }
    console.log(sum)
}
//Suma impares hasta 5000//
function ejercicio3(){
    var sum=0;
    for(var i=1; i<5000; i++){
        if(i%2==1){
            sum= sum+i
        }
    }
    console.log(sum)
}
//Suma index array//
function ejercicio4(){
    let arr=[2,4,6,8,5]
    var sum=0
    for(var i=0; i<arr.length;i++){
        sum = sum + arr[i];
    }
    console.log(sum)
}
//Encontrar al mayor//
function ejercicio5(){
    let arr=[9,-3,3,5,7]
    var max=0
    for(var i=0; i<arr.length;i++){
        if(arr[i]>arr[max]){
            max=i
        }
    }
    console.log(arr[max])
}
//Encuentra el promedio//
function ejercicio6(){
    let arr=[1,3,5,7,20]
    var avg=0
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum=arr[i]+sum
    }
    avg= sum/arr.length
    console.log(avg)
}
//Array de impares 1-50//
function ejercicio7(){
    let arr=[]
    for(var i=0;i<50;i++){
        if(i%2==1){
            arr.push(i)
        }
    }
    console.log(arr)
}
//Mayor que Y//
function ejercicio8(){
    var y=3;
    let arr=[1,3,5,7,9,0,12];
    let newArr=[];
    for(var i =0; i < arr.length; i ++){
        if(y<arr[i]){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
//Cuadrados//
function ejercicio9(){
    let arr=[1,5,10,-2,9,2,15]
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*arr[i]
    }
    console.log(arr)
}
//Negativos//
function ejercicio10(){
    let arr=[1,5,10,-2,-5,-1,-9]
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0
        }
    }
    console.log(arr)
}
//Max/Min/Avg//
function ejercicio11(){
    let arr=[1,5,10,-2]
    let arrMix=[arr[0],arr[0]]
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
        if(arr[i]>arrMix[0]){
            arrMix[0]=arr[i];
        }
        if(arr[i]<arrMix[0]){
            arrMix[1]=arr[i];
        }
    }
    arrMix.push(sum/arr.length);
    console.log(arrMix);
}
//Intercambia Valores//
function ejercicio12(){
    let arr=[1,5,10,-2]
    var a=arr[0]
    var b=arr[arr.length-1]
    arr[0]=b;
    arr[arr.length-1]=a;
    console.log(arr);
}
//De numero a string//
function ejercicio13(){
    let arr=[-1,-3,2]
    var a="Dojo"
    for(var i=0; i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=a;
        }
    }
    console.log(arr)
}



ejercicio1()
ejercicio2()
ejercicio3()
ejercicio4()
ejercicio5()
ejercicio6()
ejercicio7()
ejercicio8()
ejercicio9()
ejercicio10()
ejercicio11()
ejercicio12()
ejercicio13()
