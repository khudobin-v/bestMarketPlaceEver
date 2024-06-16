import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import authorizedUser from "@/store/authorizedUser";
import authorizedUserStore from "@/store/authorizedUser";

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="h-40 px-10 bg-footer-bg w-full flex items-center justify-between">
      <p className="w-1/3 max-w-1/2 text-white text-sm">
        {currentYear} © KubMarket — потрясающий интернет-магазин всякого
        барахла. Ваши и наши права не защищены. Работаем только самовывозом. На
        Торговой площадке не применяются технологии. Не мошенники. Адрес для
        направления юридически значимых сообщений отсутствует.
      </p>
      <div className="flex items-center gap-6">
        <h3 className="font-bold text-white mb-6 text-end">
          Загрузите наше <br /> приложение
        </h3>
        <Link
          href="/app/android.apk"
          className="flex flex-col items-center gap-1"
          download="KubMarketApp.apk"
          d
        >
          <Image
            src="/qr-codes/android-app.png"
            width={80}
            height={80}
            alt="Скачайте приложение KubMarket для Android"
          />
          <h3 className="font-bold text-white">Android</h3>
        </Link>
      </div>
    </footer>
  );
};
