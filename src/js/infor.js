const renderInforLeft=()=>{
  document.querySelector('.information-box__left').innerHTML=`
 <div class="information-box__top">
 <img src="../src/img/ao/ao1.webp" alt="">
 <div class="information_item">
    <h3>Phạm Duy</h3>
 <p>Đăng xuất</p>   
 </div>

</div>
<div class="information-box__bottom">
 <ul>
     <li><a href="">Thông tin chi tiết</a></li>
     <li><a href="">Yêu thích</a></li>
     <li><a href="">Đơn hàng</a></li>
     <li><a href="" onclick="dangXuat()">Đăng xuất</a></li>
  
 </ul>
</div>
 `
}
const renderInforRight=()=>{
  let user=JSON.parse(localStorage.getItem('users'));
  console.log(user);
document.querySelector('.information-box__right').innerHTML=
`  <div class="information-title">
<h3>Thông tin tài khoản</h3>
(Có thể chính sửa tài khoản)
</div>
<div class="information-item">
<h3>Thông tin cá nhân</h3>
<p>Edit</p>
<form action="" class="sign-form">
    <div class="group-form">
        <label for="">Fullname*</label> 
        <div class="group-form__text">
          <input type="gmail" placeholder="vidu@gmail.com" value=${user.taikhoan}>

        </div>
    </div>
<div class="group-form__two">
    <div class="group-form__one">
        <label for="">Email*</label> 
        <div class="group-form__text">
          <input type="gmail" placeholder="vidu@gmail.com" value=${user.email}>

        </div>
    </div> 
    <div class="group-form__one">
        <label for="">Mật khẩu*</label> 
        <div class="group-form__text">
          <input type="password" placeholder="vidu@gmail.com" value=${user.matkhau}>

        </div>
        </div>
</div>
    

    <div class="group-form">
        <label for="">SDT*</label> 
        <div class="group-form__text">
          <input type="text" placeholder="vidu@gmail.com" value=${user.sdt?"":"Chưa cập nhận"}>

        </div>
    </div>
    <div class="group-form">
        <label for="">Địa chỉ*</label> 
        <div class="group-form__text">
          <input type="text" placeholder="vidu@gmail.com" value=${user.diaChi?"":"Chưa cập nhận"}>

        </div>
    </div>
    <div class="form-button">
     <p>Chỉnh sửa dữ liệu</p>   
     <p>Đổi mật khẩu</p>   
     
     ${user.vaitro===1?'':'<p><a href="./admin/index.html">Trang admin</a></p>'}
    </div>
    
</form>
</div>`;
}
const dangXuat=()=>{
localStorage.removeItem('users');
window.location.href = "./sigin.html";
}
