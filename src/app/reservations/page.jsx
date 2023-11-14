import BookATable from "@/components/BookATable";
import Footer from "@/components/Footer";
import HeaderReservation from "@/components/HeaderReservation";
import Nav from "@/components/Nav";

export default function Reservations() {
  return (
    <>
      <Nav />
      <HeaderReservation image={"mainslider.jpg"} />
      <BookATable />
      <Footer />
    </>
  );
}
