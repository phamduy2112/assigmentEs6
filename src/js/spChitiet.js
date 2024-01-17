const chiTietSP=async (id)=>{
    let sp1=await fetch(`http://localhost:3000/sanpham?id=${id}`).then((res)=>res.json()).then((d)=>d[0]);
  
  
   
    let sp2=await fetch(`http://localhost:3000/thuoc_tinh?id_sp=${id}`).then((res)=>res.json()).then((d)=>d[0]);
    let sp={...sp1,...sp2}
    console.log(sp);
    let render=`  <div class="product-chitiet">
    <div class="product-chitiet__top">
        <div class="product-chitiet__left">
            <div class="big_img">
                <img src=${sp.hinh} alt="">
            </div>
            <div class="small_img">
                <div class="small_image">
                <img src=${sp.hinh} alt="">
                <img src=${sp.hinhsp2} alt="">
                <img src=${sp.hinhsp2} alt="">
                <img src=${sp.hinhsp2} alt="">
                <img src=${sp.hinhsp2} alt="">
               
                </div>
               
            </div>
        </div>
        <div class="product-chitiet__right">
            <div class="product-chitiet__padding">
                  <h3>${sp.ten_sp}</h3>
            <div class="product__icons">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <span>(10 người đã đánh giá)</span>
            </div>
            <div class="price">
            Giá:
                
                ${sp.gia}
            </div>
            <hr>
            <p class="loai"><span>Loai:</span> Ao</p>
            <p class="loai"><span>Ma:</span>${sp.ma_sp}</p>
            <p class="loai"><span>Mau sac:</span>${sp.mau_sac}</p>
            <p class="loai"><span>Size:</span>35,37,39</p>
            <hr>
            <div class="product-chitiet__box">  
                     <div class="soluong">
                <div class="cong">
                    <i class="fa-regular fa-plus"></i>
                </div>
                <div class="number">
                    1
                </div>
                <div class="tru">
                    <i class="fa-solid fa-minus"></i>
                </div>
            </div> 
            <button class="btn themgiohang">Thêm vào giỏ hàng</button>
        
        </div>
        <button class="btn muangay">Mua ngay</button>
        <div class="product-chitiet-final">
            <div class="product-chitiet--item">
                  <i class="fa-regular fa-heart"></i>
            Thêm vào yêu thích
            </div>
            <div class="product-chitiet--item">
                <i class="fa-regular fa-share"></i>
                 Đổi trả lại
            </div>
          
        </div>
        <hr>
        <p class="loai d-flex"><span>Chia sẽ ngay qua:</span>
        <span class="product-chitiet-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-facebook-f"></i>
        </span>
        </p>
    
  
        </div>
            </div>
          
    </div>
    <div class="product-chitiet__bottom">
        <div class="product-chitiet__cha d-flex">
            <div class="product-chitiet-cha__item active">Thông Tin Chi Tiết</div>
            <div class="product-chitiet-cha__item">Bình Luận</div>
        </div>
        <div class="product-chitiet__con">
            <div class="product-chitiet-con__item">
                <p>Mô tả</p>
                <div>Sơ mi dài tay với chất vải cotton thoáng khí và mềm mại, thoải mái cả ngày dài. Được hoàn thiện trên công nghệ bền màu tiên tiến, giữ nguyên tone màu sau nhiều lần giặt. Form regular phù hợp với mọi vóc dáng, dễ dàng phối với nhiều trang phục khác nhau. Đường may cao cấp chỉn chu trong từng chi tiết, nhiều màu để bạn lựa chọn. </div>
                <div>Chất liệu: Pure Cotton Oxford </div>
                
                Đặt giao ngay tại website của Kenta hoặc đến cửa hàng để mua sắm và trải nghiệm! 
                
                <div>Hướng dẫn bảo quản:</div>
                <li> - Không dùng hóa chất tẩy.</li>
                <li>  - Ủi ở nhiệt độ thích hợp, hạn chế dùng máy sấy.</li>
                <li> - Giặt ở chế độ bình thường, với đồ có màu tương tự.</li>
               
                
                
                
            </div>
        </div>
        <!-- product -->
       <div id= "normalSP">
       ${renderSPBT(6,'Những sản phẩm bạn có thể thích')}
       </div>
     
  
    </div>
  </div>`

    document.querySelector('#product-chitiet').innerHTML=`${render}`;
  
  
  }