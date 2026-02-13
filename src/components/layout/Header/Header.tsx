import logo from "@/assets/images/logo.png";

export const Header = () => {
  return (
    <>
      <header className="py-2 pt-12.5 lg:pt-25 flex flex-col sm:flex-row sm:items-center sm:justify-between md:justify-center md:gap-15">
        <h1 className="flex flex-col items-center gap-3.5 mb-4 lg:flex-row">
          <p className="text-[64px] font-semibold font-[Unbounded] text-[#6E6E49] uppercase">
            ПРАЙС
          </p>
          <img className="h-16" src={logo} alt="KIBORG" />
        </h1>

        <div className="flex flex-col items-center gap-5">
          <a
            href=""
            className="block font-[Unbounded] uppercase font-[16px] bg-[#434343] text-white rounded-[15px] w-75 py-3.75 text-center"
          >
            ПЕРЕЙТИ НА САЙТ
          </a>
          <a
            href=""
            className="block font-[Unbounded] uppercase font-[16px] bg-[#8F9250] text-white rounded-[15px] w-75 py-3.75 text-center"
          >
            ЗАМОВЛЕННЯ ТА ПИТАННЯ
          </a>
        </div>
      </header>
    </>
  );
};

