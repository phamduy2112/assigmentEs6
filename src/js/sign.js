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
// render dang nhap
const renderDangNhap=()=>{
    document.querySelector('.sign').innerHTML=
    `   <div class="sign-bg">
    <h3>Welcome Back!</h3>
    <p class="sign-text">Bạn chưa có tài khoản? <a href="signup.html">Đăng kí ngay</a></p>
    <a href="" class="sign-gg">
        <i class="fa-brands fa-google"></i>                 
           Đăng nhập bằng google
    </a>
    
    <form action="" method="post" class="sign-form">
       <div class="group-form">
               <label for="">Email*</label> 
            <div class="group-form__text">
            <input type="gmail" placeholder="vidu@gmail.com" id="email">
        </div>
       </div>
     <div class="group-form">
          <label for="">Password*</label> 
            <div class="group-form__text">
            <input type="password" placeholder="******" id="matkhau">
            <i class="fa-regular fa-eye-slash icon"></i>
        </div>
     </div>
       <div id="error"></div>
          
        <div class="forgot">   <a href="">
            Forgot password
        </a></div>
     
        <button id="submit" class="submit">Đăng nhập</button>
    </form>

</div>
`
dangNhap()
}
// render dang ki
const renderDangKi=()=>{
    document.querySelector('.sign').innerHTML=
    `<div class="sign-bg">
    <h3>Đăng kí!</h3>
    <p class="sign-text">Bạn đã có tài khoản? <a href="sigin.html">Đăng nhập ngay</a></p>
    <a href="" class="sign-gg">
        <i class="fa-brands fa-google"></i>                 
           Đăng nhập bằng google
    </a>
    <p class="or">Hoặc đăng kí bằng email</p>
    
    <form action="" method="post" class="sign-form">
        <div class="group-form">
               <label for="">Fullname*</label> 
            <div class="group-form__text">
            <input type="text" placeholder="vidu@gmail.com" id="fullName">
          
        </div> 
         <div class="error">
               
            </div>
        </div>
         
            <div class="group-form">
            <label for="">Email*</label> 
            <div class="group-form__text">
              <input type="gmail" placeholder="vidu@gmail.com" id="email">

            </div>
        </div>
       <div class="group-form">
        <label for="">Password*</label> 
        <div class="group-form__text">
        <input type="password" placeholder="****" id="password">
        <i class="fa-regular fa-eye-slash icon"></i>
    </div>
       </div>
           
        <div class="group_form">
         <input type="checkbox" name="" id=""> 
         <span>Tôi đồng ý với <span class="quantrong">các điều khoản</span>  trên <span class="quantrong">cam kết</span> thực hiện đúng</span>  
        </div>
        
     
        <button id="submit" class="submit">Đăng kí</button>
    </form>

</div>`;
chucNangDangKi();

}
// dang nhap
function localStrore(){
    
}
function dangNhap(){
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
                    window.location.href = "./index.html";
               
                }, 3000);
              
    
            }
            
            else{
            //    document.querySelector('#error').innerHTML="Sai email,mật khẩu"
            }
           });
        })  
        } else{
            document.querySelector('#error').innerHTML="Phải nhập email mật khẩu"
    
        }
     
        
 })   
}
function chucNangDangKi(){
    document.querySelector('#submit').addEventListener('click',e=>{
        e.preventDefault();
         let themTk=new Promise((xuli,thongbao)=>{
        dataUser={
            fullName:document.querySelector('#fullName').value,
            email:document.querySelector('#email').value,
            password:document.querySelector('#password').value,
        }
        opt={
            method:"POST",body:JSON.stringify(dataUser),
            headers:{'Content-Type':'application/json'}
        }
        fetch(`http://localhost:3000/users`,opt)
        .then(res=>res.json()).then(sp=>xuli(sp))
        .catch(err=>thongbao(err))


    })
    themTk.then(
        xuli=(sp)=>{
            alert("Thành công")
        },
        thongbao=err=>console.log(err),
    )
    })

   
}


