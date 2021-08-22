let sendData =() =>{
    
    var name1 = document.getElementById('name')
    var price = document.getElementById('price')
    // var file = document.getElementById('upload').files[0]
     
   
    var obj = {
        name : name1.value,
        price : price.value,
       
    }
     
    
    firebase.database().ref('student').push(obj)
   
    
}
     
     



function getdata(){
        firebase.database().ref('student').on('child_added',function(data){
            console.log(data.val())
        })
    }

getdata() 

