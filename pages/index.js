import SetHead from "../components/head/index";
import Footer from "../components/footer/index";
import Product from "../components/product/index";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Vukosavljevic and Gornjak is Snobar ',
    image:
      'https://cdn.jeab.com/wp-content/uploads/2013/05/snobar_chair-4-1024x682.jpg',
    price: '$130.00',
    detail: 'A soft, comfortable chair with a cute design. The chair by Vukosavljevic and Gornjaks Snobar designed for Yonder Magnetik was inspired by the Snowberry tree in Sweden. It looks like a chair, not very high in white color. The cushion is soft and comfortable like a cloud. The base is made of light wood.',
   
  },
  {
    id: 'm2',
    title: 'Modern style armchair chair',
    image:
      'https://th-test-11.slatic.net/shop/a6ff8fb808ef91aea73a2f609736c42c.jpeg_2200x2200q80.jpg_.webp',
      price: '$243.00',
      detail: 'Modern style armchair chair wooden legs beech minimal living room furniture Living room chair',
  },
  {
    id: 'm3',
    title: 'Modern style chair ',
    image:
      'https://i.pinimg.com/564x/04/df/d7/04dfd7542a23eea0adb6f4dd8417c84a.jpg',
    price: '$189.00',
    detail: 'Modern style chair Soft leather seat, comfortable seat, waterproof, black wooden legs and premium gold plated legs. Strong resistance guaranteed | Anuta shop',
   
  },
  {
    id: 'm4',
    title: 'Mobili per ufficio New Loop',
    image:
      'https://i.pinimg.com/564x/07/57/a1/0757a1b032836314d77a34dc18fd72d9.jpg',
      price: '$2870.00',
      detail: 'Mobili per ufficio New Loop - Arredamento per Ufficio',
  },
  {
    id: 'm5',
    title: 'Un paravent stylé dans ma déco ',
    image:
      'https://i.pinimg.com/564x/54/b7/17/54b7178572309b139a40c45e965b7095.jpg',
    price: '$410.00',
    detail: 'Un paravent stylé dans ma déco - Quand on habite dans un petit appartement, on est sans cesse à la recherche de nouvelles idées pour séparer les espaces et créer des petits coins cosy.',
   
  },
  {
    id: 'm6',
    title: 'Wishbone Dining Chair',
    image:
      'https://i.pinimg.com/564x/4c/72/57/4c7257dee07db194fda544eefac9799d.jpg',
      price: '$193.00',
      detail: 'Set a new Scandi standard in your kitchen, bar, restaurant or café with our exquisite Hans Wegner Wishbone Dining Chairs. This striking Black Ash variant with a stunningly crafted Natural Paper Coil Seat lets your guests know that you mean business when it comes to high profile styling. The Wishbone epitomises the very best of Danish furniture design. A class above, these beauties have Y-shaped curved high backs that make for a supremely comfortable seating position, offering both top tier aesth',
  },
  {
    id: 'm7',
    title: 'Dining Chairs ',
    image:
      'https://i.pinimg.com/564x/55/ea/f1/55eaf1e321b8fd93d376419442baa07c.jpg',
    price: '$459.00',
    detail: 'Dining Chairs Entertain in comfort and style with luxury dining chairs from onekingslane.com. Shop everything from traditional oak side chairs to casual wicker dining chairs.',
   
  },
  {
    id: 'm8',
    title: 'Dining room table',
    image:
      'https://i.pinimg.com/564x/20/8d/f8/208df8d4b28d7133e45f8afa8e82bc00.jpg',
      price: '$2870.00',
      detail: 'Dining room table - Luna sheesham tables 180x90 - Tikamoon Tikamoon : Luna solid sheesham Dining Table 180x90',
  },
  {
    id: 'm9',
    title: 'Furniture',
    image:
      'https://i.pinimg.com/564x/91/1e/49/911e490d1927b49762f111008d79bc88.jpg',
      price: '$้4570.00',
      detail: ' Bedding, Furniture, Electronics, Jewelry, Clothing & more This modern industrial coffee table combines design with function. Create a warm welcome with the clean lines of this 42" console table. Whether tucked behind the sofa or a display for a menagerie of trinkets, this console table is the perfect backdrop to create a magazine-ready display. : ? A variety of hand-crafted finishes including blackened bronze, golden brass, satin nickel and white are applied to the steel frame. The table top and shelves are made of tempered clear glass. ? Premium materials have been used in making this table: tempered glass throughout the table top and shelves while a steel frame ensures optimal storage.',
  },
  {
    id: 'm10',
    title: 'Limited Edition Sideboard Designs ',
    image:
      'https://i.pinimg.com/564x/05/1b/24/051b2413ccce88c56c9f750aebb74000.jpg',
    price: '$5710.00',
    detail: 'Limited Edition Sideboard Designs by Boca do Lobo The best of luxury sideboard design in a selection curated by Boca do Lobo to inspire interior designers looking to finish their projects. Discover the best buffets and sideboards for your Dining Room in mid-century, contemporary, industrial or vintage style by some of the best furniture brands out there.',
   
  },
  {
    id: 'm11',
    title: 'Lindos recibidores modernos',
    image:
      'https://demofc076.trustthemes.net/wp-content/uploads/2017/08/Contemporary_Levy_A_A1.jpg',
      price: '$723.00',
      detail: 'Lindos recibidores modernos - Paperblog El recibidor es el ambiente y la primera imagen que reciben nuestros invitados de nuestro hogar, por eso hoy te presentamos unas propuestas de recibidores modernos.',
  },
  {
    id: 'm12',
    title: 'Villette Console Table - Silver',
    image:
      'https://i.pinimg.com/564x/a1/cd/46/a1cd46e8bd387d46a597dbfffd755d17.jpg',
    price: '$485.00',
    detail: 'With a slender metal frame and exquisite silver finish - our rectangular console table is perfect for your hallway or living space. The simple design allows for ultimate styling versatility, suiting a variety of looks; the silver finish is exquisite by',
   
  },
 
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Product data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      data: DUMMY_MEETUPS,
    },
  };
}