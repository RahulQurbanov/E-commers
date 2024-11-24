import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { useSelector, useDispatch } from "react-redux";
import { setProductId as setSelectedProductId } from "./store/categoryProduct";
import { setProductImage as selectedProductImage } from "./store/categoryProduct";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null);
  const selectedProductId = useSelector((state) => state.category.selectedProductId);
  const selectedProductImage = useSelector((state) => state.category.selectedProductImage);
  const dispatch = useDispatch();
  const defaultImage = selectedProductImage;

  // API'den ürün detaylarını alır
  async function fetchProductDetail() {
    try {
      const response = await fetch(`https://test.mybrands.az/api/v1/products/${selectedProductId}`);
      console.log(selectedProductId);
      if (!response.ok) {
        throw new Error("Ürün bilgisi alınamadı.");
      }
      const data = await response.json();
      setProduct(data);
      console.log("ProductDetail:",data)

      // İlk küçük resmi mainImage olarak ayarla
      const firstImage = data?.variations?.[0]?.image?.items?.[0]?.file || defaultImage;
      setMainImage(firstImage);
      setLoading(false);
    } catch (error) {
      console.error("Hata:", error);
      setLoading(false);
    }
  }

  // selectedProductId değiştiğinde ürün bilgilerini getir
  useEffect(() => {
    if (selectedProductId) {
      fetchProductDetail();
    }
  }, [selectedProductId]);

  // 'id' parametresi değiştiğinde selectedProductId'yi güncelle
  useEffect(() => {
    if (id && id !== selectedProductId) {
      dispatch(setSelectedProductId(id));
    }
  }, [id, selectedProductId, dispatch]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (!product) {
    return <p>Ürün bilgisi bulunamadı.</p>;
  }

  const handleThumbnailClick = (imageFile) => {
    setMainImage(imageFile || defaultImage);
  };

  return (
    <div className="w-[79%] m-auto p-4 flex flex-col">
      <div className="flex gap-32">
        {/* Product Images */}
        <div className="flex gap-7 w-[42%] m-auto">
          {/* Thumbnails */}
          <div className="w-[85px] flex flex-col gap-2 cursor-pointer">
            {product?.variations?.[0]?.image?.items?.length > 0 ? (
              product.variations[0].image.items.map((img, index) => (
                <img
                  key={index}
                  src={img.file}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-auto"
                  onClick={() => handleThumbnailClick(img.file)}
                />
              ))
            ) : (
              <p>Resimler mevcut değil.</p>
            )}
          </div>

          {/* Main Image - Zoomable */}
          <div className="w-[500px]">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Main Product",
                  isFluidWidth: true,
                  src: mainImage,
                },
                largeImage: {
                  src: mainImage,
                  width: 1200,
                  height: 1000,
                },
                lensStyle: { backgroundColor: "rgba(255, 255, 255, 0.3)" },
                enlargedImageContainerDimensions: {
                  width: "150%",
                  height: "95%",
                },
                enlargedImagePosition: "beside",
              }}
            />
          </div>
        </div>
        {/* Product Details */}
        <div className="mt-6 flex flex-col items-center gap-6 w-[58%] font-circe">
          <div className="flex flex-col gap-[1px]">
            <span className="text-2xl font-bold">{product.manufacturer.title}</span>
            <span className="text-[13px] text-gray-400 text-center font-light">
              {product.categories[0].title_az}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-center text-xl font-bold">{product.variations[0].price} AZN</span>
            <a href="#" className="underline text-[12px]">
              Çatdırılma və geri qaytarılma haqqında məlumat
            </a>
          </div>
          <div className="flex items-center gap-5 cursor-pointer" onClick={(item)=>{item.style.deceration = "underline"}}>
            {product.variations.map((size,index) =>{
              return <div key={index}>
                <p>{size.size.title_az}</p>
              </div>
            })}
          </div>
          <div className="flex items-center gap-5 text-red-500 text-lg">
            <p><i class="fa-solid fa-clock-rotate-left"></i></p>
            <p>MƏHDUD SAYDA</p>
          </div>
          <div className="flex flex-col w-[90%] gap-[20px]">
            <button className="bg-[#212D4A] text-white py-3 px-7 text-xl">
              Səbətə əlavə et
            </button>
            <button className="text-[#212D4A] bg-gray-100 py-3 px-7 text-xl">
              <i className="fa-regular fa-heart pr-4"></i>Arzu olunanlara əlavə et
            </button>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="w-[100%] flex items-center gap-5 mt-20">
        <div className="border-[1px] border-[#e0e0e0] w-[36%] h-[250px] px-12 py-5">
          <h1 className="text-[15px] font-bold  mb-4">MƏHSUL HAQQINDA ƏSAS MƏLUMAT</h1>
          <p className="text-[13px] mb-5">Məhsulun kodu: {product.sku}</p>
          <div className="text-[13px]">
            <p>- {product.category ? product.category.title_az : "Kategori bilgisi yok"}</p>
            <p>- Çanta və aksesuarlar</p>
            <p>- {product.gender ? product.gender.title_az : "Cinsiyet bilgisi yok"}</p>
          </div>
        </div>
        <div className="border-[1px] border-[#e0e0e0] w-[32%] h-[250px] px-12 py-5">
          <h1 className="text-[15px] font-bold mb-5">MƏHSUL HAQQINDA ƏTRAFLI MƏLUMAT</h1>
        </div>
        <div className="border-[1px] border-[#e0e0e0] w-[30%] px-12 py-5 h-[250px]">
          <h1 className="text-[15px] font-bold mb-5">Seçilmiş parametrlər</h1>
          <div className="text-[14px]">
            <p>- Ölçü: {product.variations[0].size.title_az || "No size"}</p>
            <p>- Rəng: {product.variations[0].color.title_az || "No color"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}