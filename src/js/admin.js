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
    let renderHomeAdmin=
    ` <div class="header__home">
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
            <a href="./themdm.html" class="add">Thêm mới</a>
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


// Loai
const renderDM=async ()=>{
let res= await fetch('http://localhost:3000/loai');
let loaiArray=await res.json();
renderTenLoai='';
loaiArray.forEach((item)=>{
    renderTenLoai+=`
    <tr>
    <td>${item.id}</td>
    <td>${item.ten_loai}</td>
    <td>
    <a href="suaDM.html?id=${item.id}" class='edit' id="edit" ><i class='bx bxs-edit-alt'></i></a>
    <button class='trash'><i class='bx bxs-trash-alt' id="delete" data-id=${item.id} ></i></button>
    
    </td>
</tr>
`

})

document.querySelector("#danhmuc").innerHTML=renderTenLoai;
document.querySelectorAll('#delete').forEach((sp)=>sp.addEventListener('click',(e)=>{
    let id=e.target.dataset.id;
    // xoaItem('http://localhost:3000/loai',id);
    xoaItem('http://localhost:3000/loai',id);
    document.location="./danhmuc.html"
 }))
}

// them loai
const themLoai=()=>{
  const renderThemLoai= ` <div class="header__home">
    asdasd
</div>
<div class="text body"> 
  
    <div class="table">
        <div class="text_Table">
           <p>Quản lí Loại Hàng</p>
        </div>
        

        <div class="table_section">
        <form>
        <label>Tên loại
        </label>
        <br>
        <input type="text" id="tenLoai">
        </form>
        <button id="addLoai">Thêm</button>
          </div>

</div>`
document.querySelector("#home").innerHTML+=renderThemLoai;
document.querySelector('#addLoai').addEventListener('click',function(){
   let data={ten_loai:document.getElementById('tenLoai').value}
   addItem('http://localhost:3000/loai',data);
   document.location='./danhmuc.html'
});

}

const addItem=(url,loai)=>{
    let opt={method:"post",body:JSON.stringify(loai),
    headers:{'Content-Type':'application/json'}

    
}
// console.log(opt);
return fetch(`${url}`,opt)
.then(res=>res.json()).then(d=>d)
}

const xoaItem=(url,id)=>{
    let opt={method:"delete"}
    return fetch(`${url}/${id}`,opt)

}
//render sua loai
const suaLoai=async (id)=>{
    let loai=await layID("http://localhost:3000/loai",id);
    const renderThemLoai=  ` <div class="header__home">
      asdasd
  </div>
  <div class="text body"> 
    
      <div class="table">
          <div class="text_Table">
             <p>Quản lí Loại Hàng</p>
          </div>
          
  
          <div class="table_section">
          <form>
          <label>Tên loại
          </label>
          <br>
          <input type="text" id="tenLoai" value=${loai.ten_loai}>
          </form>
          <button id="suaLoai">Sửa</button>
            </div>
  
  </div>`
  document.querySelector("#home").innerHTML+=renderThemLoai;
  document.querySelector('#suaLoai').addEventListener('click',function(){
     let data={id:id,ten_loai:document.getElementById('tenLoai').value}
     suaItem('http://localhost:3000/loai',id,data);
     document.location='./danhmuc.html';
  });
  
  }
//  lấy id
const layID=(url,id)=>{
    return fetch(`${url}/${id}`).then(res=>res.json().then(d=>d))
}
// sua loai
const suaItem=(url,id,item)=>{
    let opt={method:"put",body:JSON.stringify(item),
            headers:{'Content-type':'application/json'}
}
    return fetch(`${url}/${id}`,opt).then(res=>res.json()).then(d=>d)
}

// SP
const homeSP=()=>{
    let renderHomeAdmin=
    ` <div class="header__home">
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
            <a href="./themSP.html" class="add">Thêm mới</a>
            </div>
           
        <table>
            <thead>
                <tr>
                    <th>Mã</th>
                    <th>Tên</th>
                    <th>Hình</th>
                    <th>Giá</th>
                    <th>Loại</th>
                 

                    <th>Chỉnh sửa</th>
                </tr>

            </thead>
            <tbody id="sanpham">
          
         
            </tbody>
        </table>
            
        </div>

    </div>

</div>`
document.querySelector("#home").innerHTML=renderHomeAdmin;
renderSP()
}
const renderSP=async ()=>{
const res=await fetch('http://localhost:3000/sanpham');
const sanPham=await res.json();
const resLoai=await fetch('http://localhost:3000/loai');
const loai=await resLoai.json();

let renderS=``;

sanPham.forEach((sp)=>{
    let renderloai=  ``;
    loai.forEach((loai)=>{
       
        if(sp.id_loai==loai.id){
            renderloai=loai.ten_loai;
        }
    })
    renderS+=
    `
    <tr>
    <td>1</td>
    <td>${sp.ten_sp}</td>
    <td><img src=${sp.hinh} width='75px'></td>
    <td>${sp.gia}</td>
    <td>${renderloai}</td>
    <td>
    <a href="suaSP.html?id=${sp.id}" class='edit' id="edit" ><i class='bx bxs-edit-alt'></i></a>
    <button class='trash'><i class='bx bxs-trash-alt' id="delete" data-id=${sp.id} ></i></button>
    
    </td>
    </tr> 
    `
})
document.querySelector("#sanpham").innerHTML=renderS;
document.querySelectorAll('#delete').forEach((sp)=>sp.addEventListener('click',(e)=>{
    let id=e.target.dataset.id;
    // console.log(id);
    xoaItem('http://localhost:3000/sanpham',id);
    document.location=`./sanpham.html`
}))
}

// form them sp
const themSP=async()=>{
    const res=await fetch('http://localhost:3000/loai');
    const loai=await res.json();
  
  let select=``;
  loai.forEach(sp=>{
    select+=`
    
    <option value=${sp.id}>${sp.ten_loai}</option>
 `

  })
    // console.log(select);
    const renderThemSP=
      ` <div class="header__home">
    asdasd
</div>
<div class="text body"> 
  
    <div class="table">
        <div class="text_Table">
           <p>Quản lí Loại Hàng</p>
        </div>
        

        <div class="table_section">
        <form>
        <label>Tên Sản phẩm
        </label>
        <br>
        <input type="text" id="tenSP">
        <br>
        <label>Hình
        </label>
        <br>
        <input type="text" id="hinhSP">
        <br>
        <label>Giá
        </label>
        <br>
        <input type="text" id="giaSP">
        <br>
        <label>Loại
        </label>
        <br>
        <select name="" id="idLoai">
  ${select}
  </select>
       
        <br>
        </form>
        <button id="addSP">Thêm</button>
          </div>

</div>`

document.querySelector("#home").innerHTML+=renderThemSP; 
document.querySelector('#addSP').addEventListener('click',()=>{
    let data={
        ten_sp:document.querySelector('#tenSP').value,
        gia:document.querySelector('#giaSP').value,
        hinh:document.querySelector('#hinhSP').value,
        id_loai:document.querySelector('#idLoai').value
    }
    addItem('http://localhost:3000/sanpham',data)
    document.location="./sanpham.html";
})
}
// form suaSP
const suaSP=async (id)=>{

    let loai=await layID("http://localhost:3000/sanpham",id);
    console.log(loai);
    const res=await fetch('http://localhost:3000/loai');
    const tenLoai=await res.json();
  
  let select=``;
  tenLoai.forEach(sp=>{
    select+=`
    
    <option value=${sp.id}>${sp.ten_loai}</option>
 `

  })
    const renderThemSP= ` <div class="header__home">
    asdasd
</div>
<div class="text body"> 
  
    <div class="table">
        <div class="text_Table">
           <p>Quản lí Loại Hàng</p>
        </div>
        

        <div class="table_section">
        <form>
        <label>Tên Sản phẩm
        </label>
        <br>
        <input type="text" id="tenSP" value=${loai.ten_sp}>
        <br>
        <label>Hình
        </label>
        <br>
        <input type="text" id="hinhSP" value=${loai.hinh}>
        <br>
        <label>Giá
        </label>
        <br>
        <input type="text" id="giaSP" value="${loai.gia}">
        <br>
        <label>Loại
        </label>
        <br>
        <select name="" id="idLoai">
        ${select}
        </select>
       
        <br>
        </form>
        <button id="suaItem">Thêm</button>
          </div>

</div>`
document.querySelector("#home").innerHTML+=renderThemSP;
document.querySelector('#suaItem').addEventListener('click',function(){
   let data={
    ten_sp:document.querySelector('#tenSP').value,
    gia:document.querySelector('#giaSP').value,
    hinh:document.querySelector('#hinhSP').value,
    id_loai:document.querySelector('#idLoai').value
}
suaItem('http://localhost:3000/sanpham',id,data);
   document.location='./sanpham.html'
});

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


// 
//don hang
const homeDonHang=()=>{
    let renderHomeAdmin=
    ` <div class="header__home">
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
            <a href="./themSP.html" class="add">Thêm mới</a>
            </div>
           
        <table>
            <thead>
                <tr>
                   
                    <th>Mã</th>
                    <th>Tên</th>
                    <th>SDT</th>
                    <th>Địa chỉ</th>
                    <th>Thanh toán</th>
                    <th>Trạng thái</th>
                    <th>Chỉnh sửa</th>
                </tr>

            </thead>
            <tbody id="sanpham">
           
         
            </tbody>
        </table>
            
        </div>

    </div>

</div>`
document.querySelector("#home").innerHTML=renderHomeAdmin;
renderDH()
}
const renderDH=async ()=>{
let resp=await fetch('http://localhost:3000/donHang');
let resDH=await resp.json();
let renderDonHang=``;
resDH.forEach((sp)=>{
    renderDonHang+=` <tr>
            
    <td>${sp.id}</td>
    <td>${sp.hoTen}</td>
    <td>${sp.Sdt}</td>
    <td>${sp.diaChi}</td>
    <td>${sp.thanhToan}</td>
    <td>${sp.trangThai}</td>
    <td>
    
    <a href="donhangchitiet.html?id=${sp.id}">Xem chi tiết</a>
    <a href="">Chỉnh sữa</a>
    
    </td>
   
    </tr>`
})
document.querySelector('#sanpham').innerHTML=renderDonHang;
}
const homeDonHangCT=(id)=>{
    let renderHomeAdmin=
    ` <div class="header__home">
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
            <a href="./themSP.html" class="add">Thêm mới</a>
            </div>
           
        <table>
            <thead>
                <tr>
                   
                    <th>Mã DH</th>
                    <th>Tên</th>
                    <th>Hình</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Thành tiền</th>
                   
                </tr>

            </thead>
            <tbody id="sanpham">
            
                    
                    
            </tbody>
        </table>
            
        </div>

    </div>

</div>`
document.querySelector("#home").innerHTML=renderHomeAdmin;
renderDonHangCT(id);
}
const renderDonHangCT=async (id)=>{
    let resp=await fetch(`http://localhost:3000/donHangChiTiet?id_dh=${id}`);
let resDH=await resp.json();
let renderDonHang=``;
resDH.forEach((sp)=>{
    renderDonHang+=` <tr>
            
    <td>${sp.id_dh}</td>
    <td>${sp.ten_sp}</td>
    <td>
    <img src= ${sp.hinh} width="50px">
   
    </td>
    <td>${sp.gia}</td>
    <td>${sp.so_luong}</td>
    <td>${sp.gia *sp.so_luong}</td>
    
   
    </tr>`
})
document.querySelector('#sanpham').innerHTML=renderDonHang;

}