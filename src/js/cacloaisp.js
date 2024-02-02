const hienSpTheoLoai = async (id,mausac='') => {
  let url = `http://localhost:3000/sanpham?id_loai=${id}&_limit=5&_page=1`;


    if (mausac) {
        url = `http://localhost:3000/sanpham?mau_sac=${mausac}`;
      }
      console.log(url);
      const res= await fetch(url)
    const dataSp = await res.json();
    console.log(dataSp);
    
    const resLoai=await fetch('http://localhost:3000/loai') ;
  const arrLoai=await resLoai.json();
  
    // const datasp = dataSp.filter((item) => item.id_loai == id);
  
    let renderLoai = ``;
    dataSp.forEach((sp) => (renderLoai += rendersanPham(sp)));
    console.log(dataSp);
    let loai = ``;
    arrLoai.forEach(tenLoai => {
      if(id==tenLoai.id){
        loai=tenLoai.ten_loai;
      }
    });
  
  
    document.querySelector(".cacloaisp-right").innerHTML = `   
    <div class="cacloaisp-right__top">
  
    <div class="bocuc">
    Danh Mục: ${loai}
    </div>
    <div class="phanloai">
        <select name="" id="">
            <option value="">Mới nhất</option>
            <option value="">Cũ nhất</option>
        </select>
    </div>
  </div>
  <div class="cacloaisp-right__bottom">
    <div class="products__normal">
        <div class="product__boxs">
          
    ${renderLoai}
  
        </div>
    </div>
    <div class="numbers">
        <span class="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
  </div>`;
  };
  function mauSac (mauSac){
   
    let renderColors=``;
mauSac.forEach((sp)=>{
   renderColors+=`
   <a href="products.html?mau_sac=${sp}" class="item__box">
   <div class='${sp} circle'>

</div>
${sp}
</a>
   `
   console.log(sp);
   
  

})
document.querySelector('#mausac').innerHTML=renderColors;
}
// const hienSpTheoLoai = async (id) => {
//     const res = await fetch("http://localhost:3000/sanpham");
//     const dataSp = await res.json();
//     console.log(dataSp);
//     const resLoai=await fetch('http://localhost:3000/loai') ;
//   const arrLoai=await resLoai.json();
  
//     const datasp = dataSp.filter((item) => item.id_loai == id);
//     console.log(datasp);
//     let renderLoai = ``;
//     datasp.forEach((sp) => (renderLoai += rendersanPham(sp)));
//     console.log(datasp);
//     let loai = ``;
//     arrLoai.forEach(tenLoai => {
//       if(id==tenLoai.id){
//         loai=tenLoai.ten_loai;
//       }
//     });
  
  
//     document.querySelector(".cacloaisp-right").innerHTML = `   
//     <div class="cacloaisp-right__top">
  
//     <div class="bocuc">
//     Danh Mục: ${loai}
//     </div>
//     <div class="phanloai">
//         <select name="" id="">
//             <option value="">Mới nhất</option>
//             <option value="">Cũ nhất</option>
//         </select>
//     </div>
//   </div>
//   <div class="cacloaisp-right__bottom">
//     <div class="products__normal">
//         <div class="product__boxs">
          
//     ${renderLoai}
  
//         </div>
//     </div>
//     <div class="numbers">
//         <span class="active">1</span>
//         <span>2</span>
//         <span>3</span>
//         <span>4</span>
//     </div>
//   </div>`;
//   };

  const hienDanhMuc=()=>{

    document.querySelector('#left__cacloaisp').innerHTML=
    `  <div class="cacloaisp-box">
    <div class="cacloaisp-item">
        <div class="cacloaisp-item__top">
            <h3>Danh muc</h3>
            <p>-</p>
        </div>
        <ul id="loai_id">
           
        </ul>
    </div>
    <div class="cacloaisp-item">
        <div class="cacloaisp-item__top" id="">
            <h3>Màu sắc</h3>
            <p>-</p>
        
        </div>
     <div class="cacloaisp-item_bottom" id="mausac"> 
          
              
            
            </div>
    </div>

</div>`;
menuList(0)
const mausac=['đỏ','xanh','xám'];
mauSac(mausac);
  }

