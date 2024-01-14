const user='http://localhost:3000/users';
function fetchData(){
    fetch('http://localhost:3000/users')
    .then(response=>{
       return response.json();
    }).then(data=>{
       data.forEach((value)=>{
        console.log(value);
       });
    })
}
// fetchData();
function localStrore(){
    
}
document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault();
    let email=document.querySelector('#email').value;  
    let matKhau=document.querySelector('#matkhau').value; 
    if(email !='' && matKhau!=''){
         fetch('http://localhost:3000/users')
    .then(response=>{
       return response.json();
    }).then(data=>{
        console.log(data);
       data.forEach((value)=>{
     
        if(email===value.email&&matKhau===value.matkhau){
            
            localStorage.setItem('users', JSON.stringify(value));
            setTimeout(function() {
                window.location.href = "../index.html";
            }, 3000);
          

        }
        
        else{
           document.querySelector('#error').innerHTML="Sai email,mật khẩu"
        }
       });
    })  
    } else{
        document.querySelector('#error').innerHTML="Phải nhập email mật khẩu"

    }
 
    
})