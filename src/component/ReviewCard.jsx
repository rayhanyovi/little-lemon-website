const dummyData = [
  {
    user: "Ayu Pratiwi",
    review:
      "Nasi Mak Limah Biadab bikin sakit perut dan mencret. Tapi gapapa. Lebih enak kalo mencretnya dituang ke makanannya",
    image: "/stark.jpg",
    grade: 5,
  },
  {
    user: "Rizki Andika",
    review:
      "Pelayanan yang ramah dan suasana yang nyaman. Cocok untuk makan keluarga.",
    image: "/stark.jpg",
    grade: 4,
  },
  {
    user: "Siti Nurhaliza",
    review: "Sop seafood-nya enak banget! Benar-benar memanjakan lidah.",
    image: "/stark.jpg",
    grade: 5,
  },
  {
    user: "Budi Santoso",
    review:
      "Porsi makanan yang cukup besar dan rasanya enak. Harga juga terjangkau.",
    image: "/stark.jpg",
    grade: 4,
  },
  {
    user: "Dewi Lestari",
    review: "Suka banget sama dessert-nya! Sangat manis dan lezat.",
    image: "/stark.jpg",
    grade: 5,
  },
  {
    user: "Fikri Ahmad",
    review:
      "Tempatnya bersih dan nyaman, cocok buat nongkrong sambil ngobrol santai.",
    image: "/stark.jpg",
    grade: 4,
  },
  {
    user: "Tuti Rahayu",
    review:
      "Menu makanannya variatif dan semua rasanya enak. Sangat merekomendasikan!",
    image: "/stark.jpg",
    grade: 5,
  },
  {
    user: "Bambang Supriadi",
    review: "Minumannya segar, dan makanannya enak. Tempat ini wajib dicoba!",
    image: "/stark.jpg",
    grade: 4,
  },
  {
    user: "Citra Dewi",
    review: "Sambalnya pedasnya pas, membuat makan jadi semakin nikmat!",
    image: "/stark.jpg",
    grade: 4,
  },
  {
    user: "Ucok Tantowi",
    review:
      "Suasananya tenang, sangat pas buat bersantai dan menikmati hidangan.",
    image: "/stark.jpg",
    grade: 5,
  },
];

function ReviewCard() {
  return (
    <div className="flex flex-row w-full overflow-x-auto gap-4 snap-x h-fit">
      {dummyData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-60 h-fit flex-shrink-0 items-center p-4 md:p-6 shadow-lg border md:w-60 lg:w-72 snap-center snap-mandatory"
        >
          <div className="flex flex-col gap-6">
            <p className="font-light italic text-sm line-clamp-4 overflow-elipsis h-20">
              {item.review}
            </p>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  alt={item.title}
                  className="h-7 w-7 rounded-full object-cover"
                />
                <p className="text-center    line-clamp-5 overflow-elipsis text-sm md:text-base">
                  {item.user}
                </p>
              </div>

              <div className="flex flex-row items-center">
                {" "}
                <i className="fi fi-ss-star text-xs text-[#F4CE14] lg:text-base"></i>
                <span className="text-xs lg:text-base">{item.grade}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewCard;
