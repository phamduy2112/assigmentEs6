function sidebar(){
    let renderHeaderAdmin=`
    <header>
    <div class="image-text">
        <span class="image">
            <img src="" alt="">
        </span>
        <div class="text header-text">
         <span class="name">Phạm Duy</span>
         <span class="profession">Zxmot</span>
        </div>

    </div>
    <i class='bx bx-chevron-right toggle'></i>
</header>
<div class="menu-bar">
    <div class="menu">
        <li class="search-box">


                <i class='bx bx-search icon'></i>
                <input type="search" placeholder="Search...">
       
        </li>
        <ul class="menu-links">
            <li class="nav-link">
                <a href="">
                    <i class='bx bx-home icon' ></i>
                    <span class="text nav-text">Trang chủ</span>
                </a>
            </li>
            <li class="nav-link">
                <a href="">
                    <i class='bx bx-home icon' ></i>
                    <span class="text nav-text">Loại hàng</span>
                </a>
            </li>
            <li class="nav-link">
                <a href="">
                    <i class='bx bx-home icon' ></i>
                    <span class="text nav-text">Sản phẩm</span>
                </a>
            </li>
            <li class="nav-link">
                <a href="">
                    <i class='bx bx-home icon' ></i>
                    <span class="text nav-text">Khách hàng</span>
                </a>
            </li>
            <li class="nav-link">
                <a href="">
                    <i class='bx bx-home icon' ></i>
                    <span class="text nav-text">Đơn hàng</span>
                </a>
            </li>
           
            <li class="nav-link">
                <a href="">
                    <i class='bx bx-log-out icon' ></i>
                    <span class="text nav-text">Thoát</span>
                </a>
            </li>
            <li class="mode">
               <div class="moon-sun">
                <i class="bx bx-moon icon moon"></i>
                <i class="bx bx-sun icon sun"></i>
               </div>
               <span class="mode-text text">Dark Mode</span>
               <div class="toggle-switch">
                <span class="switch"></span>
               </div>
            </li>

        </ul>
    </div>
</div>
    `;
    document.querySelector('#sidebar').innerHTML=renderHeaderAdmin;
    hieuUng();
}

function home(){
    let renderHomeAdmin=` <div class="header__home">
    asdasd
</div>
<div class="text body"> 
  
    <div class="table">
        <div class="text_Table">
           <p>Quản lí Loại Hàng</p>
        </div>


        <div class="table_section">
            <div class="table___title">
            <h4>Thông tin chi tiết</h4>
            <div class="add">Thêm mới</div>
            </div>
           
        <table>
            <thead>
                <tr>
                    <th>Mã</th>
                    <th>Tên</th>
                 

                    <th>Chỉnh sửa</th>
                </tr>

            </thead>
            <tbody id="danhmuc">
              
            </tbody>
        </table>
            
        </div>

    </div>

</div>`
document.querySelector("#home").innerHTML=renderHomeAdmin;
renderDM();
}

const renderDM=async ()=>{
let res= await fetch('http://localhost:3000/loai');
let loaiArray=await res.json();
renderTenLoai='';
loaiArray.forEach((item)=>{
    renderTenLoai+=`<tr>
    <td>${item.id}</td>
    <td>${item.ten_loai}</td>
    <td>
    <button class='edit'><i class='bx bxs-edit-alt'></i></button>
    <button class='trash'><i class='bx bxs-trash-alt' ></i></button>
    </td>
</tr>`

})
document.querySelector("#danhmuc").innerHTML=renderTenLoai;
}

function hieuUng(){
    const body=document.querySelector('body');
const sidebar=document.querySelector('.sidebar');
const toggle=document.querySelector('.toggle');
const searchBtn=document.querySelector('.search-box');
const modeSwitch=document.querySelector('.toggle-switch');
const modeText=document.querySelector('.mode-text');

toggle.addEventListener('click',()=>{
    sidebar.classList.toggle("close")
})
modeSwitch.addEventListener('click',()=>{
    body.classList.toggle("dark");
    if(body.classList.contains('dark')){
        modeText.innerText='Light mode';
    }else{
        modeText.innerText="Dark mode"
    }
})



}