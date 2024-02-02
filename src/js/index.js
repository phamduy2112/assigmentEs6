// render menu
const menuList = async (loai = 1) => {
  let menuItem =
    loai > 1 ?
    `<li><a href="index.html" class="active">Trang chủ</a></li>` :
    ``;
  const res = await fetch("http://localhost:3000/loai");
  const menu = await res.json();
  menu.forEach((item) => {
    menuItem += `<li><a href="products.html?id=${item.id}">${item.ten_loai}</a></li>`;
  });

  if (loai > 1) {
    menuItem += `<li><a href="">Liên hệ</a></li>`;
    menuItem += `<li><a href="">Blog</a></li>`;
    document.querySelector(".header-third__menu ul").innerHTML = menuItem;
  } else {
    document.querySelector("#loai_id").innerHTML = menuItem;
  }
};

function header() {
  // renderTenDangNhap=``;
  if (localStorage.getItem("users")) {
    user = JSON.parse(localStorage.getItem("users"));

    renderTenDangNhap = `
        <a href="./information.html" class="header-first__item"> ${user.taikhoan} </a>
     
        `;
    // console.log(renderTenDangNhap);
  } else {
    renderTenDangNhap = `<a href="./sigin.html" class="header-first__item">Đăng nhập ngay</a>`;
  }

  const headerRender = `  <div class="desktop">
    <div class="header-first">

        <div class="header__box w-70">
            <div class="header-first__left">
            <div class="header-first__item">
                <i class="fa-solid fa-phone"></i>:
                0334491141
            </div>
            <div class="header-first__item">
                <i class="fa-solid fa-envelope"></i>:
                duyp7484@gmail.com
            </div>
        </div>
        <div class="header-first__right">
            

            ${renderTenDangNhap}
            <a href="" class="header-first__item">
               Những câu hỏi
            </a>
        </div>  
        </div>
      
    </div>
    <div class="header-second">
        <div class="header__box w-70">
          <div class="header-second__logo">NikeD</div>  
        <form action="" method="post" class="header-group">
            <div class="group-form">
                  <input type="text">
            <i class="fa fa-search" aria-hidden="true"></i>
            </div>    
          
        </form>  
        <div class="header-second__icons">
            <a href="/sign/sigin.html"><i class="fa fa-user" aria-hidden="true"></i></a>
          <a href=""><i class="fa-regular fa-heart"></i></a>
            <a href="" id="cart"><i class="fa-solid fa-cart-shopping">
           </i> <span id=numberCart>${numGioHang()}</span></a>  
            
            
        </div>
    </div>
      
    </div>
    <div class="header-third">
        <div class="header__box-d w-70">
            <div class="header-third__danhmuc">
                <i class="fa fa-bars" aria-hidden="true"></i>
                Tất cả danh mục
            </div>
             <nav class="header-third__menu">
                <ul>
                    ${menuList(2)}

                </ul>
        </nav>
        <div class="giamgia">
            Giảm giá 20% khi mua lần đầu
        </div>
    </div>
       
        
    </div> 
    <div class="header-cart active" id="header-cart">
       
    </div>
    </div>`;

  document.querySelector("#header").innerHTML = headerRender;
  hienGioHangheader();
  clickHandle();
}

function hienGioHangheader() {
  renderGiohang = ` <div class="header-cart__bg">
  <div class="header-cart-title">
      <h2>Giỏ hàng của bạn</h2>
  </div>
  <div id="cartList">
      ${renderCart()}
  </div>


  <div class="cart-botttom">
    <div  id="cartBottom__total">
      ${tongCart()}
    </div>
      <div class="cart-button">
            <a href="">Mua ngay</a>
      <a href="giohang.html">Xem Giỏ Hàng</a>  
      </div>
  
  </div>
</div>`;
  document.querySelector("#header-cart").innerHTML = renderGiohang;
}

function clickHandle() {
  const iconCart = document.getElementById("cart");
  const cart = document.getElementById("header-cart");
  const body = document.querySelector("body");
  iconCart.addEventListener("click", (e) => {
    e.preventDefault();
    cart.classList.remove("active");
  });
  document.body.addEventListener("click", function (event) {
    if (event.target.matches("#header-cart")) {
      // event.target.parentNode.removeChild(event.target);
      event.target.classList.add("active");
    }
  });
}

function footer() {
  const footerRender = ` 
    <div class="footer__first">
        <div class="footer__dangkinhantin">
            <form action="" method="post">
                <h4>
                    Đăng ký nhận bản tin của chúng tôi để nhận các tin tức,
                    ưu đãi đặc biệt và các khuyến mãi độc quyền
                </h4>
                <div class="form-group">
                        <input type="text" placeholder="Mời bạn nhập email">
                <button>Gửi</button> 
                </div>
           
            </form>
        </div>
    </div>
    <div class="footer__second">
        <div class="footer__top">
            <div class="footer__box">
                <div class="footer__item">
                <a href="" class="">Niked VN</a>
                <ul>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                </ul>
            </div>
            <div class="footer__item">
                <a href="" class="">CHÍNH SÁCH</a>
                <ul>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                </ul>
            </div>
            <div class="footer__item">
                <a href="" class="">HỖ TRỢ KHÁCH HÀNG</a>
                <ul>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                </ul>
            </div>
            <div class="footer__item">
                <a href="" class="">THÔNG TIN CỬA HÀNG</a>
                <ul>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Giới thiệu</a></li>
                </ul>
            </div>  
            <div class="footer__item">
                <a href="" class="">Liên hệ với chúng tôi</a>
                
            </div>  
            </div>
          
        </div>
        <hr>
      <div class="footer__bottom">
        @Thiết kể bởi zxmot
      </div>
    </div>
`;
  document.querySelector(".footer").innerHTML = footerRender;
}
async function renderSPBT(
  number = 6,
  title = "Những sản phẩm dành cho bạn",
  trangThai = 1
) {
  const res = await fetch("http://localhost:3000/sanpham");
  const sanPham = await res.json();

  let renderSP = ``;

  const sanPhamMuoiSau = sanPham.filter((item, index) => index < number);
  console.log(sanPhamMuoiSau);

  let hot = trangThai == 1 ? "" : "slider__item";
  console.log(hot);
  sanPhamMuoiSau.forEach((item) => (renderSP += rendersanPham(item, hot)));

  let render =
    trangThai == 1 ?
    document.querySelector("#normalSP") :
    document.querySelector("#product__hot");
  render.innerHTML = `
<div class="title">
    <h2>${title}</h2>
</div>
<div class=${trangThai == 1 ? "products__normal" : "products"}>
    <div class=${trangThai == 1 ? "product__boxs" : "product__box"}>
        ${renderSP}
    </div>
    ${
      trangThai == 1
        ? ``
        : `
    <div class="product__chuyenqua">
    <i class="fa-solid fa-angle-left next"></i>
    <i class="fa-solid fa-angle-right prev"></i>
</div> `
    }
    </div>


 `;
  animationHot();
}

function animationHot() {
  const sliderNext = document.querySelector(".next");
  const sliderPrev = document.querySelector(".prev");
  const sliderItem = document.querySelectorAll("#slider__item");
  const sliderLength = sliderItem.length;
  var index = 6;
  var giaTri = 0;
  const nextslider = sliderNext.addEventListener("click", function () {
    handleChangeslide(1);
  });
  const prevslider = sliderPrev.addEventListener("click", function () {
    handleChangeslide(2);
  });

  function handleChangeslide(number) {
    if (number === 1) {
      index--;
      giaTri += 1 * 220;
      if (index <= 5) {
        giaTri = 0;
        index = 6;
      }
      sliderItem.forEach((item) => {
        item.style = `transform:translateX(${giaTri}px)`;
      });
      console.log("prev");
    } else {
      index++;
      giaTri += -1 * 220;
      if (index > sliderLength) {
        index = 6;
        giaTri = 0;
      }
      sliderItem.forEach((item) => {
        item.style = `transform:translateX(${giaTri}px)`;
      });
      console.log("next");
    }
  }
}
//
rendersanPham = (sp, id = "") => {
  let {
    id: idsp,
    ten_sp,
    hinh,
    gia,
    ngay
  } = sp;

  return `<div class="product__item" id=${id}>
  <a href="productct.html?id=${idsp}">
  <div class="product__image">
        <img src=${hinh} alt="">
        <div class="buttons">
            <a href="">Xem Thêm</a>
            <a href="#" onclick="addSP(${idsp})">Thêm giỏ hàng</a>
        </div>
    </div>
    <div class="product__title">
        <h3>${ten_sp}</h3>
        <p class="price">${Number(gia).toLocaleString("vi")}đ</p>
    </div>
    
    </a>
    
</div>`;
};

const addSP = async (id, soLuong = 1) => {
  const res = await fetch(`http://localhost:3000/sanpham?id=${id}`);
  const sanPham = await res.json();

  sp = sanPham.find((sp) => sp.id == id);

  sp["soLuong"] = soLuong;
  cart_local = localStorage.getItem("giohang");
  console.log(cart_local);
  let cart = cart_local == null ? [] : JSON.parse(cart_local);
  let index = cart.findIndex((sp) => sp.id == id);
  if (index >= 0) cart[index]["soLuong"] += soLuong;
  else cart.push(sp);

  localStorage.setItem("giohang", JSON.stringify(cart));
  document.querySelector("#cartList").innerHTML = renderCart(cart);
  document.querySelector("#cartBottom__total").innerHTML = tongCart(cart);
  document.querySelector("#numberCart").innerHTML = numGioHang(cart);

};
const thayDoiSL = (id, num) => {
  let cart = JSON.parse(localStorage.getItem("giohang"));
  // console.log(id);
  cart.map((item) => {
    console.log(item);
    if (num === 1) {
      if (item.id == id) {
        item.soLuong = item.soLuong - 1;
      }
    } else {
      if (item.id == id) {
        item.soLuong = item.soLuong + 1;
      }
    }

    return item;
  });
  let updatedCart = cart.filter((item) => item.soLuong > 0);

  console.log(updatedCart);
  localStorage.setItem("giohang", JSON.stringify(updatedCart));
  // Gọi hàm renderCart() để cập nhật giao diện
  document.querySelector("#cartList").innerHTML = renderCart(cart);
  const listCart = document.querySelector("#listCart");
  if (listCart) {
    document.querySelector("#listCart").innerHTML = renderPageCart(cart);
    document.querySelector("#cartBottom__totals").innerHTML = tongCartPage(cart);

  }

  document.querySelector("#cartBottom__total").innerHTML = tongCart(cart);
  document.querySelector("#numberCart").innerHTML = numGioHang(cart);

};
const renderPageCart = (num = 1, cart) => {

  cart = JSON.parse(localStorage.getItem("giohang"));
  let renderHtml = ``;

  cart.forEach((item) => {

    renderHtml += `
    <td class="product___cart">
    <div class="product__cart">
      <img src=${item.hinh} alt="" />
      <div class="cart__bottom">
        <div class="product__title">
        ${item.ten_sp}
        </div>
        <div class="product__money">${item.gia}</div>
      </div>
    </div>
  </td>
  <td class="product_gia">${item.gia}</td>
  <td class="soluong">
    <div class="d-flex">
         <div class="minus">
         <i class="fa fa-minus" aria-hidden="true" onclick="thayDoiSL(${
          item.id
        },${1})"></i>
         </div>
    <div class="numbers">${item.soLuong}</div>
    <div class="plus">
    <i class="fa-solid fa-plus" onclick="thayDoiSL(${
      item.id
    },${2})"></i>
    </div>   
    </div>

  </td>
  <td class="thanhtien">${item.gia*item.soLuong}</td>
  <td><i class="fa fa-trash iconss" aria-hidden="true" onclick="xoaIcoin(${item.id})"></i></td>
</tr>



    
  `

  });


  return renderHtml;
};

const renderCart = (num = 1, cart) => {

  cart = JSON.parse(localStorage.getItem("giohang"));

  let renderHtml = ``;

  cart.forEach((item) => {

    renderHtml += `
   
      <div class="cart-item">
   <img src=${item.hinh} alt="" width="">
   <div class="cart-title">
       <h2>${item.ten_sp}</h2>
       <div class="soluong">
           <div class="d-flex">
               <div class="minus">
                  <i class="fa fa-minus" aria-hidden="true" onclick="thayDoiSL(${
                    item.id
                  },${1})"></i>
               </div>
          <div class="numbers">${item.soLuong}</div>
          <div class="plus">
              <i class="fa-solid fa-plus" onclick="thayDoiSL(${
                item.id
              },${2})"></i>
          </div>   
          </div>
       </div>
       <div class="product__money"><span></span>${item.gia}</div>
   </div>
   
</div>
    
  `

  });


  return renderHtml;
};

const tongCart = (page = 1, cart) => {
  cart = JSON.parse(localStorage.getItem("giohang"));
  let tongSoLuong = 0;
  let tongSoTien = 0;
  cart.forEach((item) => {
    tongSoLuong += item["soLuong"];
    tongSoTien += item["soLuong"] * item["gia"];
  });

  return `<div class="layout1">
    <span>So Luong:</span>${tongSoLuong} <br>
    <span>Tổng:</span>${tongSoTien}
  </div>`;




};
const tongCartPage = (page = 1, cart) => {
  cart = JSON.parse(localStorage.getItem("giohang"));
  let tongSoLuong = 0;
  let tongSoTien = 0;
  cart.forEach((item) => {
    tongSoLuong += item["soLuong"];
    tongSoTien += item["soLuong"] * item["gia"];
  });
  return ` <div class="cart-right__box">
  <h3>Đơn hàng của bạn</h3>

  <div class="cart-right__item">
    <p><span>Số lượng:</span>${tongSoLuong}</p>
    <p><span>Thành tiền:</span>${tongSoTien}</p>
  </div>

  <hr />
  <div class="cart-right__item">
    <form action="" class="">
        <div class="form-group">
         <input type="text" placeholder="Ma giam gia">
            <button class="deal">Xác nhận</button>
        </div>
        
    </form>
    <p><span>Ma giam gia:</span>0</p>
    <p><span>Tien Ship:</span>0</p>
  </div>
  <hr>
  <div class="cart-right__item">
    <p><span>Tổng:</span>${tongSoTien}</p>
  </div>
  <div class="cart-right__item">
  <a href="./giohangchitiet.html">
  <button class="btn-cart">Mua ngay</button>
  </a>
    
  </div>
  
</div>
`

};
const numGioHang = () => {
  cart = JSON.parse(localStorage.getItem("giohang"));
  renderNum = `${cart==undefined ? "0":cart.length}`;
  return renderNum;
}
const xoaIcoin = (id) => {
  let cart = JSON.parse(localStorage.getItem("giohang"));
  let updateCart = cart.filter((sp) => !(sp.id == id));
  localStorage.setItem("giohang", JSON.stringify(updateCart));
  document.querySelector("#cartList").innerHTML = renderCart(cart);
  const listCart = document.querySelector("#listCart");
  if (listCart) {
    document.querySelector("#listCart").innerHTML = renderPageCart(cart);
    document.querySelector("#cartBottom__totals").innerHTML = tongCartPage(cart);

  }

  document.querySelector("#cartBottom__total").innerHTML = tongCart(cart);
  document.querySelector("#numberCart").innerHTML = numGioHang(cart);

}
// giỏ hàng
const pageGiohang = () => {


  renderPage =
    `<div class="cart">
<div class="cart-title">
  <h3>Shopping cart</h3>
  <p>${numGioHang()}</p>
</div>
<div class="cart-box">
  <div class="cart-left">
    <table>
      <thead>
        <tr>
          <th>Sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="listCart">
      ${renderPageCart()}

     </tbody>
        
    </table>
  </div>
  <div class="cart-right" id="cartBottom__totals">
    ${tongCartPage()}
  </div>
</div>
</div>`

  document.querySelector("#pageCart").innerHTML = renderPage;
}
// render gio hang chi tiet
const renderGiohangCT = () => {
  const gioHangCT =
    `<div class="cart-chitiet__box">
  <div class="cart-chitiet__left">
      <div class="cart-chitiet__title">
          <h3>Thông tin thanh toán</h3>
      </div>
      <form action="" method="post" class="sign-form">
          <div class="group-form__two">
              <div class="group-form__one">
                  <label for="">Ho ten*</label> 
                  <div class="group-form__text">
                    <input type="text" placeholder="Họ Tên" id="hoTen">

                  </div>
              </div> 
              <div class="group-form__one">
                  <label for="">Số điện thoại*</label> 
                  <div class="group-form__text">
                    <input type="number" placeholder="vidu@gmail.com" id="sdt">

                  </div>
                  </div>
          </div>
          <div class="group-form__two">
              <div class="group-form__one">
                  <label for="">Địa chỉ*</label> 
                  <div class="group-form__text">
                    <input type="text" placeholder="vidu@gmail.com" id="diaChi">

                  </div>
              </div> 
              <div class="group-form__one">
                  <label for="">Email*</label> 
                  <div class="group-form__text">
                    <input type="gmail" placeholder="vidu@gmail.com" id="email">

                  </div>
                  </div>
          </div>
         
      </form>
      <div class="cart-chitiet__thanhtoan">
          <h4>Bạn muốn thanh toán?</h4>
          <div class="group-form__radio">
              <input type="radio" name="asd" id="value1" checked value="Thanh toán khi giao hàng">
              <label for="value1">Thanh toán khi giao hàng</label>
          </div>
          <div class="group-form__radio">
              <input type="radio" name="asd" id="value1" value="Thanh toán thẻ ngân hàng">
              <label for="value">Thanh toán thẻ ngân hàng</label>
          </div>
      </div>
      <!-- <div class="cart-chitiet__nganhang">

      </div> -->
      <div class="buttons">
          <button class="quaylai">Quay lại</button>
          <button class="xacnhan" onclick="guiThanhToan()">Xác nhận</button>
      </div>
  </div>
  <div class="cart-chitiet__right">
   
          <h3>Giỏ hàng của bạn</h3>

      <div class="cart-chitiet__product">
          <div class="cart-chitiet__box">
               <img src="/src/img/ao/ao1.webp" alt="">
          <div class="cart-chitiet__bottom">

              <div class="cart-chitiet_title">
                  Lorem ipsum dolor sit amet asd. 
              </div>
             
              <div class="cart-chitiet__soluong">
                SL:  1
              </div>
              <div class="cart-chitiet__price">
                  3.000.000d
              </div>
          </div>
          </div>
         
      </div>
      <div class="cart-chitiet__product">
          <div class="cart-chitiet__box">
               <img src="/src/img/ao/ao1.webp" alt="">
          <div class="cart-chitiet__bottom">

              <div class="cart-chitiet_title">
                  Lorem ipsum dolor sit amet asd. 
              </div>
             
              <div class="cart-chitiet__soluong">
                SL:  1
              </div>
              <div class="cart-chitiet__price">
                  3.000.000d
              </div>
          </div>
          </div>
         
      </div>
      <div class="cart-chitiet__product">
          <div class="cart-chitiet__box">
               <img src="/src/img/ao/ao1.webp" alt="">
          <div class="cart-chitiet__bottom">

              <div class="cart-chitiet_title">
                  Lorem ipsum dolor sit amet asd. 
              </div>
             
              <div class="cart-chitiet__soluong">
                SL:  1
              </div>
              <div class="cart-chitiet__price">
                  3.000.000d
              </div>
          </div>
          </div>
         
      </div>
      <div class="cart-chitiet__tong">
          <div><span>Số lượng:</span>3</div>
          <div><span>Tổng tiền:</span>3.000.000đ</div>
      </div>
    
  </div>
</div>
  `
  document.querySelector('#cartChiTiet').innerHTML = `${gioHangCT}`;
}
// khong co id
const themItemKoID=(url,data)=>{
  let opt={method:"post",body:JSON.stringify(data),
  headers:{'Content-type':'application/json'}
}

return fetch(`${url}`,opt);
}
// gui thanh toan 
const guiThanhToan=()=>{
  let luuGioHang=new Promise((luuGH,loi)=>{
    data={
      hoTen:document.querySelector('#hoTen').value,
      Sdt:document.querySelector('#sdt').value,
      diaChi:document.querySelector('#diaChi').value,
      email:document.querySelector('#email').value,
      thanhToan:document.querySelector('#value1').value,
    } 
    themItemKoID('http://localhost:3000/donHang',data)
    .then(res=>res.json()).then(d=>luuGH(d))
    
   
  })
   luuGioHang.then(
      luuGH=donHang=>{
        let id_dh=donHang.id;
        console.log(id_dh);
        cart = JSON.parse(localStorage.getItem("giohang"));
        console.log(cart);
        cart.forEach(sp=>{
          data={id_dh:id_dh,id_sp:sp.id,ten_sp:sp.ten_sp,so_luong:sp.soLuong,gia:sp.gia,hinh:sp.hinh}
          themItemKoID('http://localhost:3000/donHangChiTiet',data);
        })
      }
    )
  //
  
}