import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import HeaderReservation from "@/components/HeaderReservation";
import Nav from "@/components/Nav";
export default function Contact() {
  return (
    <>
      <Nav />
      <HeaderReservation
        image={"contact.png"}
        button={"hidden"}
        title={"CONTACT US"}
        subtitle={""}
      />
      <ContactInfo />
      <Footer />
    </>
  );
}
