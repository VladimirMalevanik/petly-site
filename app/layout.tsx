export const metadata = {
  title: "Petly mini — умное устройство для питомцев",
  description: "Конфигуратор Petly mini для кошек и собак",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
