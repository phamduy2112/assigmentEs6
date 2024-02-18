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
                <a href="index.html">
                    <i class='bx bx-home icon' ></i>
                    <span class="text nav-text">Trang chủ</span>
                </a>
            </li>
            <li class="nav-link">
                <a href="danhmuc.html">
                    <i class='bx bx-home icon' ></i>
                    <span class="text nav-text">Loại hàng</span>
                </a>
            </li>
            <li class="nav-link">
                <a href="sanpham.html">
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
                <a href="donhang.html">
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
 async function homeIndex(){
    const numLoai = await getNumber('http://localhost:3000/loai'); // Wait for the number to be retrieved
    const numSP=await getNumber('http://localhost:3000/sanpham');
    const numKhachHang=await getNumber('http://localhost:3000/users');
    const numDonHang=await getNumber('http://localhost:3000/donHang');
    let renderHomeIndex=`  <div class="header__home">
    asdasd
</div>
<div class="text body"> 
<div class="home-one">
<div class="border-home">
    <div class="border-home__bg orange">
      <p>Loai: <span>${numLoai}</span></p>
    </div>
</div>
<div class="border-home">
    <div class="border-home__bg pink">
      <p>San Pham: <span>${numSP}</span></p>
    </div>
</div>
<div class="border-home">
    <div class="border-home__bg green">
      <p>Khách hàng: <span>${numKhachHang}</span></p>
    </div>
</div>
<div class="border-home">
    <div class="border-home__bg purpe">
      <p>Đơn hàng: <span>${numDonHang}</span></p>
    </div>
</div>



</div>
<div class="home-two ">
<div class="home-box">
    <div class="home-item">

        <h3>Khách hàng</h3>
        <div class="home-item__b">
            <div class="home-item-left">
                    <p>Số lượng khách hàng đăng kí :<span>38</span></p>
        <p>Số lượng khách hàng đã mua hàng :<span>38</span></p>

            </div>

        <i class='bx bx-user'></i>        
        </div>
       
        </div>
    <div class="home-item" id="spHot">
        <h3>Những sản phẩm hot</h3>
      
    </div>
    <div class="home-item">

        <canvas id="myChart" style="width:100%;max-width:600px"></canvas>

    </div>
</div>
</div>
<div class="home-two">
<div class="home-flex">
      <div class="home-table">
    <div class="table">
        <div class="text_Table">
           <p>Khách hàng đăng kí</p>
        </div>


        <div class="table_section">
            <div class="table___title">
            <h4>Thông tin chi tiết</h4>
            <a href="./themdm.html" class="add">Xem chi tiết</a>
            </div>
           
        <table>
            <thead>
                <tr>
                    <th>Mã</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Ngày</th>
                    
                </tr>

            </thead>
            <tbody id="khachhang">
  
            </tr>
          


</tbody>
        </table>
            
        </div>

    </div>
</div>
<div class="home-table">
    <div class="table">
        <div class="text_Table">
           <p>Quản lí Đơn Hàng</p>
        </div>


        <div class="table_section">
            <div class="table___title">
            <h4>Thông tin chi tiết</h4>
            <a href="./themdm.html" class="add">Xem chi tiết</a>
            </div>
           
        <table>
            <thead>
                <tr>
                    <th>Mã</th>
                    <th>Trạng Thái</th>
                    
                    <th>Ngày</th>
                    <th>Chỉnh sữa</th>
                </tr>

            </thead>
            <tbody id="donHangMoi">
   

</tbody>
        </table>
            
        </div>

    </div>
</div> 
</div>

</div>
</div>`

document.querySelector("#homeImdex").innerHTML=renderHomeIndex;
khachHangDangKi()
spHot()
donHangMoi();
}
// 3 khach hang dang ki mới
async function khachHangDangKi (){
    const resp=await fetch('http://localhost:3000/users?_limit=3&_sort=-id');
    const khachHang=await resp.json();
    khachHang.map((item)=>{
        return document.querySelector('#khachhang').innerHTML+=`
        <tr>
        <td>1</td>
        <td>${item.fullName}</td>
        <td>${item.email}</td>
    
        <td>${item.ngay}</td> 
   
        </tr>
        `
    })
}
// sp hot
async function spHot(){
    const resp=await fetch('http://localhost:3000/sanpham?_limit=10');
    const sp=await resp.json();
    sp.map((item)=>{
        if(item.hot>0){
              return document.querySelector('#spHot').innerHTML+=`
        <div class="item_sp">
        <img src="https://product.hstatic.net/1000096703/product/1_d4c95fe0dc8a47e28b0b3d3083498997_master.jpg" alt="" width="50px">
        <div class="title_sp">
            <p>${item.ten_sp}
            </p>
            <p>${(item.gia)}</p>
        </div>
        <div class="soluong">
            <p>${item.hot}</p>
            <p>Người mua</p>
        </div>
    </div>
        `  
        }
    
    })
}
// đơn hàng mới nhất
const donHangMoi=()=>{
    let baDonHang=new Promise((donHang,loi)=>{
       donHang();
    })
    baDonHang.then(
       async function donHang(){
            const resp=await fetch('http://localhost:3000/donHang?_limit=3&_sort=-id');
            const donHangMoi=await resp.json();
            donHangMoi.map((item)=>{
                return document.querySelector('#donHangMoi').innerHTML+=`
                <tr>
                <td>${item.id}</td>
                <td>${item.trangThai}</td>
                <td>${item.ngay}</td>
            
                <td>
                <a href="donhangchitiet.html?id=${item.id}">Xem chi tiết</a>
    <a href="suadonhang.html?id=${item.id}"">Chỉnh sữa</a>
                </td> 
           
                </tr>
                `
            })

        }
    )
}
const getNumber=async (link)=>{   
     const resp=await fetch(`${link}`);
        const resNum=await resp.json();
        console.log(resNum.length);
        return resNum.length
  
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

const thongbao=(title)=>{
document.querySelector('#home').innerHTML+=`

<div class="thongbao">
<div class="thongbao-bg">
    <div class="title">
        ${title}
    </div>
</div>
</div>
`
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
    let chuyendm=setTimeout(()=>{
        document.location='./danhmuc.html'
       
    },1000)
    if(chuyendm){
        setTimeout(()=>{
            thongbao('Xoá danh mục thành công !');
        },0)
    }
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
        <div class="form-input">
        <label>Tên loại
        </label>
       
        <input type="text" id="tenLoai">
        </div>
       
        </form>
        <button id="addLoai" class="btn">Thêm</button>
          </div>

</div>`
document.querySelector("#home").innerHTML+=renderThemLoai;
document.querySelector('#addLoai').addEventListener('click',function(){
   let data={ten_loai:document.getElementById('tenLoai').value}
   addItem('http://localhost:3000/loai',data);
    let chuyendm=setTimeout(()=>{
        document.location='./danhmuc.html'
        
        
    },1000)
    if(chuyendm){
        setTimeout(()=>{
            thongbao('Thêm danh mục thành công !');
        },0)
    }
   
});

}

const addItem=async (url,loai)=>{
    let opt={method:"post",body:JSON.stringify(loai),
    headers:{'Content-Type':'application/json'}

    
}

    const res = await fetch(`${url}`, opt);
    const d = await res.json();
    console.log(d);
    return d;
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
        <div class="form-input">
        <label>Tên loại
        </label>
       
        <input type="text" id="tenLoai" value=${loai.ten_loai}>
        </div>
       
        </form>
        <button id="suaLoai" class="btn">Sửa</button>
            </div>
  
  </div>`
  document.querySelector("#home").innerHTML+=renderThemLoai;
  document.querySelector('#suaLoai').addEventListener('click',function(){
     let data={id:id,ten_loai:document.getElementById('tenLoai').value}
     suaItem('http://localhost:3000/loai',id,data);
    let chuyendm= setTimeout(()=>{
        document.location='./danhmuc.html'
    },1000)
    if(chuyendm){
        setTimeout(()=>{
            thongbao('Sửa danh mục thành công !');
        },0)
    }
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
const res=await fetch('http://localhost:3000/sanpham?_sort=-id');
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
    let chuyendm= setTimeout(()=>{
        document.location='./sanpham.html'
    },1000)
    if(chuyendm){
        setTimeout(()=>{
            thongbao('Xoá sản phẩm thành công !');
        },0)
    }
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
       
        <div class="form-input">
        <label>Tên Sản Phẩm
        </label>
       
        <input type="text" id="tenSP">
        </div>
        <div class="form-input">
        <label> Hình Sản Phẩm
        </label>
       
        <input type="text" id="hinhSP">
        </div>
        <div class="form-input">
        <label>Giá Sản Phẩm
        </label>
       
        <input type="text" id="giaSP">
        </div>
       
       
        <label>Loại
        </label>
        <br>
        <select name="" id="idLoai" style="margin-bottom:10px; width:10%">
  ${select}
  </select>
       
        <br>
        </form>
        <button id="addSP" class="btn">Thêm</button>
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
    let chuyendm= setTimeout(()=>{
        document.location='./sanpham.html'
    },1000)
    if(chuyendm){
        setTimeout(()=>{
            thongbao('Thêm sản phẩm thành công !');
        },0)
    }
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
        <div class="form-input">
        <label>Tên Sản Phẩm
        </label>
       
        <input type="text" id="tenSP" value=${loai.ten_sp}>
        </div>
        <div class="form-input">
        <label>Tên Sản Phẩm
        </label>
       
        <input type="text" id="hinhSP" value=${loai.hinh}>
        </div>
        <div class="form-input">
        <label>Tên Sản Phẩm
        </label>
       
        <input type="text" id="giaSP" value="${loai.gia}">
        </div>
     
       
       
        <label>Loại
        </label>
        <br>
        <select name="" id="idLoai" style="margin-bottom:10px; width:10%">
        ${select}
        </select>
       
        <br>
        </form>
        <button id="suaItem" class="btn">Thêm</button>
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
let chuyendm= setTimeout(()=>{
    document.location='./sanpham.html'
},1000)
if(chuyendm){
    setTimeout(()=>{
        thongbao('Sửa sản phẩm thành công !');
    },0)
}
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
    let trangThaiHang= sp.trangThai!=='Đang giao' ? '' :`    <a href="suadonhang.html?id=${sp.id}"">Chỉnh sữa</a>
    `
    renderDonHang+=` <tr>
            
    <td>${sp.id}</td>
    <td>${sp.hoTen}</td>
    <td>${sp.Sdt}</td>
    <td>${sp.diaChi}</td>
    <td>${sp.thanhToan}</td>
    <td>${sp.trangThai}</td>
    <td>
    
    <a href="donhangchitiet.html?id=${sp.id}">Xem chi tiết</a>
    ${trangThaiHang}
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
const suaDH=async (id)=>{
    let donhang=await layID("http://localhost:3000/donHang",id);
  
const renderSuaDH= ` <div class="header__home">
    asdasd
</div>
<div class="text body"> 
  
    <div class="table">
        <div class="text_Table">
           <p>Quản lí Loại Hàng</p>
        </div>
        

        <div class="table_section">
        <form>
        
        <label>Loại
        </label>
        <br>
        <select name="" id="idTrangThai" style="margin-bottom:10px; width:10%">
            <option value="${donhang.trangThai}">${donhang.trangThai}</option>
            <option value="Thành công">Thành công</option>
            <option value="Không thành công">Không thành công</option>
        </select>
       
        <br>
        </form>
        <button id="suaItem" class="btn">Sửa</button>
          </div>

</div>`
document.querySelector("#home").innerHTML+=renderSuaDH;
document.querySelector('#suaItem').addEventListener('click',function(){
    let data={
  ...donhang,
     trangThai:document.querySelector('#idTrangThai').value
        
    }

 suaItem('http://localhost:3000/donHang',id,data);
 let chuyendm= setTimeout(()=>{
     document.location='./donhang.html'
 },1000)
 if(chuyendm){
     setTimeout(()=>{
         thongbao('Sửa đơn hàng thành công !');
     },0)
 }
 });
}