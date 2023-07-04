"use client";
export default function Footer() {
  function scrollUp() {
    document.getElementById("logo").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <section className="footer p-6 z-0  flex text-xs justify-center relative items-end">
        <p className="footer  uppercase ">copyright by elisa</p>
      </section>
    </>
  );
}
