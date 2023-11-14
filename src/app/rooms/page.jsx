import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import HeaderReservation from "@/components/HeaderReservation";
import Nav from "@/components/Nav";
export default function Rooms() {
  return (
    <>
      <Nav />
      <HeaderReservation
        image={"room1.jpg"}
        button={"hidden"}
        title={true}
        subtitle={true}
      />
      <ContactInfo
        title={"GARDEN ROOMS"}
        textmode={"text-center"}
        text={
          "Our two, nearly identical garden rooms are spacious and provide an indoor patio-like atmosphere with large windows, beautiful plants, and warm fireplaces. Each room individually seats up to 40 guests."
        }
      />
      <HeaderReservation
        image={"room2.jpg"}
        button={"hidden"}
        title={true}
        subtitle={true}
      />
      <ContactInfo
        title={"SANTA FE ROOM"}
        textmode={"text-center"}
        text={
          "Featuring beautiful copper and warm wood tones, with shuttered adobe style interior windows, the Santa Fe room is attractive for options such as a bar setup, gift table setup, and room for mingling before dinner. Seats up to 30 guests."
        }
      />
      <HeaderReservation
        image={"room3.png"}
        button={"hidden"}
        title={true}
        subtitle={true}
      />
      <ContactInfo
        title={"SEDONA ROOM"}
        textmode={"text-center"}
        text={
          "Ambient and inviting, the Sedona room is perfect for a smaller, more intimate occasion. Seats 2 to 20 guests."
        }
      />
      <Footer />
    </>
  );
}
