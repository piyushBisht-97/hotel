import images from './images';

const wines = [
  {
    title: 'Chicken Kadahi',
    price: '$16.50',
    tags: 'Chicken cooked with onions | capsicum in semi dry gravy ',
  },
  {
    title: 'Chicken Korma',
    price: '$16.50',
    tags: 'Chicken prepared with rich aromatic spices',
  },
  {
    title: 'Chicken Madras',
    price: '$15.50',
    tags: 'Boneless chicken cooked with mustard seeds ',
  },
  {
    title: 'Chicken Saag',
    price: '$15.0',
    tags: 'Chicken prepared in spinach based gravy',
  },
  {
    title: 'Chicken Vindaloo',
    price: '$15.0',
    tags: 'Spicy chicken curry prepared in Goan hot curry',
  },
  {
    title: 'Butter Chicken',
    price: '$15.50',
    tags: 'Boneless chicken grilled in tandoori',
  },
  {
    title: 'Chicken Tikka Masala',
    price: '$15.50',
    tags: 'Boneless chicken cooked in creamy tomato based gravy with capsicum & onion',
  },
  {
    title: 'Chicken Curry',
    price: '$14.0',
    tags: 'A traditional north Indian chicken cooked in onion & tomato gravy with aromaic spices',
  },
  {
    title: 'Chicken Jalfrezi',
    price: '$15.0',
    tags: 'Chicken cooked with capsicum',
  },
];

const cocktails = [
  {
    title: 'Lamb | Beef Kadam',
    price: '$20',
    tags: 'Lamb or beef cooked with onions tomatoes and capsicum in a semi dried gravy',
  },
  {
    title: 'Lamb | Beef Korma',
    price: '$16',
    tags: 'Cooked with rich aromatic spices in nutty gravy',
  },
  {
    title: 'Lamb | Beef Madras',
    price: '$10',
    tags: 'Cooked with mustard seeds & finished with coconut cream',
  },
  {
    title: 'Lamb | Beef Saag',
    price: '$31',
    tags: 'Lamb or Beef prepared in spinach based gravy',
  },
  {
    title: 'Lamb | Beef Vindaloo',
    price: '$26',
    tags: 'Lamb or Beef curry prepared in Goan hot curry',
  },
  {
    title: 'Lamb | Beef Rogan Josh',
    price: '$26',
    tags: 'Lamb or Beef curry prepared in Goan hot curry',
  },
  {
    title: 'Lamb | Beef Bhuna Ghost',
    price: '$26',
    tags: 'Lamb or Beef pieces sauteed with onions & tomatoes in a dry spicy sauce',
  },
  {
    title: 'Meat Balls',
    price: '$26',
    tags: 'Meat bowls cooked in aromatic spices from Kashmir',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
